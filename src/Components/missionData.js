import React from 'react';
import '../styles/navbar.css';
import { useSelector } from 'react-redux';

const MissionData = () => {
  const data = useSelector((state) => state.resrvationReducer);
  return (
    <div className='mission'>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <button>{data.stateMember}</button>
      <button>{data.stateJoin}</button>
    </div>
  );
};

export default MissionData;