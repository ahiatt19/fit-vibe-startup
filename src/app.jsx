import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { New } from './new/new';
import { Leaderboard } from './leaderboard/leaderboard';
import { Past } from './past/past';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';





export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);



    return (
      <BrowserRouter>
        <div className='body bg-white text-dark'>
            <header className='container-fluid'>
                <nav className='navbar fixed-top navbar-dark'>
                    <div className='navbar-brand'>
                    FitVibe<sup>&reg;</sup>
                    </div>
                    <menu className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to=''>
                            Home
                            </NavLink>
                        </li>
                        {authState === AuthState.Authenticated && (
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='new'>
                                New
                                </NavLink>
                            </li>
                        )}
                        {authState === AuthState.Authenticated && (
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='leaderboard'>
                                Leaderboard
                                </NavLink>
                            </li>
                        )}
                        {authState === AuthState.Authenticated && (
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='past'>
                                Past
                                </NavLink>
                            </li>
                        )}
                    </menu>
                </nav>
            </header>

    

            <Routes>
                <Route
                    path='/'
                    element={
                        <Login
                            userName={userName}
                            authState={authState}
                            onAuthChange={(userName, authState) => {
                              setAuthState(authState);
                              setUserName(userName);
                            }}
                        />
                    }
                    exact
                />    
                <Route path='/new' element={<New userName={userName}/>} />
                <Route path='/leaderboard' element={<Leaderboard />} />
                <Route path='/past' element={<Past userName={userName}/>} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            
    
            <footer className='bg-white text-dark-50'>
                <div className='container-fluid'>
                    <span className='text-reset'>Hiatt</span>
                    <a className='text-reset' href='https://github.com/ahiatt19/fit-vibe-startup/tree/main'>
                    GitHub
                    </a>
                </div>
            </footer>
        </div>
      </BrowserRouter>
    );
  }


  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }