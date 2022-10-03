import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider } from "react-router-dom";
import './App.css';
import GamesList from './components/Games/GamesList/GamesList';
import TopNavBar from './components/TopNavBar/TopNavBar';
import { AuthProvider, RequireAuth } from "./hooks/useAuth";
import GameView, { gameLoader } from './views/Games/GameView';
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col mb-5">
          <AuthProvider>
            <RouterProvider
              router={
                createBrowserRouter(
                  createRoutesFromElements(
                    <Route element={
                      <>
                        <TopNavBar />
                        <Outlet />
                      </>
                    }>
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
