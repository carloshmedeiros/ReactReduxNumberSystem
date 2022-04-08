import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numeros: function (state, action) {
    switch (action.type) {
      case "NUM_MIN":
        return {
          ...state,
          min: action.payload
        };
      case "NUM_MAX":
        return {
          ...state,
          max: action.payload
        };
      default:
        return {
          min: 5,
          max: 10
        };
    }
  }
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
