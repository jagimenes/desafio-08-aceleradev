import React from "react";
import User from "../../components/User";
import Loading from "../../components/Loading";

import "./UsersList.scss";

const UserList = ({ users }) => {
  return (
    <section data-testid="user-list" className="users-list">
      {users.map((user) => (
        <User key={user.id} infoUser={user} />
      ))}
    </section>
  );
};

export default UserList;
