import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { editBlogPost, state } = useContext(BlogContext);
  const currentBlogPostId = navigation.getParam("id");
  const blogPost = state.find(blogPost => blogPost.id === currentBlogPostId);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        editBlogPost(title, content, currentBlogPostId, () => navigation.pop());
      }}
      initialValues={{
        title: blogPost.title,
        content: blogPost.content
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
