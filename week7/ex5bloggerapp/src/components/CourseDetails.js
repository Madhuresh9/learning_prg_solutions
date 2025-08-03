import React from "react";

const CourseDetails = () => {
  const courses = [
    { id: 1, name: "Angular", date: "4/5/2021" },
    { id: 2, name: "React", date: "6/3/2021" },
  ];

  const cardStyle = {
    borderLeft: "4px solid green",
    padding: "20px",
    width: "250px",
    backgroundColor: "white",
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ fontWeight: "bold" }}>Course Details</h3>
      {courses.map(course => (
        <div key={course.id} style={{ marginBottom: "15px" }}>
          <p style={{ fontWeight: "bold", margin: 0 }}>{course.name}</p>
          <p style={{ margin: 0 }}>{course.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
