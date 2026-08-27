from PIL import Image

# Open the screenshot
img = Image.open(r"C:\Users\usuario\.gemini\antigravity\brain\4557db59-78d2-4246-8de3-61b9d64adac6\.user_uploaded\media_1787787326392.png")
gray = img.convert("L")

# Crop the project ID from the address bar
# In the original 1920x1080 image, the address bar URL starts around x=200, y=55.
# Let's crop from x=200 to x=650, y=52 to y=72:
url_crop = gray.crop((200, 52, 650, 72))

width, height = url_crop.size
print(f"Address bar crop size: {width}x{height}")

# Print binarized representation in console
threshold = 120
for y in range(height):
    line = ""
    for x in range(width):
        pixel = url_crop.getpixel((x, y))
        if pixel > threshold:
            line += "#"
        else:
            line += " "
    print(line)
