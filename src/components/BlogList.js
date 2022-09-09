import _ from "lodash";
import Blog from "./Blog";
import React, { useContext, useState } from "react";
import BlogContext from "../context/BlogContext";
import SearchBar from "./SearchBar";

const BlogList = () => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const [useBlogs, setUseBlogs] = useState(blogs);
  const [searchKey, setSearchKey] = useState("");
  const [editItem, setEditItem] = useState("");

  // Search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = useBlogs;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setUseBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setUseBlogs(blogs);

    setSearchKey("");
  };

  //to delete the blog
  const handleRemoveBlog = (id) => {
    const remove = blogs.filter((blog) => blog.id !== id);
    setUseBlogs(remove);
    setBlogs(remove);
  };

  const setData = (id) => {
    const blogToEdit = blogs.find((blog) => blog.id === id);
    // const values = [
    //   blogToEdit.blogTitle,
    //   blogToEdit.category,
    //   blogToEdit.content,
    // ];
    // console.log(values);
    setUseBlogs({
      blogTitle: blogToEdit.blogTitle,
      category: blogToEdit.category,
      content: blogToEdit.content,
    });
    console.log(setUseBlogs);
    // console.log(setUseBlogs);
    setEditItem(id);
    // console.log(setEditItem);
    // console.log(id);
  };
  return (
    <>
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      <div className="blog-list">
        {!_.isEmpty(useBlogs) ? (
          useBlogs.map((blog) => (
            <Blog
              key={blog.id}
              {...blog}
              handleRemoveBlog={handleRemoveBlog}
              setData={setData}
            />
          ))
        ) : (
          <p className="message">No blogs available. Please add some blogs.</p>
        )}
      </div>
    </>
  );
};
export default BlogList;
