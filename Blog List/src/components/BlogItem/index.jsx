import './index.css'

const BlogItem = (props) => {
  const { eachBlogItem } = props;
  const { id, title, description, publishedDate } = eachBlogItem;


  return (
    <li>
      <div className="blog-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="date-container">
        <p>{publishedDate}</p>
      </div>
    </li>
  );
};

export default BlogItem;
