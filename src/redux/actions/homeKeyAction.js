export const rightKey = () => {
  return {
    type: 'ARROW_KEY_RIGHT',
  };
};

export const leftKey = () => {
  return {
    type: 'ARROW_KEY_LEFT',
  };
};
export const upKey = () => {
  return {
    type: 'ARROW_KEY_UP',
  };
};
export const downKey = () => {
  return {
    type: 'ARROW_KEY_DOWN',
  };
};

export const setYLength = value => {
  return {
    type: 'SET_Y_LENGTH',
    payload: value,
  };
};

export const setXLength = value => {
  return {
    type: 'SET_X_LENGTH',
    payload: value,
  };
};
export const SETY = value => {
  return {
    type: 'SET_Y',
    payload: value,
  };
};
export const SETX = value => {
  return {
    type: 'SET_X',
    payload: value,
  };
};
export const initial = (value, page=0) => {
  return {
    type: 'INITIAL_VALUE',
    value: value,
    page: page,
  };
};
