import { useEffect, useState } from "react";
import React from "react";
const Header = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUsername(JSON.parse(user).username);
    }
  }, []);
  return <h1 className="header">Bienvenido {username}</h1>;
};

export default Header;
