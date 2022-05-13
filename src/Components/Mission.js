import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/navbar.css';
import MissionData from './missionData'
import { getRocketList } from '../redux/resevations/confugStore';

const Mission = () => {
  const dispatchAction = useDispatch();
  const mission = useSelector((state) => state.resrvationReducer);
  useEffect(() => {
    dispatchAction(getRocketList());
  }, [dispatchAction]);
  
  return (
    mission.map((r) => (
      <div key={r.id}>
      <MissionData
       name={r.name}
       desc={r.desc}
      />
    </div>
    ))
  );
};

export default Mission;