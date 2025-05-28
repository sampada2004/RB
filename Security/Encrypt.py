import base64
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
import os
from dotenv import load_dotenv

load_dotenv()

key = base64.b64decode(os.getenv("AES_KEY"))
iv = base64.b64decode(os.getenv("AES_IV"))

def encrypt_file(input_path, output_path):
    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    encryptor = cipher.encryptor()

    with open(input_path, 'rb') as f_in:
        data = f_in.read()

    # Padding to 16 bytes
    padding_length = 16 - len(data) % 16
    data += bytes([padding_length] * padding_length)

    encrypted = encryptor.update(data) + encryptor.finalize()

    with open(output_path, 'wb') as f_out:
        f_out.write(encrypted)

    print("File encrypted.")

encrypt_file("data/circulars2.pdf", "data/circulars2.enc")
