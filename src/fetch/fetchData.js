import axios from "axios";
import { setUsersList, setUser, setRepos } from "../redux/reducers";

export const getUsersList = (value) => {
  return async (dispatch) => {
    await axios
      .get(`https://api.github.com/search/users?q=${value}`)
      .then((res) => dispatch(setUsersList(res.data.items))) 
      .catch((error) => console.log(error));
  };
};


export const getUser = (value) => {
  return async (dispatch) => {
    await axios
      .get(`https://api.github.com/users/${value}`)
      .then((user) => dispatch(setUser(user.data)))
      .catch((error) => console.log(error));
  };
};

export const getRepos = (user) => {	
	return async (dispatch) => {
		await axios
		  .get(`https://api.github.com/users/${user}/repos`)
		  .then((rep) => dispatch(setRepos(rep.data)))
		  .then((rep) =>
		  sessionStorage.setItem("Repositories", JSON.stringify(rep.payload))
		  )
		  .catch((error) => console.log(error));
	 };
};

// https://www.youtube.com/watch?v=fkNrJTLYcA0
