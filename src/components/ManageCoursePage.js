import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import courseStore from "./../store/courseStore";
import { toast } from "react-toastify";
import * as courseAction from "../courseAction";

const ManageCoursePage = (props) => {
  const [error, setError] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseAction.loadCourse();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseAction.saveCourse(course).then(() => {
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
