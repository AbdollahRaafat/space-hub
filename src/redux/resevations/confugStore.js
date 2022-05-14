const ADD_RESERVATION = './space-travelers/missions/ADD_RESERVATION';
const DELETE_RESERVATION = './space-travelers/missions/DELETE_RESERVATION';
const GET_MISSION = './space-travelers/missions/GET_MISSION';
const url = 'https://api.spacexdata.com/v3/missions';

const stateInit = [];

export const addReservation = (payload) => ({
  type: ADD_RESERVATION,
  payload,
});

export const getMissions = (payload) => ({
  type: GET_MISSION,
  payload,
});

export const deleteReservation = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});

const resrvationReducer = (state = stateInit, action) => {
  switch (action.type) {
    case ADD_RESERVATION: {
      const nextState = state.map((mission) => (
        (mission.id !== action.payload) ? mission : { ...mission, reserv: true }));
      return [...nextState];
    }
    case GET_MISSION:
      return action.payload;
    case DELETE_RESERVATION:
      return state.map((mission) => (
        (mission.id !== action.payload) ? mission : { ...mission, reserv: false }));
    default:
      return state;
  }
};

export const getRocketList = () => async (dispatch) => {
  const missionList = await fetch(`${url}`)
    .then((resp) => resp.json());
  const infoArr = [];
  missionList.map((mission) => infoArr.push({
    id: mission.id,
    desc: mission.description,
    name: mission.mission_name,
    // img: mission.flickr_images[0],
    reserv: false,
  }));
  dispatch(getMissions(infoArr));
};

export default resrvationReducer;