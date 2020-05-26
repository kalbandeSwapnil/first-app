import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        onChange={props.onChange}
        value={props.course.title || ""}
        label="title"
        error={props.error.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId}
            onChange={props.onChange || "1"}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.error.authorId && (
          <div className="alert alert-danger">{props.error.authorId}</div>
        )}
      </div>

      <TextInput
        label="Category"
        id="category"
        name="category"
        onChange={props.onChange}
        value={props.course.category || ""}
        error={props.error.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
};
export default CourseForm;
