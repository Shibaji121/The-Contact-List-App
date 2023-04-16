import React, { useRef, useState } from "react";

function AddContact(props) {
  const ref = useRef();
  const [userName, setUserName] = useState(""); //state to store the new Contact user name
  const [phone, setPhone] = useState(""); //state to store the new Contact phone number

  // This is for open the Add User Dialog box when click on Plus button
  const openAddUser = () => {
    if (ref.current.style.display === "block") {
      ref.current.style.display = "none";
    } else {
      ref.current.style.display = "block";
    }
  };

  // This is for submit the Newly entered the username and Phone number
  const onClickSubmit = () => {
    if (userName !== "" && phone !== "") {
      props.addContact(userName, phone);
    } else {
      alert("Please Enter both field correctly");
    }
    ref.current.style.display = "none";
  };

  //return the JSX for Add User dialog box
  return (
    <>
      <img
        className="add-user-btn"
        src="https://i.ibb.co/PW7FMSB/plus.png"
        alt="plus-symbol"
        onClick={openAddUser}
      />
      <div id="add-user" ref={ref}>
        <div>
          <label>Enter The Contact Details</label> <br />
          <input
            type="text"
            id="user-name"
            placeholder="User Name"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <br />
          <input
            type="number"
            id="phone-number"
            placeholder="Contact Number"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <br />
          <button type="submit" value="Submit" onClick={onClickSubmit}>
            Add Contact
          </button>
        </div>
      </div>
    </>
  );
}

export default AddContact;
