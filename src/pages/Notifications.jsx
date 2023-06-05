import React, { useState } from 'react';
import './Notifications.css';

function Notifications() {
  const [isBoxVisible, setBoxVisible] = useState(false);

  const toggleNotifi = () => {
    setBoxVisible(!isBoxVisible);
  };

  return (
    <nav>
      <div className="logo"></div>
      <div className="icon" onClick={toggleNotifi}>
        <img src="components/notification.svg" alt="" /> <span>17</span>
      </div>
      <div className={`notifi-box ${isBoxVisible ? 'visible' : ''}`} id="box">
        <h2>
          Notification <span>17</span>
        </h2>
        <div className="notifi-item">
          <img src="pablic/kedi.jpg" alt="img" />
          <div className="text">
            <h4>Minnoş</h4>
            <p>10.05.2023</p>
          </div>
        </div>
        <div className="notifi-item">
          <img src="pablic/kedi.jpg" alt="img" />
          <div className="text">
            <h4>Minnoş</h4>
            <p>online</p>
          </div>
        </div>
        <div className="notifi-item">
          <img src="pablic/kedi.jpg" alt="img" />
          <div className="text">
            <h4>Minnoş</h4>
            <p>15.05.2023</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Notifications;
