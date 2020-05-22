import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CoursesList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h1> Courses </h1>
      <CoursesList courses={courses} />
    </>
  );
}

export default CoursesPage;
