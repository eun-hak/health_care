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
import {
  CALENDER,
  CALENDER_DETAIL,
  CHANNEL,
  HOME,
  INBODY,
  PROFILE,
  VOLUME,
} from "./const/URL";

const App = (): JSX.Element => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<LoginForm />} />
          <Route path={PROFILE} element={<Profile />} />
          <Route path={CALENDER} element={<Calender />} />
          <Route path={CHANNEL} element={<Channel />} />
          <Route path={INBODY} element={<Inbody />} />
          <Route path={VOLUME} element={<Volume />} />
          <Route path={CALENDER_DETAIL} element={<Calender_detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
