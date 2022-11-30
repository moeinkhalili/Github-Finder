import React, { useEffect, useState, useReducer, useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem/UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  const {users, isLoading, fetchUsers} = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {!isLoading ? users.map((user) => (
        <UserItem key={user.id} user={user}/>
      )) : <Spinner/>}
    </div>
  );
}

export default UserResults;
