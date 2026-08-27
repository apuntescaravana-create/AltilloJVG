from PIL import Image

# Open project_header.png
img = Image.open(r"C:\Users\usuario\.gemini\antigravity\brain\4557db59-78d2-4246-8de3-61b9d64adac6\scratch\project_header.png")
gray = img.convert("L")

# Crop the URL line (y=30 to y=40, and x=60 to x=320)
url_line = gray.crop((60, 29, 320, 42))

width, height = url_line.size
print(f"URL line size: {width}x{height}")

# Print binarized characters: '#' for text, ' ' for background
threshold = 80
for y in range(height):
    line = ""
    for x in range(width):
        pixel = url_line.getpixel((x, y))
        if pixel > threshold:
            line += "#"
        else:
            line += " "
    print(line)
