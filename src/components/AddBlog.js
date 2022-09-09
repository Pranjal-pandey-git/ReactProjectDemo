import React, { useContext } from "react";
import BlogForm from "./BlogForm";
import BlogContext from "../context/BlogContext";
const AddBlog = ({ history }) => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const handleOnSubmit = (blog) => {
    setBlogs([blog, ...blogs]);
    history.push("/");
  };

  return (
    <>
      <BlogForm handleOnSubmit={handleOnSubmit} />
    </>
  );
};
export default AddBlog;
