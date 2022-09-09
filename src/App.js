import React, { useState } from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import AddBlog from "./components/AddBlog";
import BlogList from "./components/BlogList";
import EditBlog from "./components/EditBlogs";
import Header from "./components/Header";
import useLocalStorage from "./hooks/UseLocalStorage";
import BlogContext from "./context/BlogContext";
import BlogPage from "./components/BlogPage";

const App = () => {
  //useState to update the empty array using local storage.
  const [blogs, setBlogs] = useLocalStorage("blogs", []);

  return (
    <BrowserRouter>
      <div>
        <Header />

        <div className="main-content">
          {/* //using context api to pass the data */}
          <BlogContext.Provider value={{ blogs, setBlogs }}>
            <Switch>
              <Route component={BlogList} path="/" exact={true} />
              <Route component={AddBlog} path="/add" />
              <Route component={BlogPage} path="/blog/:id" />
              <Route component={EditBlog} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </BlogContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
