from PIL import Image

# Open the screenshot
img = Image.open(r"C:\Users\usuario\.gemini\antigravity\brain\4557db59-78d2-4246-8de3-61b9d64adac6\.user_uploaded\media_1787787326392.png")

# Crop the top 150 pixels of the screen (covers title bar, tabs, URL bar, bookmark bar)
# Box coordinates: (left, upper, right, lower)
top_bar = img.crop((0, 0, img.width, 120))
top_bar.save(r"C:\Users\usuario\.gemini\antigravity\brain\4557db59-78d2-4246-8de3-61b9d64adac6\scratch\top_bar.png")

print("Top bar cropped successfully.")
