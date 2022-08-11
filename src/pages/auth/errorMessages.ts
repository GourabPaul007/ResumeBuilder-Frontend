export const getErrorMessage = (errorCode: string | undefined) => {
  switch (errorCode) {
    case "auth/wrong-password":
      return "Wrong Email or Password";
    case "auth/too-many-requests":
      return "Too Many Requests. Try again a few minutes later.";
    default:
      return "";
  }
};
