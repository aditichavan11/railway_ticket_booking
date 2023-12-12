import React from 'react'
import classes from "./style.module.css";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Eticket = () => {

  // const { train_id } = useParams();
  // const [train, setTrain] = useState(null);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   // Fetch train details using the train_id
  //   fetch(`http://localhost:8000/trains/train/${train_id}`)
  //     .then((response) => response.json())
  //     .then((data) => {

  //       setTrain(data)
  //       console.log(data);
  //       setLoading(false);
  //     }).catch((error) => {
  //         setLoading(false);
  //         console.log("Error fetching data: ", error);
  //     });
  // }, [train_id]);


  // if (loading) {
  //   return <div>Loading...</div>; // make necessary ui changes hhere
  // }
  // // do not present anything when train is not loaded
  // if (train === null) {
  //   return <div>Error loading data...</div>; // ithepan ui changes 
  // }
  return (
    <div>
<h2>Eticket</h2>
{/* <h1>
        Train Name: {train.train[0]?.trainName}, Train Number: {train.train[0]?.trainNumber}
      </h1> */}

<button className={classes.cancel} >Cancel</button>
    </div>


  )
}

export default Eticket;