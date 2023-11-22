
import { FaStar } from 'react-icons/fa';
import './ReviewCard.css';
const ReviewCard = ({ review }) => {
  const { rating, reviewMessage, userr } = review;

  return (
    // <div className="review-card">
    //   <div className="rating">
    //     {[1, 2, 3, 4, 5].map((star) => (
    //       <FaStar
    //         key={star}
    //         color={star <= rating ? '#ffc107' : '#ccc'}
    //       />
    //     ))}
    //   </div>
    //   <p className="review-message">{reviewMessage}</p>
    //   <p className="review-author">{userr}</p>
    // </div>


    <div className="review">
      <div className="head-review">
        <img className='review-img' src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt='' width="250px" />
      </div>
      <div className="body-review">
        <div className="name-review">{userr}</div>

        <div className="rating">

          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              color={star <= rating ? '#ffc107' : '#ccc'}
            />
          ))}
        </div>
        <div className="desc-review">{reviewMessage}</div>
      </div>
    </div>


  );
};

export default ReviewCard;
