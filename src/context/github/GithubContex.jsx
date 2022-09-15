import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const url = process.env.REACT_APP_GITHUB_URL;
const token = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  //children is everiting is inside the provider

  const initialState = {
    users: [],
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
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
