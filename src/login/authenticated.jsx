import React from 'react';
import { useNavigate } from 'react-router-dom';
import './authenticated.css';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div>
      <div className='userName'>{props.userName}</div>
      <Button id='button' variant='primary' onClick={() => navigate('/new')}>
        Track
      </Button>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
