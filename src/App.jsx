import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import './App.css';
import GamesList from './components/Games/GamesList/GamesList';
import { AuthProvider, RequireAuth } from "./hooks/useAuth";
import GameView, { gameLoader } from './views/Games/GameView';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <AuthProvider>
            <RouterProvider
              router={
                createBrowserRouter(
                  createRoutesFromElements(
                    <Route>
                      <Route path='/' element={<Navigate to={'/games'} />} />
                      < Route path={'/login'} element={< Login />} />
                      <Route path={'/signup'} element={<SignUp />} />
                      <Route
                        path={'/games'}
                        element={
                          <RequireAuth>
                            <GamesList />
                          </RequireAuth>
                        } />
                      <Route path={'/games/:gameId'} loader={gameLoader} element={
                        <RequireAuth>
                          <GameView />
                        </RequireAuth>
                      } />
                    </Route>
                  )
                )}
            />
          </AuthProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
