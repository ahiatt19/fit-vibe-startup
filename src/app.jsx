import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
      <div className='body bg-white text-dark'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              FitVibe<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='home.html'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='new.html'>
                  New
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='leaderboard.html'>
                  Leaderboard
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='past.html'>
                  Past
                </a>
              </li>
            </menu>
          </nav>
        </header>
  
        <main>App components go here</main>
  
        <footer className='bg-white text-dark-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Hiatt</span>
            <a className='text-reset' href='https://github.com/ahiatt19/fit-vibe-startup/tree/main'>
              GitHub
            </a>
          </div>
        </footer>
      </div>
    );
  }