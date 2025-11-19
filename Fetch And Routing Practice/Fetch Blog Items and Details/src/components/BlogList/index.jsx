import axios from "axios";
import { Component } from "react";
import { TailSpin } from "react-loader-spinner";
import BlogItem from "../BlogItem";

class BlogList extends Component {
  state = {
    blogsData: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getBlogData();
  }

  getBlogData = async () => {
    try {
      const responseData = await axios.get("https://apis.ccbp.in/blogs");
      const blogData = responseData.data;

      const formattedData = blogData.map((eachBlogItem) => ({
        id: eachBlogItem.id,
        title: eachBlogItem.title,
        imageUrl: eachBlogItem.image_url,
        avatarUrl: eachBlogItem.avatar_url,
        author: eachBlogItem.author,
        topic: eachBlogItem.topic,
      }));

      this.setState({ blogsData: formattedData, isLoading: false });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { blogsData, isLoading } = this.state;
    return (
      <div className="blog-list-container">
        <ul>
          {isLoading ? (
            <div data-testid="loader">
              <TailSpin
                height="80"
                width="80"
                color="#000000"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) : (
            blogsData.map((eachBlogItem) => (
              <BlogItem key={eachBlogItem.id} blogDetails={eachBlogItem} />
            ))
          )}
        </ul>
      </div>
    );
  }
}

export default BlogList;
