import { useContext, useState } from 'react';
import './Result.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const Result = () => {
  const location = useLocation();
  const searchData = location.state.searchData;
  const [filterPrice, setFilterPrice] = useState(false);
  const [pricePerMember, setPricePerMember] = useState(0);
  const [members, setMembers] = useState(1);
  const {user}=useContext(AuthContext)
  const name=user.email;
  console.log('payment',name)
  const navigate = useNavigate();

  const handleAddMember = () => {
    setMembers(members + 1);
  };

  const handleRemoveMember = () => {
    if (members > 1) {
      setMembers(members - 1);
    }
  };

  const handlePay = (totalPrice) => {
    // Redirect to the payment page with the calculated total price as a query parameter
    navigate(`/payment?totalPrice=${totalPrice}`);
  };

  return (
    <div className="container">
      <h1>Search Results</h1>
      <div className='flex'>
        <input
          type="checkbox"
          id="filterPrice"
          checked={filterPrice}
          name='filterPrice'
          className='h-[10px] mt-5 ml-[700px]'
          onChange={(e) => setFilterPrice(e.target.checked)}
        />
        <label value="400" className='' htmlFor="filterPrice"> ৳400</label>
      
      </div>

      {searchData && searchData.length > 0 ? (
        searchData
          .filter((result) => result.price <= 200 || !filterPrice)
          .map((result) => (
            <div className="result-item flex" key={result.id}>
              <div>
                <h3>From: {result.from}</h3>
                <h3>To: {result.to}</h3>
                <h3>Date: {result.date}</h3>
                <h3>Route:{result.from}-{result.to}</h3>
                <h3>Transport: {result.transport}</h3>
              </div>
              <div className="ml-4">
                <h3>Time: {result.time}</h3>
              </div>
              <div className="ml-4">
                <h3>Seat available 36</h3>
              </div>
              {/* <div className="ml-4">
                <h3>Price: ${result.price}</h3>
                <button className="p-2 bg-green-200">Buy Ticket</button>
              </div> */}
              <div className="ml-4 ">
                <h3>Number of Members:</h3>
                <button type="button" className='bg-blue-300 mr-1' onClick={handleRemoveMember}>-</button>
                {members}
                <button className='bg-blue-300 ml-1' type="button" onClick={handleAddMember}>+</button>
              </div>
              {/* <div className="form-group">
                <p className='text-1xl'>Price per Member: ${members * result.price}</p>
              </div> */}
              <div className="ml-4">
                <h3 className='text-1xl'>Total Price: ${members * result.price}</h3>
              </div>
              <div className="ml-4">
                <button
                  className='bg-green-400 p-2 '
                  type="submit"
                  onClick={() => handlePay(members * result.price)}
                >
                  Pay
                </button>
              </div>
            </div>
          ))
      ) : (
        <p className="no-results">No results found</p>
      )}
    </div>
  );
};

export default Result;
