import createDataContext from "../context/createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "GET_BLOG_POSTS":
      return action.payload;
    case "DELETE_BLOG_POST":
      return state.filter(blogPost => blogPost.id !== action.payload.id);
    case "EDIT_BLOG_POST":
      return state.map(blogPost =>
        blogPost.id === action.payload.id ? action.payload : blogPost
      );
    default:
      return state;
  }
};

const getBlogPosts = dispatch => async () => {
  const response = await jsonServer.get("/blogposts");
  dispatch({ type: "GET_BLOG_POSTS", payload: response.data });
};

const addBlogPost = dispatch => async (title, content, callback) => {
  await jsonServer.post("/blogposts", { title, content });
  if (callback) {
    callback();
  }
};
const deleteBlogPost = dispatch => async id => {
  await jsonServer.delete(`/blogposts/${id}`);
  dispatch({ type: "DELETE_BLOG_POST", payload: { id } });
};

const editBlogPost = dispatch => async (title, content, id, callback) => {
  await jsonServer.put(`/blogposts/${id}`, { title, content });
  dispatch({ type: "EDIT_BLOG_POST", payload: { title, content, id } });
  if (callback) {
    callback();
  }
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    getBlogPosts,
    addBlogPost,
    deleteBlogPost,
    editBlogPost
  },
  [{ title: "TEST POST", content: "TEST CONTENT", id: 1 }]
);
