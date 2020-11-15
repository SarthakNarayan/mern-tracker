import React, { useState, useEffect } from "react";
import axios from "axios";

const SelectUser = ({ filter, setFilter }) => {
  const [users, setUsers] = useState(["All"]);
  useEffect(() => {
    axios.get("/users").then((res) => {
      if (res.data.length > 0) {
        setUsers([users, ...res.data.map((user) => user.username)]);
      }
    });
  }, []);
  return (
    <form>
      <div className="form-group row">
        <label htmlFor="userSelect" className="col-sm-2 col-form-label">
          Select User
        </label>
        <div className="col-sm-10">
          <select
            class="form-control"
            id="userSelect"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            {users.map((user) => (
              <option key={user}>{user}</option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
};

export default SelectUser;
