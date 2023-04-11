import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/Login";
import Profile from "./pages/Profile";
import Calender from "./pages/Calender";
import Channel from "./pages/Channel";
import Inbody from "./pages/Inbody";
import Volume from "./pages/Volume";
import Calender_detail from "./pages/Calender_detail";

const App = (): JSX.Element => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Calender" element={<Calender />} />
          <Route path="/Channel" element={<Channel />} />
          <Route path="/Inbody" element={<Inbody />} />
          <Route path="/Volume" element={<Volume />} />
          <Route path="/Calender_detail" element={<Calender_detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
