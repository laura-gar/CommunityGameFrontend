import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import GamesList from './components/Games/GamesList/GamesList';
import { AuthProvider, RequireAuth } from "./hooks/useAuth";
import GameView from './views/Games/GameView';
import Login from './views/Login/Login';


function App() {
  const [selectedGame, setSelectedGame] = useState();
  return (
    <div className="container">
      <div className="row">
        <div className="col">

          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path={'/login'} element={<Login />} />
                <Route path={'/signup'} element={<div></div>} />
                <Route
                  path={'/games'}
                  element={
                    <RequireAuth>
                      <GamesList onGameSelection={(game) => { setSelectedGame(game) }} />
                    </RequireAuth>
                  } />
                <Route path={'/games/:gameId'} element={
                  <RequireAuth>
                    <GameView game={selectedGame} />
                  </RequireAuth>
                } />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
