import React, { useEffect, useState } from "react";
import "./App.css";

export default function Table() {
  // tr -> table row, td -> table data, th -> table heading
  const [data, setData] = useState([]);
  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const js = await res.json();
    setData(js);
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <table>
      <tr>
        <th>User ID</th>
        <th>Title</th>
        <th>Id</th>
      </tr>
      {data.map((item) => (
        <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.userId}</td>
        </tr>
      ))}
    </table>
  );
}
