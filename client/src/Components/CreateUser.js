import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [user, setUser] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/users/add", { username: user })
      .then((res) => console.log(res.data));
    setUser("");
  };
  return (
    <div>
      <h1>Add user</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-group">
          <label htmlFor="description">User</label>
          <input
            type="text"
            className="form-control"
            id="user"
            aria-describedby="user"
            required
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
        </div>
        <center>
          <button type="submit" className="btn btn-primary">
            Add user
          </button>
        </center>
      </form>
    </div>
  );
};

export default CreateUser;
