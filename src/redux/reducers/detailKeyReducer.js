const initialState = {
  x: 0,
  y: 0,
  xLength:0,
  yLength:0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ARROW_KEY_RIGHT':
      return {
        ...state,
        x: state.xLength > state.x ? state.x + 1 : state.x,
      };
    case 'ARROW_KEY_LEFT':
      return {
        ...state,
        x: state.x > -1 ? state.x - 1 : state.x,
      };
    case 'ARROW_KEY_UP':
      return {
        ...state,
        y: state.y > 0 ? state.y - 1 : state.y,
      };
    case 'ARROW_KEY_DOWN':
      return {
        ...state,
        y: state.yLength > state.y ? state.y + 1 : state.y,
      };
    case 'SET_Y_LENGTH':
      return {
        ...state,
        yLength: action.payload,
      };
    case 'SET_X_LENGTH':
      return {
        ...state,
        xLength: action.payload,
      };

    case 'SET_Y':
      return {
        ...state,
        y: action.payload,
      };
    case 'SET_X':
      return {
        ...state,
        x: action.payload,
      };
    default:
      return state;
  }
};
