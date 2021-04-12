import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "./../actions/index";
import UserHeader from "./UserHeader";

const PostsList = ({ posts, fetchPostsAndUsers }) => {
  useEffect(() => {
    fetchPostsAndUsers();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="card my-2">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostsList);
