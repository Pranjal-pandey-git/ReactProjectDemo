import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
const BlogForm = (props) => {
  const [blog, setBlog] = useState({
    blogTitle: props.blog ? props.blog.blogTitle : "",
    category: props.blog ? props.blog.category : "",
    content: props.blog ? props.blog.content : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { blogTitle, category, content } = blog;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [blogTitle, category, content];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const blog = {
        id: uuidv4(),
        blogTitle,
        content,
        category,
      };
      props.handleOnSubmit(blog);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBlog((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>blog Title</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="blogTitle"
            value={blogTitle}
            placeholder="Enter title of blog"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>category</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="category"
            value={category}
            placeholder="Enter  category"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="content">
          <Form.Label>blog content</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            className="input-control"
            type="text"
            name="content"
            value={content}
            placeholder="Enter content"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default BlogForm;
