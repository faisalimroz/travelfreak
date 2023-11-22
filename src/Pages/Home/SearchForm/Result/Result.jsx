import React, { useState } from 'react';
import './Result.css';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const searchData = location.state.searchData;
  const [filterPrice, setFilterPrice] = useState(false);

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
      <label value="200" className='' htmlFor="filterPrice">$200</label>
    
     
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
                <p>Transport: {result.transport}</p>
              </div>
              <div className="ml-4">
                <h3>Time: {result.time}</h3>
              </div>
              <div className="ml-4">
                <h3>Seat available 36</h3>
              </div>
              <div className="ml-4">
                <h3>Price: ${result.price}</h3>
                <button className="p-2 bg-green-200">view Seats</button>
              </div>
            </div>
          ))
      ) : (
        <p className="no-results">No results found.</p>
      )}
    </div>
  );
};

export default Result;
