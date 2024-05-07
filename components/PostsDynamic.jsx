import React, { useState } from "react";
import { User } from "../Users";
import Post from "./Post";

export default function PostsDynamic({size=4}) {
  const [posts, setPostsData] = useState([]);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((apiResult) => apiResult.json())
      .then((data) => {
        const fewUsers = data.slice(0, size);
        setPostsData((prev) => [...prev, ...fewUsers]);
        // setUsersData([...users, ...data]);
      });
  };
  return (
    <div style={{ width: "50%" }}>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        {" "}
        show more
      </button>
      <h2>Posts {posts.length} </h2>
      <div className="container">
        {posts?.map((post) => (
          <Post {...post} />
          // <div>{JSON.stringify(post)}</div>
          // way to pass the data
          // <User username={user.username} email={user.email} />
        ))}
      </div>
    </div>
  );
}
