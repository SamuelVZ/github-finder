import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  //children is everiting is inside the provider

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state, //we will provide the entire state instead of individually each element
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
