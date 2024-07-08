/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
  const [values, setValues] = useState({
    name: "",
    prenom: "",
    age: "",
    dob: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
      <h1>Add a user</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="prenom">Prenom:</label>
          <input
            type="text"
            name="prenom"
            className="form-control"
            placeholder="Enter Surname"
            onChange={(e) => setValues({ ...values, prenom: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="age">age:</label>
          <input
            type="text"
            name="age"
            className="form-control"
            placeholder="Enter Age"
            onChange={(e) => setValues({ ...values, age: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="date">Date Birth:</label>
          <input
            type="text"
            name="date"
            className="form-control"
            placeholder="Enter Date Birth"
            onChange={(e) => setValues({ ...values, dob: e.target.value })}
          />
        </div>
        <button className="btn btn-success">Submit</button>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </form>
      </div>
    </div>
  );
}

export default Create;
