import React, { useEffect, useState } from "react";
import AddContact from "./AddContact";
import UsersList from "./UsersList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((userList) => {
        setUsers(userList);
      })
      .catch((error) => {
        console.error("FETCH ERROR:", error);
      });
  }, []);

  const addNewContact = async (username, phone) => {
    let id = Date.now();
    const url = "https://jsonplaceholder.typicode.com/users";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        username,
        phone,
        id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    let updatedUserList = [{ username, phone, id }].concat(users);
    setUsers(updatedUserList);
  };

  const deleteContact = (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url, {
      method: "DELETE",
    });
    let updatedUserList = users.filter((user) => user.id !== id);
    setUsers(updatedUserList);
  };

  return (
    <div className="App">
      <header>
        <img
          src="https://freepngimg.com/thumb/cartoon/4-2-cartoon-transparent-thumb.png"
          alt="header-img"
        />
        <h1>My Contact Lists</h1>
      </header>
      <div className="users-container">
        <div className="contact-container">
          <div className="left-container">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9408/9408175.png"
              alt="profile-img"
            />
            <input
              type="text"
              className="update-user"
              placeholder="Enter User Name"
            ></input>
            <input
              type="number"
              className="update-phone"
              placeholder="Enter Contact"
            ></input>
          </div>
          <div className="right-container">
            <img
              src="https://i.ibb.co/DVpgGbd/check.png"
              alt="edit-symbol"
              className="edit-btn"
            />
            <img
              src="https://i.ibb.co/Ldtj8Wf/cancel.png"
              alt="delete-symbol"
              className="delete-btn"
            />
          </div>
        </div>
      </div>
      <div className="users-container">
        {users.map((user, index) => {
          return (
            <UsersList
              key={index}
              id={user.id}
              name={user.username}
              phone={user.phone.split(" ")[0]}
              deleteContact={deleteContact}
            />
          );
        })}
      </div>
      <AddContact addContact={addNewContact} />
    </div>
  );
}

export default App;
