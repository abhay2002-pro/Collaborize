import React from "react";

function Home() {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="" alt="logo" />
        <h4 className="mainLabel">PASTE INVITATION ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="Room ID" />
          <input type="text" className="inputBox" placeholder="USERNAME" />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href="#" className="createNewBtn">new room</a>
          </span>
        </div>
      </div>
      <footer>
        <h4>Built with love by <a href="https://github.com/abhay2002-pro">Abhay Ray</a></h4>
      </footer>
    </div>
  );
}

export default Home;
