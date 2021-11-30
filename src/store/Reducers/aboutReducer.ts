import {
  ADD_ABOUTYOURSELF,
  ADD_ADDRESS,
  ADD_CITYZIP,
  ADD_NAME,
  ADD_PHNO,
  ADD_EMAILS,
} from "../ActionNames/aboutActionNames";

const initialAbout = {
  name: "",
  address: "",
  cityZip: "",
  phNo: "",
  emails: [""],
  about: "",
};

export const aboutReducer = (state = initialAbout, action: any) => {
  switch (action.type) {
    case ADD_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case ADD_ADDRESS: {
      return {
        ...state,
        address: action.payload,
      };
    }
    case ADD_CITYZIP: {
      return {
        ...state,
        cityZip: action.payload,
      };
    }
    case ADD_PHNO: {
      return {
        ...state,
        phNo: action.payload,
      };
    }
    case ADD_EMAILS: {
      return {
        ...state,
        emails: action.payload,
      };
    }
    case ADD_ABOUTYOURSELF: {
      return {
        ...state,
        about: action.payload,
      };
    }

    default: {
      return initialAbout;
    }
  }
};
