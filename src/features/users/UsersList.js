import { Link } from "react-router-dom";
import { useGetUsersQuery } from "./userSlice";

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetUsersQuery();
  console.log(users);

  let content;
  if (isError) {
    content = <p>{error}</p>;
  } else if (isLoading) {
    content = <p>Loading....</p>;
  } else if (isSuccess) {
    const renderedUsers = users.ids.map((userId) => (
      <li key={userId}>
        <Link to={`/user/${userId}`}>{users.entities[userId].name}</Link>
      </li>
    ));

    content = (
      <section>
        <h2>Users</h2>
        <ul className="list-disc">{renderedUsers}</ul>
      </section>
    );
  }

  return content;
};

export default UsersList;
