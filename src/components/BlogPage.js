import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import BlogContext from "../context/BlogContext";
import "../index.css";
const BlogPage = () => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    let blog = blogs.find((b) => b.id === id);
    if (blog) {
      setBlog(blog);
    }
  }, []);
  return (
    <div>
      <Link to="/">
        <span>&#8592;</span>go back
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <h1>{blog.blogTitle}</h1>
          </header>
          <p>Category: {blog.category}</p>
          <p className="blog-desc">Content: {blog.content}</p>
        </div>
      ) : (
        <p>no blog available</p>
      )}
    </div>
  );
};
export default BlogPage;
