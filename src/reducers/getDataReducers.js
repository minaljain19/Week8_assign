
const initialData = {
  selectedData: {},
  apiData: {},
  repo:{}
};

const getDataReducers = (state = initialData, action) => {
  switch (action.type) {
    case "SETDATA": {
      //   console.log("action.payload", action.payload);
      return {
        ...state,
        selectedData: action.payload,
      };
    }
    case "APII": {
      console.log("action.payload", action.payload.repo);
         return {
        ...state,
        repo:action.payload.repo,
        apiData: action.payload.data,
      };
    }

    default:
      return state;
  }
};
export default getDataReducers;
