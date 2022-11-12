import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

function AddSubtopic() {

  const id = new URLSearchParams(useLocation().search).get("id");

  const [contentTopic, setContentTopic] = useState("");
  const [content, setContent] = useState("");

  const addContent = () => {
    axios
      .post(`http://localhost:8080/api/v1/content/addContent`, {
        contentTitle: contentTopic,
        content: content,
        title: { id: id },
      })
      .then(() => {
        console.log("Success");
        alert("Content added successed!");
        window.location.reload(false);
      });
  };

  return (
    <div>
      <div>
        <Navbar />
        <br />
      </div>
      <div className="container card">
        <div className="card-header">
          <h1>Add Content</h1>
        </div>
        <form>
          <div className="form-group">
            <br />
            <label for="exampleFormControlInput1 p-2">Sub Topic Name</label>
            <br />

            <input
              onChange={(event) => {
                setContentTopic(event.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Content Title"
            />
          </div>
          <br />

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Content</label>
            <textarea
              onChange={(event) => {
                setContent(event.target.value);
              }}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Type Content"
            ></textarea>
            <br></br>
          </div>
          <button className="btn btn-primary m-2" onClick={addContent}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSubtopic;