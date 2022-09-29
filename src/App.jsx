import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import { AuthProvider, RequireAuth } from "./hooks/useAuth";
import Login from './views/Login/Login';


function App() {
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
                      <div>Games</div>
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
