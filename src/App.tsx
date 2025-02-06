import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import './App.css';
import { Home } from './screens/Home/Home';
import { Thing } from './screens/Things/Thing';

function App() {
  return (
    <div className="App">
      <h1>Living Things</h1>
      <p>
        Welcome to the Living Things site! Here, you will find information about
        all the living things in Josh's house. From the plants that adorn the
        living room to the pets that bring joy and companionship, each living
        thing has its own story and unique characteristics. Explore the
        different sections of the site to learn more about these fascinating
        living things. Click on the links to discover interesting facts, care
        tips, and personal anecdotes about each one. Whether you're a plant
        enthusiast or an animal lover, there's something here
      </p>
      <HashRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about/:id" element={<Thing />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
