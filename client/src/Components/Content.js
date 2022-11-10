import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Content() {
  const id = new URLSearchParams(useLocation().search).get("id");

  let limit = 10;
  const [items, setItems] = useState([]);
  const [getcourse, setgetcourse] = useState("");
  const [TopicList, setTopicList] = useState([]);

  const getcontent = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/title/getTitleByCourseId/${id}`
      );
      const data = await res.json();
      console.log(data);
      setItems(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getcontent();
  }, [limit]);

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

  const deleteTopic = (id) => {
    alert("Are you sure to delete this record!");
    axios
      .delete(`http://localhost:8080/api/v1/title/deleteTitle/${id}`)
      .then((response) => {
        setTopicList(
          TopicList.filter((items) => {
            return items.Driver_ID != id;
          })
        );
      });
    window.location.reload(false);
  };

  return (
    <div>
      <Navbar />
      <br />
      <div className="container card">
        <div className="card-header">
          <div className="row">
            <div className="h1 col-9 m-2">{getcourse}</div>
            <br />
            <div className="col-2">
              <Link to={`/addcontent?id=${id}`}>
                <button className="btn btn-primary m-2">Add Topic</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Topic Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.titleName}</td>
                    <td>
                      <Link to={`/contentview?id=${item.id}`}>
                        <button className="btn btn-success m-1">View</button>
                      </Link>
                      <Link to={`/updatetitle?id=${item.id}`}>
                        <button className="btn btn-secondary m-1">Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger m-1"
                        onClick={() => {
                          deleteTopic(item.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Content;
