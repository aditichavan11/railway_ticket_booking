import { useNavigate } from 'react-router-dom';
import classes from './style.module.css';
import { useEffect, useState } from 'react';

const Passengerform = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [preference, setPreference] = useState('Select'); // Default value is 'Select'
  const [noofpassengers, setNoofpassengers] = useState('');
  const [error, setError] = useState(null);

  const { train_id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch train details using the train_id
    fetch(`/api/trains/${train_id}`)
      .then((response) => response.json())
      .then((data) => setTrain(data));
  }, [train_id]);

  if (!train) {
    // Handle loading state
    return <div>Loading...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userdetail = {
      name,
      age,
      gender,
      preference,
      noofpassengers,
    };

    const response = await fetch('http://localhost:8000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userdetail),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error || 'An error occurred during signup');
    } else {
      setName('');
      setAge('');
      setGender('Male');
      setPreference('Select'); // Reset to 'Select'
      setNoofpassengers('');
      setError(null);
      navigate('/eticket');
      console.log('Passenger details added', json);
    }
  };

  return (
    <div className={classes.Passengerf}>
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