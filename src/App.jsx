import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';


function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={'/login'} element={<div></div>} />
          <Route path={'/signup'} element={<div></div>} />
          <Route path={'/games'} element={<div></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
