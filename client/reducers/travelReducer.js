// import our actiontypes from constants/actionsTypes;
import axios from 'axios';
import * as types from '../constants/actionTypes';

const initialState = {
  count: 0,
  trips: [],
};

const travelReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COUNT: {
      const count = state.count + 1;
      return { ...state, count };
    }
    case types.GET_ACTIVITIES: {
      const { payload } = action;
      // const { trips } = initialState;
      // axios.get('/:userId/Activities')
      //   .then(res => {
      //     trips = res.rows
      //   })
      //   .catch('error inside of getActivities', err);
      console.log(payload);
      return { ...state };
    }
    // this action will show or hide the modal inside of the Activities Container
    case types.NEW_PLANS: {
      const newTrips = state.trips.slice();
      newTrips.push(action.payload);
      console.log('inside travel reducer, state.trips:', state.trips);
      axios.post('/itinerary/new-plan', newTrips[newTrips.length - 1])
        .then((res) => console.log(res))
        .catch((err) => console.log('error inside of NEW_PLANS travel reducer', err));
      return {
        ...state,
        trips: newTrips,
      };
    }
    default:
      return state;
  }
};

export default travelReducer;
