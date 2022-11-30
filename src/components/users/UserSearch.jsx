import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";


function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length < 1) setAlert("Please enter something", 'error');
    else {
      // search
      searchUsers(text);
    }
  };
  const handleClear = () => {
    clearUsers();
    setText('');
  }
  return (
    <div className="grid grid-cols-1 xl:cols-2 ls:grid-cols-1 md:grid-cols-1 mb-8 gap-4 mt-7">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="div form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && <div>
        <button onClick={handleClear} className="vtn btn-ghost btn-lg">Clear</button>
      </div>}
      
    </div>
  );
}

export default UserSearch;
