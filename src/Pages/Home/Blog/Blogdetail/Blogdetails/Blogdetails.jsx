import React from 'react';
import './Blogdetails.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const Blogdetails = () => {
//   const [date, setDate] = useState('');
//   const [members, setMembers] = useState(1);
//   const [pricePerMember, setPricePerMember] = useState(0); // Initialize with 0
  


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Calculate the total price based on the number of members and price per member
//     const totalPrice = members * pricePerMember;

//     // You can handle form submission here
//     console.log('Date:', date);
//     console.log('Members:', members);
//     console.log('Price per Member:', pricePerMember);
//     console.log('Total Price:', totalPrice);
//   };
  const { bid } = useParams();
  console.log(bid)
  const [blogPost, setBlogPost] = useState(null);


  useEffect(() => {
    fetch(`http://localhost:5000/blog/${bid}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blog details');
        }
        return response.json();
      })
      .then(data => {
        setBlogPost(data);
      })
      .catch(error => {
        console.log(error);
        // Handle the error, such as showing an error message
      });
  
  }, [bid]);
  return (
    <div>
      {blogPost && blogPost.title ? (
        <div id='' className="blog  mx-auto ">
          <div className="blog-div">
            <figure>
              <img id='blog-img' className='blog-img' src={blogPost.img} alt="Shoes" />
            </figure>
            <h2 className="blog-title font-bold">{blogPost.title}</h2>
            <p className=''>{blogPost.description}</p>
           
          </div>
          <div>
            
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>

  );
};

export default Blogdetails;