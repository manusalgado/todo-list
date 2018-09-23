const initialState = {
  authorize: false,
  loading: false,
  error: null
};

const authorizeUser = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHORIZE_USER':
      return { ...state, authorize: action.authorize, loading: action.loading };
    case 'LOADING_AUTHORIZE_USER':
      return { ...state, authorize: action.authorize, loading: action.loading };
    case 'ERROR_AUTHORIZE_USER':
      return { ...state, authorize: action.authorize, loading: action.loading, error: action.error };
    default:
      return state;
  }
}

export default authorizeUser;