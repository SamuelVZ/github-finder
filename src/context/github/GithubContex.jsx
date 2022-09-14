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

  const fetchUsers = async () => {
    setLoading();
    const data = await fetch(`${url}/users`, {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
      },
    }).then((response) => response.json());

    dispatch({
      type: 'get_users',
      payload: data,
    });
  };

  const setLoading = () => {
    dispatch({
      type: 'set_loading',
    });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
