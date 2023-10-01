import React, { useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMillSign, faPerson,faGasPump } from "@fortawesome/free-solid-svg-icons";
function CarCard({ car }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    const likeStatus = liked ? "unliked" : "liked";
    toast(`You have ${likeStatus} ${car.name}`, { type: likeStatus });
  };

  const handleRentNow = () => {
    toast(`You have rented ${car.name}.`, { type: "success" });
  };

  return (
    // <div className="car-card">
    //   <img src={car.image} alt={car.name} />
    //   <h2>{car.name}</h2>
    //   <div className='yea'><p className="year">Year: {car.year}</p></div>
    //   <div className='leftt'>
    //     <p>Capacity: {car.capacity}</p>
    //     <p>Mileage: {car.mileage} mpg</p>
    //   </div>

    //   <div className='rightt'>
    //   <p>Automatic: {car.automatic ? 'Yes' : 'No'}</p>
    //     <p>Type: {car.type}</p>
    //   </div>

    //   <div className="price-year">
    //     <p className="price">${car.price}</p>
    //   </div>
    //   <div className='rent'>
    //     <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
    //       {liked ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={faHeart} />}
    //     </button>
    //     <button className="rent-button" onClick={handleRentNow}>
    //       Rent Now
    //     </button>
    //   </div>
    // </div>
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <div className="flex-container">
        <h2>{car.name}</h2>
        <h2 className="year-heading">Year: {car.year}</h2>
      </div>
      <table className="car-info">
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon icon={faHeart} /> {car.type}
            </td>
            <td>
            <FontAwesomeIcon icon={faPerson} /> {car.capacity}-people
              
            </td>
          </tr>
          <tr>
            <td>
            <FontAwesomeIcon icon={faGasPump} />{car.mileage}km/hr
             
            </td>
            <td>
            <FontAwesomeIcon icon={faMillSign} /> {car.automatic} Automatic{" "}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="action-buttons">
        <div className="price-year">
          <p className="price">${car.price}</p>
        </div>
        <div className="rent">
          <button
            className={`like-button ${liked ? "liked" : ""}`}
            onClick={handleLike}
          >
            {liked ? (
              <FontAwesomeIcon icon={faHeart} />
            ) : (
              <FontAwesomeIcon icon={faHeart} />
            )}
          </button>
          <button className="rent-button" onClick={handleRentNow}>
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
