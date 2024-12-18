import './App.css';
import PageDialogue from './components/PageDialogue';
import PageLogin from './components/Login';
import Intro from './components/Intro';
import { useState, useEffect } from 'react';

// import router
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// use utils.js to get the supabase client
import { supabase } from './utils';

import Navbar from './components/Navbar';
import { Container } from '@mui/material';

function App() {
  const [session, setSession] = useState(null);

  // Add useEffect to listen to auth changes
  useEffect(() => {
    // Get current session
    const session = supabase.auth.getSession();
    setSession(session);


    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup subscription
    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <Container 
        disableGutters 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Navbar session={session} />
        <Container
          component="main" 
          sx={{ 
            flexGrow: 1,
            pt: '64px',
            '@media (max-width: 600px)': {
              pt: '56px',
            }
          }}
        >
          <Routes>
            <Route 
              path="/" 
              element={<Navigate to="/intro" />} 
            />
            <Route 
              path="/intro" 
              element={<Intro />} 
            />
            <Route 
              path="/chat" 
              element={session ? <PageDialogue /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={<PageLogin />} 
            />
          </Routes>
        </Container>
      </Container>
    </Router>
  );
}

export default App;
