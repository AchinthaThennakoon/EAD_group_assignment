import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function AddContent() {
  const [courseTopic, setCourseTopic] = useState("");

  const addContent = () => {
    axios
      .post(`http://localhost:8080/api/v1/title/addTitle`, {
        titleName: courseTopic,
        course: { id: 1 },
      })
      .then(() => {
        console.log("Success");
        alert("Driver added successed!");
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
        <form>
          <div class="form-group">
            <br />
            <label for="exampleFormControlInput1 p-2">Topic Name</label>
            <br />

            <input
              onChange={(event) => {
                setCourseTopic(event.target.value);
              }}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
          </div>
          <br />

          <div class="form-group">
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

export default AddContent;
