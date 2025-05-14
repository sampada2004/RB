import pytesseract
from PIL import Image
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

# Load the image
image = Image.open("data/tent.jpg")

# Extract text via OCR
raw_text = pytesseract.image_to_string(image)
print(raw_text)
