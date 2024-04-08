// ListSection.js
import React from "react";
import "../../scss/LoginPage.scss";

function ListSection() {
  return (
    <div className="list-section ">
      <h2 className="list-heading">Play Quiz and Win Coins!</h2>
      <ul className="list-point">
        <li className="list-line">Get coins on the completion of each quiz.</li>
        <li className="list-line">Upgrade your skills with our top quizzes.</li>
        <li className="list-line">
          We have many top trending categories like Cricket, World, India,
          Business, loan, insurance & many more!
        </li>
        <li className="list-line">
          Millions of quiz admirers like you have shown trust in us.
        </li>
        <li className="list-line">
          Challenge lakhs of players from across the world!
        </li>
      </ul>

      
    </div>
  );
}

export default ListSection;
