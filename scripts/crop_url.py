from PIL import Image

# Open the screenshot
img = Image.open(r"C:\Users\usuario\.gemini\antigravity\brain\4557db59-78d2-4246-8de3-61b9d64adac6\.user_uploaded\media_1787787326392.png")

# Crop the left dashboard panel where AltilloJVG title and the URL are
# Let's crop a larger region from x=100 to x=600, and y=150 to y=380
project_header = img.crop((100, 150, 600, 380))
project_header.save(r"C:\Users\usuario\.gemini\antigravity\brain\4557db59-78d2-4246-8de3-61b9d64adac6\scratch\project_header.png")

print("Project header cropped successfully.")
