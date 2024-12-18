import { Link } from 'react-router-dom';
import { supabase } from '../utils';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function Navbar({ session }) {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 2,
        background: 'linear-gradient(90deg, #002395 5%, #e0e0e0 5% 10%, #ED2939 20%)',
      }}
    >
      <Container>
        <Toolbar sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          '& .MuiButton-root, & .MuiTypography-root': {
            color: 'black',
            fontWeight: 'bold',
            textShadow: 'none'
          }
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 'bold'
              }}
            >
              LoiLibreChat
            </Typography>
            
            <Button
              color="inherit"
              component={Link}
              to="/intro"
            >
              Intro
            </Button>

            {session && (
              <Button
                color="inherit"
                component={Link}
                to="/chat"
              >
                Chat
              </Button>
            )}
          </Box>

          <Box>
            {session ? (
              <Button
                color="inherit"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/login"
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

