import { useParams, Link } from "react-router-dom";
import { useGetPostsByUserIdQuery } from "../posts/postSlice";
import { useGetUsersQuery } from "./userSlice";

const UserPage = () => {
  const { userId } = useParams();
  // const user = useSelector((state) => selectUserById(state, Number(userId)));

  const {
    data: postsForUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsByUserIdQuery(userId);

  const {
    user,
    isLoading: isLoadingUser,
    isSuccess: isSuccessUser,
    isError: isErrorUser,
    error: errorUser,
  } = useGetUsersQuery("getUsers", {
    selectFromResult: ({ data, isLoading, isSuccess, isError, error }) => ({
      user: data?.entities[userId],
      isLoading,
      isSuccess,
      isError,
      error,
    }),
  });

  if (!user) {
    return (
      <section>
        <h1>User not found</h1>
      </section>
    );
  }

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (isSuccess) {
    const { ids, entities } = postsForUser;
    content = ids.map((id) => (
      <li key={id}>
        <Link className="underline pl-4 " to={`/post/${id}`}>
          {entities[id].title}
        </Link>
      </li>
    ));
  }
  if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2>{user?.name}</h2>
      <ol className="list-decimal list-inside ">{content}</ol>
    </section>
  );
};

export default UserPage;
