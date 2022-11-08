import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

function ContentView() {
  let limit = 10;

  const id = new URLSearchParams(useLocation().search).get("id");

  const [getTitle_, setgetTitle] = useState("");

  const getTitle = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/title/title/${id}`
      );
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

  return (
    <div>
      <Navbar />
      <br />
      <div className="container">
        <div className="contentHedder card">
          <br />
          <h1>{getTitle_}</h1>
        </div>
        <hr />
        <div className="content">
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser. It
            can be assisted by technologies such as Cascading Style Sheets and
            scripting languages such as JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentView;
