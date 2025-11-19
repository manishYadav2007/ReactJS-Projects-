import { NavLink } from "react-router-dom";
import './index.css'
const BlogItem = (props) => {
  const { blogDetails } = props;
  const { id, title, imageUrl, avatarUrl, author, topic } = blogDetails;
    
  return (
    <NavLink to={`/blogs/${id}`} className="blog-navlink">
      <li className="blog-list-container">
        <div className="blog-img-container">
          <img className="blog-post-img" src={imageUrl} alt={`item${id}`} />
        </div>
        <div className="blog-description-container">
          <p className="blog-topic">{topic}</p>
          <p className="list-blog-title">{title}</p>
          <div className="author-container">
            <img className="avatar-img" src={avatarUrl} alt={`author${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </NavLink>
  );
};

export default BlogItem;
