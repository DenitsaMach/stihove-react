//import { useState, useEffect, useRef } from 'react';

import { Routes, Route} from 'react-router-dom';

import {AuthProvider} from "./contexts/AuthContext";
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import PoemsList from './components/PoemsList/PoemsList';
import PoemDetails from './components/PoemDetails/PoemDetails';
import PoemAdd from './components/PoemAdd/PoemAdd';
import PoemEdit from './components/PoemEdit/PoemEdit';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Header />
      <main id = "site-content">
        <div id="mainContainer">
          <Navigation />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/poems/all" element={<PoemsList />} />
            <Route path="/poems/mine" element={<PoemsList />} />
            <Route path="/poems/favourite" element={<PoemsList />} />
            <Route path="/poems/add" element={<PoemAdd />} />
            <Route path="/details/:poemId" element={<PoemDetails />} />
            <Route path="/details/:poemId/edit" element={<PoemEdit />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </AuthProvider>
  );
}

export default App;
