const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        darkmode: !state.darkmode,
      };

    default:
      return state;
  }
};

export default DarkModeReducer;
