import React from "react";

const Drawer = ({ onClose }) => {
  return (
    <div className="drawer">
      <div className="drawer-header">
        <h2>Drawer</h2>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="drawer-content">
        <p>This is some random text inside the drawer.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam libero eu orci varius, sed semper libero pellentesque. Sed viverra nulla eu velit pharetra vehicula.</p>
        <button onClick={() => alert("Button clicked!")}>Click me</button>
      </div>
    </div>
  );
};

export default Drawer;
