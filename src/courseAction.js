import dispatcher from "./appDispatcher";
import * as courseApi from "./api/courseApi";
import actionTypes from "./ActionTypes";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
}

export function loadCourse() {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSE,
      courses,
    });
  });
}

export function deleteCourse(courseId) {
  return courseApi.deleteCourse(courseId).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id: courseId,
    });
  });
}
