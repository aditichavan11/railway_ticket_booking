// Import necessary modules and styles
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from './style.module.css'; // Make sure to use the correct CSS file
import Passengerform from './Passengerf';
import {Link} from 'react-router-dom';



const Searchtrainform = () => {
  const navigate = useNavigate();

  

  // State variables
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [error, setError] = useState(null);
  const [trainData, setTrainData] = useState([]); // Store the API response

  const handleClick = async (e) => {
    e.preventDefault();

    const detail = { source, destination };

    const response = await fetch('http://localhost:8000/trains/searchTrains', {
      method: 'POST',
      body: JSON.stringify(detail),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const json = await response.json();
      setError(json.error);
      setTrainData([]); // Clear the train data in case of an error
    } else {
      const json = await response.json();
      setError(null);
      setTrainData(json.trains); // Set the train data from the API response
    }
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleClick}>
        <div className={classes['main']}>
          <div className={classes['input-group']}>
            <label>FROM</label>
            <select
              value={source}
              name={source}
              onChange={(e) => setSource(e.target.value)}
              className={classes['input-group']}
            >
              <option value="Select">Select</option>
              <option value="CSMT">CSMT</option>
              <option value="PUNE">PUNE</option>
              <option value="NDLS">NEW DELHI</option>
              <option value="DDN">DEHRADUN</option>
              <option value="MMCT">MUMBAI CENTRAL</option>
              <option value="LKO">LUCKNOW</option>
              <option value="LJN">LUCKNOW JN</option>
              <option value="MAS">CHENNAI CENTRAL</option>
              <option value="ASR">AMRITSAR</option>
              <option value="HWH">HOWRAH</option>
              <option value="INDB">INDORE</option>
              <option value="PDY">PUDUCHERRY</option>
              <option value="AGC">AGRA CONTANMENT</option>
              <option value="BE">BARIELLY</option>
              <option value="ADI">AHMEDABAD</option>
              <option value="JMU">JAMMU TAWI</option>
              <option value="CDG">CHANDIGARH</option>
              
            </select>

            <label>TO</label>
            <select
              name={destination}
              onChange={(e) => setDestination(e.target.value)}
              value={destination}
            >
              
              <option value="Select">Select</option>
              <option value="CSMT">CSMT</option>
              <option value="PUNE">PUNE</option>
              <option value="NDLS">NEW DELHI</option>
              <option value="DDN">DEHRADUN</option>
              <option value="MMCT">MUMBAI CENTRAL</option>
              <option value="LKO">LUCKNOW</option>
              <option value="LJN">LUCKNOW JN</option>
              <option value="MAS">CHENNAI CENTRAL</option>
              <option value="ASR">AMRITSAR</option>
              <option value="HWH">HOWRAH</option>
              <option value="INDB">INDORE</option>
              <option value="PDY">PUDUCHERRY</option>
              <option value="AGC">AGRA CONTANMENT</option>
              <option value="BE">BARIELLY</option>
              <option value="ADI">AHMEDABAD</option>
              <option value="JMU">JAMMU TAWI</option>
              <option value="CDG">CHANDIGARH</option>
             
            </select>
          </div>
          <div className={classes['input-group']}>
            <label>Date</label>
            <input type="date" />
          </div>
          <div className={classes['input-group']}>
            <label>Category</label><input/>

            
          </div>
          <button className="SubmitBtn">Search</button>
        </div>
      </form>

      {/* Display the train data */}
      <div className={classes['train-data']}>
        {error && <div className={classes['error']}>{error}</div>}
        {trainData.length > 0 && (
          <div className={classes['train-list']}>
            <h2>Train List</h2>
            <ul>
              {trainData.map((train) => (
                 <Link  to={`/passengerF/${train._id}`} key={train._id}><li className={classes.list} key={train._id}>
                  Train Name: {train.trainName}, Train Number: {train.trainNumber},
                  From:{train.stationFrom},
                  To:{train.stationTo},
                  
                  {/* //{train.stationList.departureTime} */}
                  
                  
                  {/* Include other properties you want to display */}
                </li></Link>
              ))}
            </ul>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Searchtrainform;


