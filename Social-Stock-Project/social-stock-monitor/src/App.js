import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StockDetails from './components/StockDetails';
import Watchlist from './components/Watchlist';
import Portfolio from './components/Portfolio';
import Chat from './components/Chat';
import Home from './components/Home';
import './App.css';

const CometChat = window.CometChat;
const AppSettingsBuilder = CometChat.AppSettingsBuilder;

const appID = process.env.REACT_APP_APP_ID;
const region = process.env.REACT_APP_REGION;
const appSetting = new AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();

CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);

const uid = "superhero1"; // replace with your user id
const apiKey = process.env.REACT_APP_API_KEY;

CometChat.login(uid, apiKey).then(
  User => {
    console.log("Login Successful:", { User });
  },
  error => {
    console.log("Login failed with exception:", { error });
  }
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/stock/:id" element={<StockDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
