import React from 'react';
import { Link } from 'react-router-dom';
import Outlet from './comp/Outlet';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        {/* Додайте необхідні елементи для навігації, якщо потрібно */}
        <nav>
          <ul>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/comments">Comments</Link></li>
          </ul>
        </nav>

        {/* Відображення компонентів згідно з вибраним маршрутом */}
        <Outlet />
      </div>
    </Router>
  );
};

export default App;