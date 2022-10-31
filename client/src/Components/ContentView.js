import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function ContentView() {
  const [items, setItems] = useState([]);
  let limit = 10;

  const getContent = async () => {
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
    getContent();
  }, [limit]);

  return (
    <div>
      <Navbar />
      <br />
      <div className="container">
        <div className="contentHedder card">
          <br />
          <h1>{items.topicName}</h1>
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
