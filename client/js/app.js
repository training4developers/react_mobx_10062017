import keyMirror from 'key-mirror';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';

const actionTypes = keyMirror({
  REFRESH_REQUEST: null,
  REFRESH_DONE: null,
  ADD_REQUEST: null,
});

const refresh = () => {

  return dispatch => {

    // action 1
    dispatch({ type: actionTypes.REFRESH_REQUEST, colors: [] });

    return fetch('http://localhost:3000/api/colors')
      .then(res => res.json())
      // action 2
      .then(colors => dispatch({ type: actionTypes.REFRESH_DONE, colors}));

  };

};

const add = color => {

  return dispatch => {
    // action 1
    dispatch({ type: actionTypes.ADD_REQUEST, color });
    
    return fetch('http://localhost:3000/api/colors', {
      method: 'POST',
      body: JSON.stringify(color),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => fetch('http://localhost:3000/api/colors'))
      .then(res => res.json())
      .then(colors => dispatch({ type: actionTypes.REFRESH_DONE, colors}));

  };

};

const mapStateToProps = (state) => ({ colors: state.colors });
const mapDispatchToProps = dispatch => bindActionCreators({ refresh, add }, dispatch);


const reducer = (state = { colors: [] }, action) => {

  switch (action.type) {
    case actionTypes.REFRESH_REQUEST:
      return { ...state, colors: [] };
    case actionTypes.ADD_REQUEST:
      return { ...state, color: action.color };
    case actionTypes.REFRESH_DONE:
      return { ...state, colors: action.colors };
    default:
      return state;
  }

};

const store = createStore(reducer, applyMiddleware(thunk));

const ColorTool = props => {

  let newColorInput;

  return <div>
    <ul>
      {props.colors.map(color => <li key={color.id}>{color.name}</li>)}
    </ul>
    <form>
      <label htmlFor="new-color-input">New Color</label>
      <input type="text" id="new-color-input"
        defaultValue="" ref={i => newColorInput = i} />
      <button type="button"
        onClick={() => props.add({ name: newColorInput.value })}>Add</button>   
    </form>
  </div>;

};

const ColorToolContainer = connect(mapStateToProps, mapDispatchToProps)(ColorTool);

ReactDOM.render(<Provider store={store}>
  <ColorToolContainer />
</Provider>, document.querySelector('main'));

store.dispatch(refresh());


