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
    const [img, setImage] = useState(null);
    const [postPublished, setPostPublished] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
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
        const fileInput = document.querySelector('#file-input');
        fileInput.value = '';

        const previewImage = document.querySelector('.preview-image');
        previewImage.style.display = 'none';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', img);

        try {
            const imgUploadResponse = await fetch(img_hosting_url, {
                method: 'POST',
                body: formData,
            });
            const imgResponseData = await imgUploadResponse.json();

            if (imgResponseData.data) {
                const email = user.email;

                const response = await axios.post('http://localhost:5000/blog', {
                    title,
                    description,
                    date,
                    img: imgResponseData.data.display_url,
                    email,
                });

                setToastMessage('Post Published');
                setPostPublished(true);

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
        <div className="postblog-container h-2">
            <div style={{ backgroundColor: '#e0e0e0', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} className='postblog-box'>
                <h1 style={{ color: 'blue' }}>Add a Blog Post</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '10px' }} className='form-group'>
                        <label>Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '10px' }} className='form-group'>
                        <label>Description:</label>
                        <textarea style={{ width: '100%', minHeight: '100px' }} value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: '10px' }} className='form-group'>
                        <label>Image:</label>
                        <input type='file' accept='image/*' onChange={handleImageChange} id='file-input' />

                        {img && (
                            <div style={{ marginTop: '10px', position: 'relative' }} className="preview-image">
                                <img style={{ maxWidth: '100%', height: 'auto' }} src={URL.createObjectURL(img)} alt='Blog Post' />
                                <div style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer', backgroundColor: 'red', color: 'white', padding: '5px', borderRadius: '50%' }} onClick={handleCrossButtonClick}>X</div>
                            </div>
                        )}
                    </div>
                    <div className='form-group'>
                        <button style={{ backgroundColor: 'green', color: 'white', padding: '10px', cursor: 'pointer' }} type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Postblog;
