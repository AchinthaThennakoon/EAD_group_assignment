import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

function UpdateContent() {

  const id = new URLSearchParams(useLocation().search).get("id");

  const limit=  10;
  const [content, setContent] = useState("");
  const [contentTopic, setContentTopic] = useState("");
  const [getcontent, setgetContent] = useState([]);

  const getContent = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/content/content/${id}`
      );
      const data = await res.json();

      setgetContent(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getContent();
  }, [limit]);


  const updateContent = () => {
    axios
      .put(`http://localhost:8080/api/v1/content/editContent`, {
        contentId: id,
        contentTitle: contentTopic,
        content: content,
        title: { id: getcontent.title.id },

        
      })
      .then(() => {
        console.log("Success");
        alert("Content Update successed!");
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
          <h1>Update Content</h1>
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
              defaultValue={getcontent.contentTitle}
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
              defaultValue={getcontent.content}
            ></textarea>
            <br></br>
          </div>
          <button className="btn btn-primary m-2" onClick={updateContent}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateContent;