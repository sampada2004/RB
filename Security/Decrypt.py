import base64
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
import os
from dotenv import load_dotenv

load_dotenv()

key = base64.b64decode(os.getenv("AES_KEY"))
iv = base64.b64decode(os.getenv("AES_IV"))

def decrypt_file(input_path, output_path):
    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    decryptor = cipher.decryptor()

    with open(input_path, 'rb') as f_in:
        encrypted_data = f_in.read()

    decrypted = decryptor.update(encrypted_data) + decryptor.finalize()

    # Remove padding
    padding_length = decrypted[-1]
    decrypted = decrypted[:-padding_length]

    with open(output_path, 'wb') as f_out:
        f_out.write(decrypted)

    print("File decrypted.")

decrypt_file("data/circulars2.enc", "data/circulars.pdf")
