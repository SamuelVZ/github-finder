import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const url = process.env.REACT_APP_GITHUB_URL;
const token = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  //children is everiting is inside the provider

  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (name) => {
    const params = new URLSearchParams({
      q: name,
    });

    setLoading();
    //items is the array in the response
    const { items } = await fetch(`${url}/search/users?${params}`, {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
      },
    }).then((response) => response.json());

    dispatch({
      type: 'get_users',
      payload: items,
    });
  };

  const getUser = async (login) => {
    setLoading();
    //items is the array in the response
    const data = await fetch(`${url}/users/${login}`, {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
      },
    }).then((response) => {
      // response.status === 404 ? window.location = '/notfound' : response.json()

      if (response.status === 404) {
        window.location = '/notfound';
      } else {
        return response.json();
      }
    });

    dispatch({
      type: 'get_user',
      payload: data,
    });
  };
  const setLoading = () => {
    dispatch({
      type: 'set_loading',
    });
  };

  const clearUsers = () => {
    dispatch({
      type: 'clear_users',
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
