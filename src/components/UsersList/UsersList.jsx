import React from "react";
import UsersListItem from "./UsersListItem";
import { useSelector } from "react-redux";
import List from "../List/List";

function UsersList() {
  const users = useSelector((state) => state.users.users);

  return (
    <List>
      {users.length === 0
        ? (<div style={{textAlign: 'center'}}>No users!</div>)
        : users.map((user) => <UsersListItem user={user} key={user.id} />)}
    </List>
  );
}

export default UsersList;
