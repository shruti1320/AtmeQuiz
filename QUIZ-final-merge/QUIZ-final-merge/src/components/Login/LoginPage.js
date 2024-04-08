import React from "react";
import LoginSection from "./LoginSection";
import ListSection from "./ListSection";
import Header from "../Header/Header";
import { useParams } from "react-router";

export default function LoginPage() {
  const {id}=useParams();
  return (
    <div className="home">
      <Header showBackButton={true}  backRoute={`/home/playbtn/${id}`} />
      <div className="list-container">
        <LoginSection />
        <ListSection />
      </div>
    </div>
  );     
}