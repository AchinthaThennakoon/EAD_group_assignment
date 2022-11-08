import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

function UpdateContent() {
  const limit =10;
  const [courseTopic, setContentTopic] = useState("");
  const [courseContent, setTopicContent] = useState("");
  const [titleName, settitleName] = useState("");
  const [getTitle, setgetTitle] = useState("");

  const id = new URLSearchParams(useLocation().search).get("id");

  const GetTitle = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/v1/title/title/${id}`);
      const data = await res.json();

      setgetTitle(data.titleName);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    GetTitle();
  }, [limit]);

  console.log(getTitle);
  console.log(id);

  const updateContent = () => {
    axios
      .put(`http://localhost:8080/api/v1/title/editTitle`, {
        id: id,
        titleName: titleName
        
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
        <h1>Edit topic name</h1>
        <form>
          <div class="form-group">
            <br />
            <label for="exampleFormControlInput1 p-2">Topic Name</label>
            <br />

            <input
             onChange={(event)=>{
              settitleName(event.target.value)
            }}
              type="text"
              class="form-control"
              defaultValue={getTitle}
            />
          </div>
          <br />
          <button className="btn btn-primary m-2" onClick={updateContent}>
            Update title name
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateContent;
