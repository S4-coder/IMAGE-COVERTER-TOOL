# 🖼️ Image Converter & Background Remover

[![Python](https://img.shields.io/badge/Python-3.7+-blue.svg)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-2.0+-green.svg)](https://flask.palletsprojects.com/)
[![PIL](https://img.shields.io/badge/Pillow-8.0+-orange.svg)](https://python-pillow.org/)
[![rembg](https://img.shields.io/badge/rembg-latest-red.svg)](https://github.com/danielgatis/rembg)


## ✨ Features

- 🔄 Convert any image format to PNG
- 🎯 Remove image backgrounds with one click
- 🖱️ Drag and drop interface
- 👁️ Live preview before conversion
- 💫 Preserves image transparency
- 📱 Responsive design
- ⚡ Fast processing

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://your-repository-url
   cd img-to-png-converter
   ```

2. **Set up Virtual Environment**
   ```bash
   python -m venv .venv
   ```

3. **Activate Virtual Environment**
   - For Windows:
     ```bash
     .\.venv\Scripts\activate
     ```
   - For Linux/Mac:
     ```bash
     source .venv/bin/activate
     ```

4. **Install Dependencies**
   ```bash
   pip install flask pillow rembg onnxruntime
   ```

## 💻 Usage

1. **Start the Application**
   ```bash
   python app.py
   ```

2. **Open in Browser**
   - Go to: `http://localhost:5000`
   - Or: `http://127.0.0.1:5000`

3. **Using the Converter**
   - 📂 Drag & drop your image or click "Browse File"
   - ✅ Check "Remove Background" if needed
   - 🔄 Click "Convert" button
   - ⬇️ Your converted PNG will download automatically

## 🛠️ Technical Details

### Backend Technologies
- **Flask**: Web framework
- **Pillow**: Image processing
- **rembg**: Background removal
- **onnxruntime**: ML model runtime

### Frontend Technologies
- **HTML5**: Structure
- **CSS3**: Styling with modern features
- **JavaScript**: Dynamic functionality
- **Fetch API**: Asynchronous requests

## 📁 Project Structure
```
img-to-png-converter/
├── app.py              # Main Flask application
├── static/
│   ├── style.css      # CSS styles
│   └── script.js      # Frontend JavaScript
├── templates/
│   └── index.html     # Main HTML template
└── README.md          # Documentation
```

## 🔍 Features Explanation

### Image Conversion
- Supports multiple input formats (JPG, JPEG, BMP, etc.)
- Converts to high-quality PNG format
- Preserves transparency in output

### Background Removal
- AI-powered background removal
- Preserves edge details
- Outputs with transparency

### User Interface
- Modern and intuitive design
- Real-time image preview
- Progress indication
- Responsive on all devices

## ⚠️ Troubleshooting

### Common Issues

1. **Script Execution Policy Error**
   ```powershell
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

2. **Module Not Found Errors**
   ```bash
   pip install -r requirements.txt
   ```

3. **Port Already in Use**
   - Close other applications using port 5000
   - Or change port in `app.py`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [rembg](https://github.com/danielgatis/rembg) for background removal
- [Flask](https://flask.palletsprojects.com/) for the web framework
- [Pillow](https://python-pillow.org/) for image processing

---
Made with ❤️ by [SABEEL AHMED]
