import {useEffect, useState} from "react";
const url = "https://www.course-api.com/react-tours-project";
// Components
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const App = () => {
  const [tours, setTours] = useState([]);

  // Fetch tours data
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const toursArray = await response.json();
      setTours(toursArray);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return <main>{tours.length > 0 ? <Tours tours={tours} /> : <Loading />}</main>;
};
export default App;
