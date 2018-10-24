import jsonData from 'static/who-is-jordan-garcia.json';

const initialState = {
  data: null
};

export const actionTypes = {
  DOWNLOAD_CLICKED: 'DOWNLOAD_CLICKED',
  EXTERNAL_CLICKED: 'EXTERNAL_CLICKED',
  SET_DATA: 'SET_DATA'
};

// SELECTORS
export const getData = state => state.data;

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
};

// ACTIONS
export const downloadClicked = target => dispatch =>
  dispatch({
    type: actionTypes.DOWNLOAD_CLICKED,
    target
  });

export const externalClicked = target => dispatch =>
  dispatch({
    type: actionTypes.EXTERNAL_CLICKED,
    target
  });

export const setData = data => dispatch =>
  dispatch({
    type: actionTypes.SET_DATA,
    data: data
  });

export const fetchData = () => dispatch => dispatch(setData(jsonData));
