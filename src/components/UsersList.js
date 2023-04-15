import React, { useState } from "react";

function UsersList(props) {
  const [editMode, setEditMode] = useState(false);
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");

  const onClickUpdateSubmit = () => {
    if (userName !== "" && phone !== "") {
      console.log(userName);
      console.log(phone);
      props.updateContact(userName, phone, id);
    } else {
      alert("Please Enter both field correctly");
    }
    setEditMode(false);
  };

  return (
    <>
      {editMode ? (
        <div key={props.index} className="contact-container">
          <div className="left-container">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9408/9408175.png"
              alt="profile-img"
            />
            <input
              type="text"
              className="update-user"
              placeholder="Enter User Name"
              onChange={(e) => setUserName(e.target.value)}
              required
            ></input>
            <input
              type="number"
              className="update-phone"
              placeholder="Enter Contact"
              onChange={(e) => setPhone(e.target.value)}
              required
            ></input>
          </div>
          <div className="right-container">
            <img
              src="https://i.ibb.co/DVpgGbd/check.png"
              alt="check-symbol"
              className="edit-btn"
              onClick={onClickUpdateSubmit}
            />
            <img
              src="https://i.ibb.co/Ldtj8Wf/cancel.png"
              alt="cancel-symbol"
              className="delete-btn"
              onClick={() => setEditMode(false)}
            />
          </div>
        </div>
      ) : (
        <div key={props.index} className="contact-container">
          <div className="left-container">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9408/9408175.png"
              alt="profile-img"
            />
            <div className="user-name">{props.name}</div>
            <div className="phone-number">{props.phone}</div>
          </div>
          <div className="right-container">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3597/3597075.png"
              alt="edit-symbol"
              className="edit-btn"
              onClick={() => {
                setEditMode(true);
                setId(props.id);
              }}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/5676/5676146.png"
              alt="delete-symbol"
              className="delete-btn"
              onClick={(id) => props.deleteContact(props.id)}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default UsersList;
