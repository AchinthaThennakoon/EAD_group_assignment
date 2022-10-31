import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios'

function AddContent() {
    const [courseTopic, setCourseTopic] = useState('')
    const [courseContent, setcourseContent] = useState('')

    const addContent =()=>{
        axios
          .post(`http://localhost:5000/api/addriver`, {
            courseTopic: courseTopic,
            courseContent: courseContent,
          })
          .then(() => {
            console.log('Success')
            alert('Driver added successed!')
            window.location.reload(false)
          })
        }

  return (
    <div>
      <div>
        <Navbar />
        <br />
      </div>
      <div className="container card">
        <form>
          <div class="form-group">
            <br />
            <label for="exampleFormControlInput1 p-2">Topic Name</label>
            <br />

            <input
            onChange={(event)=>{
                setCourseTopic(event.target.value)
            }}
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
          <br />

          <div class="form-group">
            <label for="exampleFormControlTextarea1">Add Content</label>
            <textarea
            onChange={(event)=>{
                setcourseContent(event.target.value)
            }}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <br></br>
          </div>
          <button className="btn btn-primary m-2">Save</button>
        </form>
      </div>
    </div>
  );
}

export default AddContent;
