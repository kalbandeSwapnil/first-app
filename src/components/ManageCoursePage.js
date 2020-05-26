import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  const [error, setError] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug;
    courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
  }, [props.match.params.slug]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Ithe ahe mi ");
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved");
    });
  }

  function formIsValid() {
    let _error = {};

    if (!course.title) _error.title = "Title is required";
    if (!course.authorId) _error.authorId = "AuthorId is required";
    if (!course.category) _error.category = "Category is required";

    setError(_error);
    return Object.keys(_error).length === 0;
  }

  function handleChange({ target }) {
    const updatedCourse = {
      ...course,
      [target.name]: target.value,
    };
    console.log(updatedCourse);
    setCourse(updatedCourse);
  }
  return (
    <>
      <h1>Manage Course</h1>
      <CourseForm
        error={error}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
