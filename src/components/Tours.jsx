import {useState, useEffect} from "react";
import Tour from "./Tour";

const Tours = ({tours}) => {
  const [tourPicked, setTourPicked] = useState(null);
  const [displayTours, setDisplayTours] = useState(tours);

  const handleDelete = id => {
    setTourPicked(id);
  };

  useEffect(() => {
    const updatedList = displayTours.filter(tour => tour.id !== tourPicked);
    setDisplayTours(updatedList);
  }, [tourPicked]);

  return (
    <div>
      {displayTours.length > 0 && (
        <div className="title">
          <h1>Our Tours</h1>
          <div className="title-underline"></div>
        </div>
      )}
      {displayTours.length > 0 && (
        <section className="tours">
          {displayTours.map(tour => (
            <Tour tour={tour} key={tour.id} onDelete={handleDelete} />
          ))}
        </section>
      )}
      {displayTours.length == 0 && (
        <div>
          <h1 className="text" style={{width: "100%", textAlign: "center"}}>
            No Tours Left
          </h1>
          <button className="btn" style={{margin: "0 45%"}} onClick={() => setDisplayTours(tours)}>
            Refresh
          </button>
        </div>
      )}
    </div>
  );
};
export default Tours;
