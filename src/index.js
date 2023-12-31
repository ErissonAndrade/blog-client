import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Container from '@mui/material/Container';
import './styles/global.css';
import RouteSwitch from './routes/RouteSwitch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container 
    maxWidth="xlg" 
    disableGutters={true}
    sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
    <RouteSwitch />
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
