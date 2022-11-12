import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function AddCourse() {
  const [courseName, setCourseName] = useState("");

  const addCourse = () => {
    axios
      .post(`http://localhost:8080/api/v1/course/addCourse`, {
        courseTitle: courseName,
      })
      .then(() => {
        console.log("Success");
        alert("Course added successed!");
        window.location.reload(false);
      });
  };

  return (
    <div>
      <Navbar />
      <br />
      <div className="container coursecon">
        <div className="form-control card">
          <div className="card-header">
            <h1>Add Course Name</h1>
          </div>
          <br />
          <div className="card-body">
            <form>
              <div className="form-group">
                <label for="exampleFormControlInput1">Course Name:</label>
                <br></br>
                <br></br>
                <input
                  onChange={(event) => {
                    setCourseName(event.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="coursename"
                />
              </div>
              <br />
              <a href="/addcourse">
                <button className="btn btn-primary" onClick={addCourse}>
                  Save
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
