document.addEventListener('DOMContentLoaded', () => {
    const dropArea = document.querySelector('.drag-area');
    const browseBtn = document.querySelector('.browse-btn');
    const fileInput = document.querySelector('#fileInput');
    const uploadForm = document.querySelector('#uploadForm');
    const previewContainer = document.querySelector('.preview-container');
    const previewImage = document.querySelector('#previewImage');
    const downloadBtn = document.querySelector('#downloadBtn');

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    // Highlight drop zone when dragging over it
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });

    // Handle dropped files
    dropArea.addEventListener('drop', handleDrop, false);
    
    // Handle browse button
    browseBtn.addEventListener('click', () => fileInput.click());
    
    // Handle file input change
    fileInput.addEventListener('change', handleFiles);

    // Handle form submission
    uploadForm.addEventListener('submit', handleUpload);

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(e) {
        dropArea.classList.add('highlight');
    }

    function unhighlight(e) {
        dropArea.classList.remove('highlight');
    }

    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles({ target: { files } });
    }

    function handleFiles(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                previewContainer.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    }

    async function handleUpload(e) {
        e.preventDefault();
        
        const file = fileInput.files[0];
        if (!file) {
            alert('Please select an image first!');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);
        formData.append('remove_bg', document.querySelector('#removeBg').checked);

        try {
            const response = await fetch('/convert', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                downloadBtn.href = url;
                downloadBtn.download = 'converted_image.png';
                downloadBtn.click();
            } else {
                alert('Error converting image. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error converting image. Please try again.');
        }
    }
});
