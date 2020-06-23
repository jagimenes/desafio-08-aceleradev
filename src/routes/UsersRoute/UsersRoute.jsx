import React, { useState, useEffect } from "react";

import UsersList from "../../containers/UsersList/UsersList";

import Api from "../../services/api";

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Api.get("users", (result) => setUsers(result));
  }, []);

  return (
    <div data-testid="users-route" className="container">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
