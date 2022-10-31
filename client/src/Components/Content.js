import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function Content() {
  let limit = 10;
  const [items, setItems] = useState([]);
  const [TopicList, setTopicList] = useState([]);

  const getcontent = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/maintanance`);
      const data = await res.json();
      console.log(data.data);
      const total = res.headers.get("x-total-count");

      setItems(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getcontent();
  }, [limit]);

  const deleteTopic = (id) => {
    alert("Are you sure to delete this record!");
    axios
      .delete(`http://localhost:5000/api/deletedriver/${id}`)
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
        <div className="row">
          <div className="h1 col-9 m-2">Course Topic</div>
          <br />
          <div className="col-2">
            <a href="/addcontent">
              <button className="btn btn-primary m-2">Add Topic</button>
            </a>
          </div>
          <table class="table table-hover">
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
                    <td>{item.Category_Name}</td>
                    <td>
                      <Link to={"/contentview"}>
                        <button className="btn btn-success m-1">View</button>
                      </Link>
                      <Link to={`/updatecontent?id=${item.id}`}>
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
