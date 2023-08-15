import { useSelector } from "react-redux"
import { allUsers } from "./userSlice"
import {Link } from 'react-router-dom'


const UsersList = () => {

    const users = useSelector(allUsers)
    const renderedUsers = users.map((user) =>(
        <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
    ))
  return (
    <section>
      <h2>Users</h2>
      <ul className="list-disc">{renderedUsers}</ul>
    </section>
  );
}

export default UsersList