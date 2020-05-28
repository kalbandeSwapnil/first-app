import React, { useState, useEffect } from "react";
import courseStore from "../store/courseStore";
import CoursesList from "./CourseList";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loadCourse, deleteCourse } from "../courseAction";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourse();
    return () => courseStore.removeChangeListener(onChange); // cleanup on unmount
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function deleteCourseWithToast(id) {
    toast.success("Course Deleted");
    return deleteCourse(id);
  }
  return (
    <>
      <h1> Courses </h1>
      <Link className="btn btn-primary" to="/course">
        Add course
      </Link>
      <CoursesList courses={courses} deleteCourse={deleteCourseWithToast} />
    </>
  );
}

export default CoursesPage;
