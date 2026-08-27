from PIL import Image

# Open project_header.png
img = Image.open(r"C:\Users\usuario\.gemini\antigravity\brain\4557db59-78d2-4246-8de3-61b9d64adac6\scratch\project_header.png")
gray = img.convert("L")
width, height = gray.size

# Let's find rows that contain text (not completely dark)
# Background is dark (~24 value)
text_rows = []
for y in range(height):
    row_pixels = [gray.getpixel((x, y)) for x in range(width)]
    avg = sum(row_pixels) / len(row_pixels)
    max_val = max(row_pixels)
    min_val = min(row_pixels)
    # If there is a high contrast pixel, it might be text
    if max_val - min_val > 50:
        text_rows.append((y, max_val, avg))

print("Rows with potential text:")
for r in text_rows[:20]:
    print(f"Row {r[0]}: max={r[1]}, avg={r[2]:.2f}")
