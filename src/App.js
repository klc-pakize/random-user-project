import React from "react";
import mailSvg from "./assets/ee.png";
// import manSvg from "./assets/man.svg";
import womanSvg from "./assets/ss.png";
// import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/aa.png";
import mapSvg from "./assets/cc.png";
import phoneSvg from "./assets/nn.png";
import padlockSvg from "./assets/pp.png";
import uooSvg from "./assets/Oxford-University-Circlet.svg.png";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import AddUser from "./components/footer/AddUser";

function App() {
  // const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
  const [user, setUser] = useState([]);
  const [value, setValue] = useState("");
  const [detail, setDetail] = useState("");
  const [data, setData] = useState([]);

  const users = () => {
    const url = "https://randomuser.me/api/";
    axios(url)
      .then((data) => setUser(data.data.results))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    users();
  }, []);

  const handleNewUser = () => {
    users();
    setValue("");
    setDetail("");
  };

  const handleClick = () => {
    users();
    data.push(user[0]);
    setData(data);
  };

  return (
    <main>
      <div className="block bcg-orange">
        <img src={uooSvg} alt="uoo" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img
            src={user[0]?.picture.medium}
            alt="random user"
            className="user-img"
          />
          <p className="user-title"> {detail ? `My ${detail} is` : "Hello!"}</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onClick={(e) => {
                setValue(user[0]?.name.first + " " + user[0].name.last);
                setDetail("name");
              }}
            >
              <img src={womanSvg} alt="user" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="email"
              onClick={(e) => {
                setValue(user[0]?.email);
                setDetail("email");
              }}
            >
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="age"
              onClick={(e) => {
                setValue(user[0]?.dob.age);
                setDetail("age");
              }}
            >
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="street"
              onClick={(e) => {
                setValue(user[0]?.location.street.name);
                setDetail("street");
              }}
            >
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="phone"
              onClick={(e) => {
                setValue(user[0]?.phone);
                setDetail("phone");
              }}
            >
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="password"
              onClick={(e) => {
                setValue(user[0]?.login.password);
                setDetail("password");
              }}
            >
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button
              className="btn"
              type="button"
              onClick={() => handleNewUser()}
            >
              new user
            </button>
            <button className="btn" type="button" onClick={() => handleClick()}>
              add user
            </button>
          </div>
          <AddUser
            data={data}
            setData={setData}
            user={user}
            setUser={setUser}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
