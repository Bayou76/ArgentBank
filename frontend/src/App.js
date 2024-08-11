import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/Error/Error.jsx"
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
          <Route path="/ArgentBank" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
				</Routes>
			</Router>
		</React.StrictMode>
    </div>
  );
}

export default App;
