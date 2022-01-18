const SET_USERS_LIST = "SET_USERS_LIST";
const SET_USER = "SET_USER";
const SET_REPOSITORIES = "SET_REPOSITORIES";

const usersListState = {
  users:
    sessionStorage.getItem("UsersList") === null
      ? []
      : JSON.parse(sessionStorage.UsersList),
};

const userState = {
  user:
    sessionStorage.getItem("User") === null
      ? {}
      : JSON.parse(sessionStorage.User),
};

const reposState = {
  repos: [],
};

export function usersListReducer(state = usersListState, action) {
  switch (action.type) {
    case SET_USERS_LIST:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export function userReducer(state = userState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export function reposReducer(state = reposState, action) {
  switch (action.type) {
    case SET_REPOSITORIES:
      return { ...state, repos: action.payload };
    default:
      return state;
  }
}

export const setUsersList = (users) => ({
  type: SET_USERS_LIST,
  payload: users,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setRepos = (repos) => ({
  type: SET_REPOSITORIES,
  payload: repos,
});
