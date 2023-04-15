import React, { useRef, useState } from "react";

function AddContact(props) {
  const ref = useRef();
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  const openAddUser = () => {
    if (ref.current.style.display === "block") {
      ref.current.style.display = "none";
    } else {
      ref.current.style.display = "block";
    }
  };

  const onClickSubmit = () => {
    if (userName !== "" && phone !== "") {
      props.addContact(userName, phone);
    } else {
      alert("Please Enter both field correctly");
    }
    ref.current.style.display = "none";
  };

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
          <label>Enter The Details</label> <br />
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
