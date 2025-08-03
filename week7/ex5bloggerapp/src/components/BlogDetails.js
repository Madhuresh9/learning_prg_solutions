import React from "react";

const BlogDetails = () => {
  const blogs = [
    {
      id: 1,
      title: "React Learning",
      author: "Stephen Biz",
      content: "Welcome to learning React!",
    },
    {
      id: 2,
      title: "Installation",
      author: "Schewzdenier",
      content: "You can install React from npm.",
    },
  ];

  const cardStyle = {
    borderLeft: "4px solid green",
    padding: "20px",
    width: "250px",
    backgroundColor: "white",
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ fontWeight: "bold" }}>Blog Details</h3>
      {blogs.map(blog => (
        <div key={blog.id} style={{ marginBottom: "15px" }}>
          <p style={{ fontWeight: "bold", marginBottom: "4px" }}>{blog.title}</p>
          <p style={{ fontWeight: "bold", margin: 0 }}>{blog.author}</p>
          <p style={{ margin: 0 }}>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
