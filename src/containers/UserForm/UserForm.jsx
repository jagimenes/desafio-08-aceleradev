import React, { useState } from "react";

import UserProfile from "../UserProfile";

import Api from "../../services/api";

import SuccessMessage from "../../components/SuccessMessage";

import "./UserForm.scss";

const UserForm = () => {
  const [sucessmessage, setsucessMessage] = useState(false);
  const [user, setUser] = useState({
    id: "0",
    name: "John Doe",
    avatar: "",
    username: "johndoe",
    email: "johndoe@gmail.com",
  });

  const handleChangeName = (name) => setUser({ ...user, name });
  const handleChangeUser = (username) => setUser({ ...user, username });
  const handleChangeEmail = (email) => setUser({ ...user, email });
  const handleChangeAvatar = (avatar) => setUser({ ...user, avatar });
  const handleCreateUser = () => {
    console.log("Criando um novo usuario ...");
    Api.post("users", user, (result) => {
      console.log(result);
      setsucessMessage(true);
    });
  };

  return (
    <React.Fragment>
      {sucessmessage && <SuccessMessage />}
      <UserProfile
        avatar={user.avatar}
        name={user.name}
        username={user.username}
      />
      <section data-testid="user-form" className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Ex: Fulano da Silva"
              value={user.name}
              onChange={(e) => handleChangeName(e.target.value)}
            />
            <label>Usuário</label>
            <input
              type="text"
              placeholder="Ex: fulano_da_silva"
              value={user.username}
              onChange={(e) => handleChangeUser(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Ex: fulano@provedor.com"
              value={user.email}
              onChange={(e) => handleChangeEmail(e.target.value)}
            />
            <label>
              Url da Imagem de Perfil (use a url da imagem do Linkedin)
            </label>
            <input
              type="text"
              placeholder="http://..."
              value={user.avatar}
              onChange={(e) => handleChangeAvatar(e.target.value)}
            />
            <button onClick={handleCreateUser} type="button">
              Cadastrar
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserForm;
