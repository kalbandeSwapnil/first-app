import React from "react";

const ManageCoursePage = (props) => {
  return (
    <>
      <h1>Manage Course</h1>
      <h2>{props.match.params.slug}</h2>
    </>
  );
};

export default ManageCoursePage;
