import { About } from "../../interfaces/About";
import {
  ADD_ABOUTYOURSELF,
  ADD_ADDRESS,
  ADD_CITYZIP,
  ADD_EMAILS,
  ADD_NAME,
  ADD_PHNO,
} from "../ActionNames/aboutActionNames";

export const addName = (name: string) => {
  return {
    type: ADD_NAME,
    payload: name,
  };
};
export const addAddress = (address: string) => {
  return {
    type: ADD_ADDRESS,
    payload: address,
  };
};
export const addCityZip = (cityZip: string) => {
  return {
    type: ADD_CITYZIP,
    payload: cityZip,
  };
};
export const addPhno = (phNo: string) => {
  return {
    type: ADD_PHNO,
    payload: phNo,
  };
};
export const addEmails = (emails: string) => {
  return {
    type: ADD_EMAILS,
    payload: emails,
  };
};

export const addAboutYourself = (about: string) => {
  return {
    type: ADD_ABOUTYOURSELF,
    payload: about,
  };
};
