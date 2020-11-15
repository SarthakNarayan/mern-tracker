import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialInput = {
  username: "",
  description: "",
  duration: 0,
};

const CreateExercise = () => {
  const [input, setInput] = useState(initialInput);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users").then((res) => {
      if (res.data.length > 0) {
        setUsers(res.data.map((user) => user.username));
      }
    });
    setInput((prev) => {
      return { ...prev, username: users[0] };
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const exercise = {
      username: input.username,
      description: input.description,
      duration: input.duration,
      date: date,
    };
    axios.post("/exercises/add", exercise).then((res) => console.log(res.data));
    // window.location = "/";
    setInput(initialInput);
  };

  const inputCapture = (e) => {
    setInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      <h1>Add exercise</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <div class="form-group">
          <label htmlFor="username">Username</label>
          <select
            class="form-control"
            id="username"
            name="username"
            onChange={(e) => inputCapture(e)}
            value={input.username}
          >
            {users.map((user) => (
              <option key={user}>{user}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            aria-describedby="description"
            required
            name="description"
            onChange={(e) => inputCapture(e)}
            value={input.description}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Duration">Duration</label>
          <input
            type="number"
            className="form-control"
            id="Duration"
            aria-describedby="Duration"
            required
            name="duration"
            onChange={(e) => inputCapture(e)}
            value={input.duration}
          />
          <small id="Duration" class="form-text text-muted">
            Duration is in minutes
          </small>
        </div>

        <div className="form-group">
          <label>Date</label>
          <br />
          <DatePicker
            onChange={(date) => setDate(date)}
            selected={date}
            className="form-control"
          />
        </div>

        <center>
          <button type="submit" className="btn btn-primary">
            Add exercise
          </button>
        </center>
      </form>
    </div>
  );
};

export default CreateExercise;
