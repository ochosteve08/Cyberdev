import AddPost from "./features/posts/AddPost";
import PostList from "./features/posts/PostList";
import SinglePost from "./features/posts/SinglePost";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import EditPost from "./features/posts/EditPost";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />
        <Route path="post">
          <Route index element={<AddPost />} />
          <Route path=":postId" element={<SinglePost />} />
          <Route path="edit/:postId" element={<EditPost/>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
