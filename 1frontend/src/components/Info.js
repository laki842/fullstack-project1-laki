import React, { useState } from 'react';
import '../styles/componentStyles/info.css';
import Axios from 'axios';
import SpaceshipCard from './SpaceshipCard';


function Info() {
  // empty array waiting for data from node
  const [spaceshipList, setSpaceshipList] = useState([]);

  // function to get new types with axios
  const getNewTypes = () => {
    Axios.get('http://localhost:4000/type1').then((response) => {
      console.log('1. data transferred');
      setSpaceshipList(response.data);
      console.log(response.data);
    });
  };
  // function to get used types with axios
  const getUsedTypes = () => {
    Axios.get('http://localhost:4000/type2').then((response) => {
      console.log('2. data transferred');
      setSpaceshipList(response.data);
      console.log(response.data);
    });
  };
  // function to get expensive types with axios
  const getExpensiveTypes = () => {
    Axios.get('http://localhost:4000/type3').then((response) => {
      console.log('3. data transferred');
      setSpaceshipList(response.data);
      console.log(response.data);
    });
  };
  // function to get cheap types with axios
  const getCheapTypes = () => {
    Axios.get('http://localhost:4000/type4').then((response) => {
      console.log('4. data transferred');
      setSpaceshipList(response.data);
      console.log(response.data);
    });
  };
  // function to get all types in ascending order with axios
  const getAllAscTypes = () => {
    Axios.get('http://localhost:4000/type5').then((response) => {
      console.log('5. data transferred');
      setSpaceshipList(response.data);
      console.log(response.data);
    });
  };
  // function to get all types in descending order with axios
  const getAllDescTypes = () => {
    Axios.get('http://localhost:4000/type6').then((response) => {
      console.log('6. data transferred');
      setSpaceshipList(response.data);
      console.log(response.data);
    });
  };

  return (
    <>
      <div className='info'>
        <div className='btn-wrapper'>
          {/* Buttons for fetching data */}
          <ul>
            <li>
              <button onClick={getNewTypes}>New</button>
            </li>
            <li>
              <button onClick={getUsedTypes}>Used</button>
            </li>
            <li>
              <button onClick={getExpensiveTypes}>Expensive</button>
            </li>
            <li>
              <button onClick={getCheapTypes}>Cheap</button>
            </li>
            <li>
              <button onClick={getAllAscTypes}>All Ascending</button>
            </li>
            <li>
              <button onClick={getAllDescTypes}>All Descending</button>
            </li>
          </ul>
          <div><SpaceshipCard parts={spaceshipList} /></div>
        </div>
      </div>
    </>
  );
}

export default Info;
