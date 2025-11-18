import BlogItem from "../BlogItem";
import './index.css'
const BlogList = (props) => {
  const { blogsList } = props;

  return (
    <ul className="blog-list-container">
      {blogsList.map((eachBlogItem) => {
        return <BlogItem eachBlogItem={eachBlogItem} key={eachBlogItem.id} />;
      })}
    </ul>
  );
};

export default BlogList;
