import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [items, setItems] = useState([]);
  const [CourseList, setCourseList] = useState([]);
  let limit = 10;

  const getCourseData = async () => {
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
    getCourseData();
  }, [limit]);

  const deletecourse = (id) => {
    alert("Are you sure to delete this record!");
    axios
      .delete(`http://localhost:5000/api/deletedriver/${id}`)
      .then((response) => {
        setCourseList(
          CourseList.filter((items) => {
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
      <div className="container homecon card">
        <div className="row">
          <div className="h1 col-9 m-2">Courses</div>
          <br />
          <div className="col-2">
            <a href="/addcourse">
              <Button className="btn btn-primary m-2">Add Course</Button>
            </a>
          </div>
        </div>
        <br />
        <div className="card">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Course Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.vehicle_No}</th>
                    <td>{item.Category_Name}</td>
                    <td>
                      <Link to={"/content"}>
                        <button className="btn btn-success m-1">View</button>
                      </Link>
                      <Link to={`/updatecourse?id=${item.id}`}>
                        <button className="btn btn-secondary m-1">Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger m-1"
                        onClick={() => {
                          {
                            deletecourse(item.id);
                          }
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

export default Home;
