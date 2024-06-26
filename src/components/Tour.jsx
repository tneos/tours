import {useState} from "react";

const Tour = ({tour, onDelete}) => {
  const [readMore, setReadMore] = useState(false);

  const {id, image, info, name, price} = tour;
  // Extract part of description
  let infoPart = info.slice(0, 200);

  return (
    <article className="single-tour" id={id}>
      <img className="img" src={image} alt={name} />
      <div className="tour-info">
        <h5>{name}</h5>
        {!readMore ? (
          <p>
            {infoPart}...
            <span onClick={() => setReadMore(!readMore)} className="info-btn">
              Read More
            </span>
          </p>
        ) : (
          <p>
            {info}
            <span onClick={() => setReadMore(!readMore)} className="info-btn">
              Show less
            </span>
          </p>
        )}
        <button className="btn btn-block delete-btn" onClick={() => onDelete(id)}>
          Not Interested
        </button>
      </div>

      <span className="tour-price">{price}</span>
    </article>
  );
};
export default Tour;
