// this component is template for blog

import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory, Link, useContext } from "react-router-dom";

const Blog = ({
  id,
  blogTitle,
  category,
  content,
  handleRemoveBlog,
  setData,
}) => {
  const history = useHistory();
  const [count, setCount] = useState(0);
  return (
    <Card style={{ width: "18rem" }} className="blog">
      <Card.Body>
        <Card.Title className="blog-title">{blogTitle}</Card.Title>
        <div className="blog-details">
          <div>
            <strong>Category:</strong> {category}
          </div>

          <div className="blog-desc">
            <strong>Content:</strong> {content}
          </div>
        </div>
        <footer>
          <Link to={`/edit/${id}`}>
            <Button variant="primary" onClick={() => setData(id)}>
              Edit
            </Button>
          </Link>
          &nbsp;&nbsp;
          <Button variant="danger" onClick={() => handleRemoveBlog(id)}>
            Delete
          </Button>
          &nbsp;&nbsp;
          <Button variant="primary" onClick={() => setCount(count + 1)}>
            <img src="/assets/images/like.jpg" />
            👍 {count}
          </Button>
          &nbsp;&nbsp;
          <Link className="blog-link" to={`/blog/${id}`}>
            -&gt;
          </Link>
        </footer>
      </Card.Body>
    </Card>
  );
};

export default Blog;
