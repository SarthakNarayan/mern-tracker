import React from "react";
import { Link } from "react-router-dom";

const SingleExercise = ({
  _id,
  username,
  date,
  description,
  duration,
  deleteHandler,
}) => {
  return (
    <tr>
      <td>{username}</td>
      <td>{description} </td>
      <td>{duration}</td>
      <td>{date.slice(0, 10)}</td>
      <td>
        <div className="spacing">
          <Link to={`/edit/${_id}`} style={{ textDecoration: "none" }}>
            Edit
          </Link>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            onClick={() => deleteHandler(_id)}
          >
            Delete
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default SingleExercise;
