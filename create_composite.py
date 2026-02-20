"""
Creates a composite image matching the solution showcase layout:
  Input: 3D Pipe Support  →  Output: 2D Deliverable
              50% Reduction in Effort
"""
from PIL import Image, ImageDraw, ImageFont
import os

BASE = os.path.dirname(os.path.abspath(__file__))
IMG_DIR = os.path.join(BASE, "images")

# --- Config ---
CANVAS_W, CANVAS_H = 1400, 750
BG_COLOR = (248, 250, 252)  # light gray-blue

# Paths
input_img_path = os.path.join(IMG_DIR, "3d-pipe-support-input.jpg")
output_img_path = os.path.join(IMG_DIR, "2d-deliverable-output.jpg")
result_path = os.path.join(IMG_DIR, "solution-showcase-composite.png")

# Check source images exist
for p in [input_img_path, output_img_path]:
    if not os.path.exists(p):
        print(f"ERROR: Missing source image: {p}")
        print("Please save both source images first.")
        exit(1)

# --- Load fonts (use default if custom not available) ---
def get_font(size, bold=False):
    font_paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    ]
    for fp in font_paths:
        if os.path.exists(fp):
            return ImageFont.truetype(fp, size)
    return ImageFont.load_default()

font_label = get_font(28, bold=False)
font_label_bold = get_font(28, bold=True)
font_stat_large = get_font(42, bold=True)
font_stat_desc = get_font(18, bold=False)

# --- Create canvas ---
canvas = Image.new("RGB", (CANVAS_W, CANVAS_H), BG_COLOR)
draw = ImageDraw.Draw(canvas)

# --- Layout dimensions ---
PADDING = 40
LABEL_H = 45       # height reserved for labels
IMG_TOP = PADDING + LABEL_H
IMG_H = 420         # image display height
IMG_W = 500         # image display width
ARROW_W = 100       # space for arrow
STAT_TOP = IMG_TOP + IMG_H + 30

# Horizontal positions
left_img_x = PADDING + 40
arrow_x = left_img_x + IMG_W + 20
right_img_x = arrow_x + ARROW_W + 20

# --- Draw labels ---
# "Input:" bold + " 3D Pipe Support" regular
label_input_x = left_img_x + IMG_W // 2
draw.text((label_input_x - 130, PADDING), "Input:", fill=(30, 41, 59), font=font_label_bold)
draw.text((label_input_x - 130 + draw.textlength("Input:", font=font_label_bold) + 6, PADDING), "3D Pipe Support", fill=(30, 41, 59), font=font_label)

label_output_x = right_img_x + IMG_W // 2
draw.text((label_output_x - 130, PADDING), "Output:", fill=(30, 41, 59), font=font_label_bold)
draw.text((label_output_x - 130 + draw.textlength("Output:", font=font_label_bold) + 6, PADDING), "2D Deliverable", fill=(30, 41, 59), font=font_label)

# --- Load & paste images with border ---
def paste_image(canvas, img_path, x, y, w, h):
    img = Image.open(img_path).convert("RGB")
    # Resize to fit box while maintaining aspect ratio
    img_ratio = img.width / img.height
    box_ratio = w / h
    if img_ratio > box_ratio:
        new_w = w
        new_h = int(w / img_ratio)
    else:
        new_h = h
        new_w = int(h * img_ratio)
    img = img.resize((new_w, new_h), Image.LANCZOS)

    # Center in box
    offset_x = x + (w - new_w) // 2
    offset_y = y + (h - new_h) // 2

    # Draw white background + border
    border = 3
    draw.rounded_rectangle(
        [x - border, y - border, x + w + border, y + h + border],
        radius=12,
        fill=(255, 255, 255),
        outline=(200, 210, 220),
        width=2,
    )
    canvas.paste(img, (offset_x, offset_y))

paste_image(canvas, input_img_path, left_img_x, IMG_TOP, IMG_W, IMG_H)
paste_image(canvas, output_img_path, right_img_x, IMG_TOP, IMG_W, IMG_H)

# --- Draw arrow ---
arrow_center_y = IMG_TOP + IMG_H // 2
arrow_left = arrow_x + 5
arrow_right = arrow_x + ARROW_W - 5
arrow_mid = (arrow_left + arrow_right) // 2

# Arrow shaft (gradient-like: cyan to orange)
shaft_h = 10
for i in range(arrow_mid - arrow_left):
    ratio = i / (arrow_mid - arrow_left)
    r = int(6 + (234 - 6) * ratio)
    g = int(182 + (88 - 182) * ratio)
    b = int(212 + (12 - 212) * ratio)
    x = arrow_left + i
    draw.line([(x, arrow_center_y - shaft_h // 2), (x, arrow_center_y + shaft_h // 2)], fill=(r, g, b))

# Arrow head (orange)
head_size = 28
draw.polygon([
    (arrow_mid, arrow_center_y - head_size),
    (arrow_right, arrow_center_y),
    (arrow_mid, arrow_center_y + head_size),
], fill=(234, 88, 12))

# --- Draw stat badge ---
stat_text = "50% Reduction in Effort"
stat_desc = "Precision conversion for Energy & Infra Sector EPC."

# Badge box
stat_bbox = draw.textbbox((0, 0), stat_text, font=font_stat_large)
stat_tw = stat_bbox[2] - stat_bbox[0]
stat_th = stat_bbox[3] - stat_bbox[1]
badge_pad_x, badge_pad_y = 24, 12
badge_w = stat_tw + badge_pad_x * 2
badge_h = stat_th + badge_pad_y * 2
badge_x = (CANVAS_W - badge_w) // 2 - 60
badge_y = STAT_TOP

# Orange border box
draw.rounded_rectangle(
    [badge_x, badge_y, badge_x + badge_w, badge_y + badge_h],
    radius=10,
    fill=None,
    outline=(245, 158, 11),
    width=3,
)
draw.text((badge_x + badge_pad_x, badge_y + badge_pad_y - 4), stat_text, fill=(234, 88, 12), font=font_stat_large)

# Description text
desc_x = badge_x + badge_w + 20
desc_y = badge_y + (badge_h - 20) // 2
draw.text((desc_x, desc_y), stat_desc, fill=(71, 85, 105), font=font_stat_desc)

# --- Save ---
canvas.save(result_path, "PNG", quality=95)
print(f"Composite image saved to: {result_path}")
print(f"Image size: {CANVAS_W}x{CANVAS_H}px")
