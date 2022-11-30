import { createContext, useState } from "react";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  const fetchUsers = async (login) => {
    setIsLoading(true);
    const response = await fetch(`${GITHUB_URL}/users`);

    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };

  const fetchUser = async (login) => {
    setIsLoading(true);
    console.log(login + ' from browser');
    const response = await fetch(`${GITHUB_URL}/users/${login}`);

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      setUser(data);
      setIsLoading(false);
    }
  };

  const searchUsers = async (text) => {
    setIsLoading(true);
    const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`);

    const data = await response.json();
    setUsers(data.items);
    setIsLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    fetchUsers();
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        user,
        isLoading,
        fetchUsers,
        fetchUser,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
