import { useState } from "react";
import './about.css'
const About = () => {
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);

  const handleShowName = () => {
    setName("Jadro Montes");
    setVisible(true);
  };

  const getMyInfo = () => {
    if (visible) {
      return (
        <div className="about-data">
          <h2>Montes Ballesteros Jadro Alain</h2>
          <h2>skulljamb.08@gmail.com</h2>
          <ul>
            <br />
            <p>Hobbies</p>
            <li>Play musical instruments 🎸</li>
            <li>Assemble puzzle 🧩</li>
            <li>Sleep 💤</li>
          </ul>
        </div>
      );
    } else return "";
  };

  return (
    <div className="about-page">
      {getMyInfo()}
      <button onClick={handleShowName}>Click to see my name</button>
    </div>
  );
};

export default About;
