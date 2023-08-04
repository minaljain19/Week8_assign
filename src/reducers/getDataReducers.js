const setData = "SETDATA";
const api = "APII";
const empty = "EMPTY";
const initialData = {
  selectedData: {},
  apiData: {},
  repo: {},
};

const getDataReducers = (state = initialData, action) => {
  switch (action.type) {
    case setData: {
      //   console.log("action.payload", action.payload);
      return {
        ...state,
        selectedData: action.payload,
      };
    }
    case empty: {
      //   console.log("action.payload", action.payload);
      return {
        ...state,
        selectedData: {},
      };
    }

    case api: {
      console.log("action.payload", action.payload.repo);
      return {
        ...state,
        // selectedData: {},
        repo: action.payload.repo,
        apiData: action.payload.data,
      };
    }

    default:
      return state;
  }
};
export default getDataReducers;
