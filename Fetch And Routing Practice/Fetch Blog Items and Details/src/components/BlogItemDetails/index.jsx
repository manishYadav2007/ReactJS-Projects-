import React from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import "./index.css";
class BlogItemDetails extends React.Component {
  state = {
    blogsData: {},
    isLoading: true,
  };

  componentDidMount() {
    this.getBlogItemDetails();
  }

  getBlogItemDetails = async () => {
    try {
      const { id } = this.props;
      // console.log(id);
      const response = await axios.get(`https://apis.ccbp.in/blogs/${id}`);
      const responseData = response.data;
      const updatedData = {
        id: responseData.id,
        title: responseData.title,
        imageUrl: responseData.image_url,
        content: responseData.content,
        author: responseData.author,
        avatarUrl: responseData.avatar_url,
      };

      this.setState({ blogsData: updatedData, isLoading: false});
    } catch (error) {
      console.log(error.message);
    }
  };



  render() {
    const { blogsData, isLoading } = this.state;
    const { id, title, imageUrl, content, author, avatarUrl } = blogsData;
    return (
      <div >
        {isLoading ? (
          <div className="loader" data-testid="loader">
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
          <div className="blog-detail-container">
            <div className="blog-content">
              <h3 className="blog-title">{title}</h3>
              <div className="blog-details-author-container">
                <div>
                  <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
                </div>
                <p className="author-name">{author}</p>
              </div>
              <div className="blog-card">
                <img
                  src={imageUrl}
                  alt={`blogImg${id}`}
                  className="blog-card"
                />
                <div className="blog-description">
                  <p className="blog-content">{content}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BlogItemDetails;
