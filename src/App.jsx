import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Outlet from './comp/Outlet';

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