import { useNavigate } from 'react-router-dom';
import classes from './style.module.css';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const Passengerform = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Select');
  const [preference, setPreference] = useState('Select'); // Default value is 'Select'
  const [noofpassengers, setNoofpassengers] = useState('');
  const [error, setError] = useState(null);

  const { train_id } = useParams();
  const [train, setTrain] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch train details using the train_id
    fetch(`http://localhost:8000/trains/train/${train_id}`)
      .then((response) => response.json())
      .then((data) => {

        setTrain(data)
        console.log(data);
        setLoading(false);
      }).catch((error) => {
          setLoading(false);
          console.log("Error fetching data: ", error);
      });
  }, [train_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const userdetail = {
    //   name,
    //   age,
    //   gender,
    //   preference,
    //   noofpassengers,
    // };

    const response = await fetch('http://localhost:8000/api/passengerform', {
      method: 'POST',
      body: JSON.stringify({
        name,
        age,
        gender,
        preference,
        noofpassengers,
      }),
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json'
      }
      
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error || 'An error occurred during submitting details');
    } else {
      setName('');
      setAge('');
      setGender('Male');
      setPreference('Select'); // Reset to 'Select'
      setNoofpassengers('');
      setError(null);
      alert("Seat Booked Successfully!")
      navigate('/eticket');
      console.log('Passenger details added', json);
    }
  };


  if (loading) {
    return <div>Loading...</div>; // make necessary ui changes hhere
  }
  // do not present anything when train is not loaded
  if (train === null) {
    return <div>Error loading data...</div>; // ithepan ui changes 
  }

//   console.log("Train Data: ", train);
// console.log("Train ID: ", train_id);

  return ( 
    <div className={classes.Passengerf}>
      <h1>
        Train Name: {train.train[0]?.trainName}, Train Number: {train.train[0]?.trainNumber}
      </h1>
      <h1>
        <u>Passenger Details</u>
      </h1>
      <p>Name of the Passenger</p>
      <input
        type="text"
        value={name}
        name="name"
        placeholder=""
        onChange={(e) => setName(e.target.value)}
      />
      <p className="Age">Age</p>
      <input
        type="number"
        value={age}
        name="age"
        placeholder=""
        onChange={(e) => setAge(e.target.value)}
      />

      <p className="Gender">Gender</p>
      <select
        value={gender}
        name="gender"
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="Select">Male</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <p className="Preference">Preference</p>
      <select
        value={preference}
        name="preference"
        onChange={(e) => setPreference(e.target.value)}
      >
        <option value="Select">Select</option>
        <option value="No prefrences">No prefrences</option>

        {/* <option value="Lower Birth">Lower Birth</option> */}
        <option value="Window Seat">Window Seat</option>
      </select>

      <p className="Add">Add Passenger</p>
      <input
        type="number"
        value={noofpassengers}
        name="noofpassengers"
        placeholder=""
        onChange={(e) => setNoofpassengers(e.target.value)}
      />

      <button type="submit" className={classes.passengerBtn} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Passengerform;