import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// return the user data from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const loggedIn = () => {
  const userStr = localStorage.getItem("userData");
  if(userStr != null){
    return true;
  }else{
    return false;
  }
}

// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem("token") || null;
};

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
};

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const getUserRole = () => {
  var userData = localStorage.getItem("userData");
  return JSON.parse(userData)["role"];
};

export const notify = (msg) => {
  // Set to 10sec
  toast.warning(msg, { autoClose: 10000 });
  // Set to 3sec
  toast.success("successful", { autoClose: 3000 });
  // User have to close it
  toast.info("GeeksForGeeks", { autoClose: false });
  toast.error("Runtime error", {
    // Set to 15sec
    position: toast.POSITION.BOTTOM_LEFT,
    autoClose: 15000,
  });
  toast("Hello Geeks"); // Default
};
