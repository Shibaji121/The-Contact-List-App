import React, { useEffect, useState } from "react";
import AddContact from "./AddContact";
import UsersList from "./UsersList";
import Loading from "./Loading";

function App() {
  const [users, setUsers] = useState([]);

  // function to fetch all Contact user details
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

  // This is for Add new Contact details
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

  // This is for Delete Contact
  const deleteContact = (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url, {
      method: "DELETE",
    });
    let updatedUserList = users.filter((user) => user.id !== id);
    setUsers(updatedUserList);
  };

  // This is for Update the existing contact detail
  const updateContact = (username, phone, id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url, {
      method: "PUT",
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
    let updatedUsersList = users.map((user) => {
      if (user.id === id) {
        user.username = username;
        user.phone = phone;
      }
      return user;
    });
    setUsers(updatedUsersList);
  };

  // return the JSX
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
        {users.length === 0 ? (
          <Loading />
        ) : (
          users.map((user, index) => {
            return (
              <UsersList
                key={index}
                id={user.id}
                name={user.username}
                phone={user.phone.split(" ")[0]}
                deleteContact={deleteContact}
                updateContact={updateContact}
              />
            );
          })
        )}
      </div>
      <AddContact addContact={addNewContact} />
    </div>
  );
}

export default App;
