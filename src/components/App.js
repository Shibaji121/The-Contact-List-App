import React from "react";

function App() {
  return (
    <div className="App">
      <header>
        <img
          src="https://freepngimg.com/thumb/cartoon/4-2-cartoon-transparent-thumb.png"
          alt="header-img"
        />
        <h1>My Contact Lists</h1>
      </header>
      <div className="contact-container">
        <div className="left-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9408/9408175.png"
            alt="profile-img"
          />
          <div className="user-name">Shibaji Sahu</div>
          <div className="phone-number">1234567890</div>
        </div>
        <div className="right-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3597/3597075.png"
            alt="edit-symbol"
            className="edit-btn"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/5676/5676146.png"
            alt="delete-symbol"
            className="delete-btn"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
