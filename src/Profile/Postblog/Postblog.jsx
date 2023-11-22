import React, { useContext, useEffect, useState } from 'react';
import './Postblog.css'; // Import the CSS file
import axios from 'axios';



import { AuthContext } from '../../contexts/AuthProvider';

const img_hosting_token = '6fb68cbd4232c1e20fa193c68ca16ae7';

const Postblog = () => {
    const [title, setTitle] = useState('');
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;
    const { user } = useContext(AuthContext);
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [img, setImage] = useState(null); // Initialize with null
    // const [postPublished, setPostPublished] = useState(false);
    // const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        // Set the current date when the component mounts
        const currentDate = new Date().toISOString().slice(0, 10);
        setDate(currentDate);
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const handleCrossButtonClick = () => {
        // Clear the input type file element
        const fileInput = document.querySelector('#file-input');
        fileInput.value = '';

        // Hide the preview image
        const previewImage = document.querySelector('.preview-image');
        previewImage.style.display = 'none';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', img); // Append the file object

        try {
            // Upload the image to imgBB
            const imgUploadResponse = await fetch(img_hosting_url, {
                method: 'POST',
                body: formData,
            });
            const imgResponseData = await imgUploadResponse.json();

            if (imgResponseData.data) {
                const email = user.email;

                // Make an axios POST request with the image URL
                const response = await axios.post('http://localhost:5000/blog', {
                    title,
                    description,
                    date,
                    img: imgResponseData.data.display_url,
                    email,
                });

                // Show a toast notification when the post is published
                // setToastMessage('Post Published');
                // setPostPublished(true);

                // Reset the form fields
                setTitle('');
                setDescription('');
                setImage(null);
            } else {
                console.error('Error uploading image:', imgResponseData.error);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="postblog-container">
            <div className='bg-gray-200 postblog'>
                <h1>Add a Blog Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-group '>
                        <label className=''>Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    
                    <div className='form-group '>
                        <label className=''>Description:</label>
                        <textarea className='' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    
                    <div className='form-group'>
                        <label>Image:</label>
                        <input type='file' accept='image/*' onChange={handleImageChange} id='file-input' />

                        {img && (
                            <div className="preview-image">
                                <img src={URL.createObjectURL(img)} alt='Blog Post' />
                                <div className="cross-button" onClick={handleCrossButtonClick}>X</div>
                            </div>
                        )}
                    </div>
                    <div className='form-group'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>

             

            </div>
        </div>
    );
};

export default Postblog;
