import { _isProd } from "../constants";

export const log = (str: string = "", obj1?: any, obj2?: any, obj3?: any, obj4?: any) => {
  if (_isProd) {
    // do nothing
  } else {
    console.log(str, obj1 ? obj1 : "", obj2 ? obj2 : "", obj3 ? obj3 : "", obj4 ? obj4 : "");
  }
};
