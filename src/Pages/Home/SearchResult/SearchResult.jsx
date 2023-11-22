import React from 'react';

const SearchResultPage = () => {
 

  return (
    <div>
      <h2>Search Results</h2>
      {searchData ? (
        <div>
          <p>From: {searchData.from}</p>
          <p>To: {searchData.to}</p>
          <p>Date: {searchData.date}</p>
          <p>Transport: {searchData.transport}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>No search results available.</p>
      )}
    </div>
  );
};

export default SearchResultPage;

