import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

function UpdateTitle() {
  const limit = 10;
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
        titleName: titleName,
      })
      .then(() => {
        console.log("Success");
        alert("Title Update successed!");
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
          <h1>Update Topic Name</h1>
        </div>
        <form>
          <div class="form-group card-body">
            <br />
            <label for="exampleFormControlInput1">Topic Name:</label>
            <br />
            <br />
            <input
              onChange={(event) => {
                settitleName(event.target.value);
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

export default UpdateTitle;
