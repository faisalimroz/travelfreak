import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './PackageDetails.css'
import { Link, useParams } from 'react-router-dom';
const PackageDetails = () => {
  const { pid } = useParams();
 
  console.log(pid)
  const [packagePost, setPackagePost] = useState();
  const [date, setDate] = useState('');
  const [members, setMembers] = useState(1);
  const [pricePerMember, setPricePerMember] = useState(0); 

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleAddMember = () => {
    setMembers(members + 1);
  };


  const handleRemoveMember = () => {
    if (members > 1) {
      setMembers(members - 1);
    }
  };
  
    // Get the navigate function
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the total price based on the number of members and price per member
    const totalPrice = members * packagePost.price;


  
    // Redirect to the Payment component with the totalPrice as a URL parameter
    navigate(`/payment?totalPrice=${totalPrice}`);
    // You can handle form submission here
    console.log('Date:', date);
    console.log('Members:', members);
    console.log('Price per Member:', pricePerMember);
    console.log('Total Price:', totalPrice);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/package/${pid}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch blog details');
        }
        return response.json();
      })
      .then(data => {
        setPackagePost(data);
      })
      .catch(error => {
        console.log(error);
        // Handle the error, such as showing an error message
      });
  }, [pid]);
  return (
    <div>
      {packagePost && packagePost.title ? (
        <div id='package' className="mx-auto flex">
          <div className="blog-div">
            <figure>
              <img className='blog-img' src={packagePost.img} alt="Shoes" />
            </figure>
            <h2 className="blog-title font-bold">{packagePost.title}</h2>
            <p className='blog-p'>{packagePost.description}</p>
          </div>
          <div className='form-div'>
            <form onSubmit={handleSubmit} className="vertical-form">
              <div className="form-group mt-5 ">
                <label>Date:</label>
                <input type="date" value={date} onChange={handleDateChange} />
              </div>
              <div className="form-group">
                <label>Number of Members:</label>
                <button type="button" onClick={handleRemoveMember}>-</button>
                {members}
                <button type="button" onClick={handleAddMember}>+</button>
              </div>
              <div className="form-group">
                <p className='text-1xl'>Price per Member: ${members * packagePost.price}</p>

              </div>
              <div className="form-group">
                <button className='bg-green-200 p-2 ' type="submit">Pay</button>
              </div>
            </form>
          </div>

        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PackageDetails;