import PropTypes from 'prop-types';
import '../styles/navbar.css';

const MissionData = ({
  desc, name,
}) => {

  return (
    <div className='mission'>
      <h4>{name}</h4>
      <p>{desc}</p>
      <button type='button'>No a member</button>
      <button type='button'>Join mission</button>
    </div>
  );
};

MissionData.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default MissionData;