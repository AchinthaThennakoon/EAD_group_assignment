import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios'

function AddCourse() {

    const [courseName, setCourseName] = useState('')

    const addCourse =()=>{
    axios
      .post(`http://localhost:5000/api/addriver`, {
        courseName: courseName,
      })
      .then(() => {
        console.log('Success')
        alert('Driver added successed!')
        window.location.reload(false)
      })
    }

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
              <input onChange={(event)=>{
                setCourseName(event.target.value)
              }}
                type="text"
                class="form-control"
                id="coursename"
                placeholder="Eg: HTMLF"
              />
            </div>
            <br/>
            <a href="/addcourse">
              <button className="btn btn-primary" onClick={addCourse}>Save</button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
  }

export default AddCourse;
