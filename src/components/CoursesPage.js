import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CoursesList from "./CourseList";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h1> Courses </h1>
      <Link className="btn btn-primary" to="/course">
        Add course
      </Link>
      <CoursesList courses={courses} />
    </>
  );
}

export default CoursesPage;
