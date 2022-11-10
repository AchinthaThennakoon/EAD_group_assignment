import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

function UpdateCourse() {
  const limit = 10;
  const [courseName, setCourseName] = useState("");
  const [getcourse, setgetcourse] = useState("");

  const id = new URLSearchParams(useLocation().search).get("id");

  const Getcourse = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/course/course/${id}`
      );
      const data = await res.json();

      setgetcourse(data.courseTitle);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    Getcourse();
  }, [limit]);

  console.log(courseName);

  const updateCourse = () => {
    axios
      .put(`http://localhost:8080/api/v1/course/updateCourse`, {
        id : id,
        courseTitle: courseName,
      })
      .then(() => {
        console.log("Success");
        alert("Course name Update successed!");
      });
  };

  return (
    <div>
      <Navbar />
      <br />
      <div className="container coursecon card">
        <div className="card-header">
          <h1>Update Course Name</h1>
        </div>
        <div className="form-control card-body">
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Course Name:</label>
              <br></br>
              <br></br>
              <input
                type="text"
                defaultValue={getcourse}
                onChange={(event) => {
                  setCourseName(event.target.value);
                }}
                autoComplete=""
                class="form-control"
              />
            </div>
            <br />
            <a href="/addcourse">
              <button className="btn btn-primary" onClick={updateCourse}>
                Update Course Name
              </button>
            </a>
          </form>
          </div>
        </div>
      </div>
  );
}

export default UpdateCourse;
