import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Serene",
      image: "https://cdn-icons-png.flaticon.com/512/21/21104.png",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
