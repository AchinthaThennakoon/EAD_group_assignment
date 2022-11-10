import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ContentView() {
  let limit = 10;

  const id = new URLSearchParams(useLocation().search).get("id");

  const [getTitle_, setgetTitle] = useState("");
  const [content, setContent] = useState([]);
  const [contentList, setContentList] = useState([]);

  const getTitle = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/v1/title/title/${id}`);
      const data = await res.json();
      console.log(data.data);

      setgetTitle(data.titleName);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getTitle();
  }, [limit]);

  const getcontent = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/content/getContentByTitleId/${id}`
      );
      const data = await res.json();
      setContent(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getcontent();
  }, [limit]);

  const deleteContent = (id) => {
    alert("Are you sure to delete this record!");
    axios
      .delete(`http://localhost:8080/api/v1/content/deleteContent/${id}`)
      .then((response) => {
        setContentList(
          contentList.filter((items) => {
            return items.contentID != id;
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
        <div className="contentHedder card-header">
          <br />
          <h1>{getTitle_}</h1>
          <Link to={`/addsubtopic?id=${id}`}>
            <button className="btn btn-primary">Add Content</button>
          </Link>
        </div>
        <hr />
        <div className="content">
          {content.map((item) => {
            return (
              <div className=" p-4 mb-3">
                <h4 className="card-header">{item.contentTitle}</h4>
                <p className="card-body">{item.content}</p>
                <div className="card-footer">
                  <Link to={`/updatecontent?id=${item.contentId}`}>
                  <button className="btn btn-primary m-1"> Edit </button>
                  </Link>
                  <button
                    className="btn btn-danger m-1"
                    onClick={() => {
                      deleteContent(item.contentId);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <br></br>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContentView;
