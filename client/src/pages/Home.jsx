import React from "react";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";

function Home() {
  const [ roomId, setRoomId ] = useState("");
  const [ username, setUsername ] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="" alt="logo" />
        <h4 className="mainLabel">PASTE INVITATION ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="Room ID" value={roomId} onChange={(e)=>setRoomId(e.target.value)} />
          <input type="text" className="inputBox" placeholder="USERNAME" value={username} onChange={(e)=>setUsername(e.target.value)} />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href="#" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with love by{" "}
          <a href="https://github.com/abhay2002-pro">Abhay Ray</a>
        </h4>
      </footer>
    </div>
  );
}

export default Home;
