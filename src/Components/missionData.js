import PropTypes from 'prop-types';

const MissionData = ({
  desc, name,
}) => {

  return (
    <div className='mission'>
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
};

MissionData.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default MissionData;