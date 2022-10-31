import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar";
import axios from "axios";
import { useLocation } from 'react-router-dom'

function UpdateContent() {
  const [courseTopic, setContentTopic] = useState("");
  const [courseContent, setTopicContent] = useState("");

  const id = new URLSearchParams(useLocation().search).get('id')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/driver/${id}`)
      .then((res) => {
        setContentTopic(res.data.courseTopic);
        setTopicContent(res.data.courseContent);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateContent = () => {
    axios
      .put(`http://localhost:5000/api/driver/${id}`, {
        courseTopic: courseTopic,
        courseContent: courseContent,
      })
      .then(() => {
        console.log("Success");
        alert("Driver Update successed!");
      });
  };

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
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder=""
            value={courseTopic}
          />
        </div>
        <br />

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Add Content</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={courseContent}
          ></textarea>
          <br></br>
        </div>
        <button className="btn btn-primary m-2" onClick={updateContent}>Save</button>
      </form>
    </div>
  </div>
  )
}

export default UpdateContent;