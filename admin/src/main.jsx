import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { DarkModeContextProvider } from './context/darkModeContext';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { ListContextProvider } from './context/listContext/ListContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ListContextProvider>
        <MovieContextProvider>
          {/* <DarkModeContextProvider> */}
            <App />
          {/* </DarkModeContextProvider> */}
        </MovieContextProvider>
      </ListContextProvider>
    </AuthContextProvider>

  </React.StrictMode>
);
