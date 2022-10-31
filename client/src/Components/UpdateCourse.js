import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useLocation } from 'react-router-dom'

function UpdateCourse() {
  const [courseName, setCourseName] = useState("");

  const id = new URLSearchParams(useLocation().search).get('id')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/driver/${id}`)
      .then((res) => {
        setCourseName(res.data.course);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateCourse = () => {
    axios
      .put(`http://localhost:5000/api/driver/${id}`, {
        courseName: courseName,
      })
      .then(() => {
        console.log("Success");
        alert("Driver Update successed!");
      });
  };

  return (
    <div>
      <Navbar />
      <br />
      <div className="container coursecon">
        <div className="form-control">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Course Name:</label>
              <br></br>
              <br></br>
              <input
                onChange={(event) => {
                  setCourseName(event.target.value);
                }}
                type="text"
                class="form-control"
                id="coursename"
                placeholder="Eg: HTMLF"
                value={courseName}
              />
            </div>
            <br />
            <a href="/addcourse">
              <button className="btn btn-primary" onClick={updateCourse}>
                Save
              </button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateCourse;
