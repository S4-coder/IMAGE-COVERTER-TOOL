from flask import Flask, render_template, request, send_file
from PIL import Image
from rembg import remove
import io
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert():
    if 'image' not in request.files:
        return 'No image uploaded', 400

    file = request.files['image']
    remove_bg = request.form.get('remove_bg') == 'true'

    if file.filename == '':
        return 'No selected file', 400

    try:
        # Read the image
        img = Image.open(file.stream)
        
        # Remove background if requested
        if remove_bg:
            # Convert image to bytes
            img_byte_arr = io.BytesIO()
            img.save(img_byte_arr, format=img.format)
            img_byte_arr = img_byte_arr.getvalue()
            
            # Remove background
            output = remove(img_byte_arr)
            img = Image.open(io.BytesIO(output))

        # Convert to PNG
        output = io.BytesIO()
        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
            # Image with transparency
            img.save(output, format='PNG')
        else:
            # Convert to RGB if needed
            img = img.convert('RGB')
            img.save(output, format='PNG')
        
        output.seek(0)
        return send_file(output, mimetype='image/png', as_attachment=True, download_name='converted.png')

    except Exception as e:
        print(f"Error: {str(e)}")
        return 'Error processing image', 500

if __name__ == '__main__':
    app.run(debug=True)
