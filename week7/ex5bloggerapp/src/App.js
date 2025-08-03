import React from "react";
import CourseDetails from "./components/CourseDetails";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        padding: "40px",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <CourseDetails />
      <BookDetails />
      <BlogDetails />
    </div>
  );
}

export default App;
