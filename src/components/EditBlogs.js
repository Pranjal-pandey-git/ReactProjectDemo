import React, { useContext } from "react";
import BlogForm from "./BlogForm";
import { useParams } from "react-router-dom";
import BlogContext from "../context/BlogContext";

const EditBlog = ({ history }) => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const { id } = useParams();
  // const blogToEdit = blogs.find((blog) => blog.id === id);
  const blogToEdit = blogs.map((e) => e.id).indexOf(id);

  const handleOnSubmit = (blog) => {
    const filteredblogs = blogs.filter((blog) => blog.id !== id);
    setBlogs([blog, ...filteredblogs]);
    history.push("/");
  };

  return (
    <div>
      {/* book={blogToEdit} */}
      <BlogForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBlog;
