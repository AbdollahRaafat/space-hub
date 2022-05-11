const JOIN_MISSON = 'ADD_RESERVATION';
const LEAVE_MISSION = 'REMOVE_RESERVATON';
const GET_MISSIONS = 'bGET_MISSIN';

const initialState = {
  name:'MissionData',
  description: 'Irene Vlachou is a typeface designer based in Athens, Greece. She holds an MA in Typeface Design from the University of Reading. Irene has collaborated with international type foundries and corporations, working as a typeface designer and a consultant for Greek typefaces. From 2013 to 2019.',
  stateMember: 'No a menbre',
  stateJoin:'Join Mission',
};
export const joinMission = (payload) => ({
  type: JOIN_MISSON,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

export const getMission = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

const resrvationReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSON:
      return [...state, action.payload];

    case LEAVE_MISSION:
      return state.filter((book) => book.id !== action.payload);

    case GET_MISSIONS:
      return action.payload;

    default:
      return state;
  }
};

export default resrvationReducer;