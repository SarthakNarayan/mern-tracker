import React, { useEffect, useState } from "react";
import axios from "axios";

import SingleExercise from "./SingleExercise";
import SelectUser from "./SelectUser";

const ExerciseList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");

  const fetchData = async (url) => {
    const responses = await axios.get(url);
    setData(responses.data);
  };

  const deleteHandler = (id) => {
    axios.delete("/exercises/" + id).then((res) => console.log(res));
  };

  useEffect(() => {
    fetchData("/exercises");
  }, [data]);
  return (
    <div>
      <h1 style={{ marginBottom: "1rem" }}>Yada Yada Exercise List</h1>
      <SelectUser filter={filter} setFilter={setFilter} />
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Description</th>
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((response) => {
            if (filter === "All")
              return (
                <SingleExercise
                  key={response._id}
                  {...response}
                  deleteHandler={deleteHandler}
                />
              );
            else if (filter === response.username)
              return (
                <SingleExercise
                  key={response._id}
                  {...response}
                  deleteHandler={deleteHandler}
                />
              );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExerciseList;
