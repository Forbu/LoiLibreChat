// login page
import { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate } from 'react-router-dom';

// use utils.js to get the supabase client
import { supabase } from '../utils';


// propose a login form

const PageLogin = () => {

    const navigate = useNavigate();
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])

    if (!session) {
      return (
        <div style={{ padding: '1rem' }}>
          <Auth 
            supabaseClient={supabase} 
            appearance={{ 
              theme: ThemeSupa,
              style: {
                container: {
                  maxWidth: '300px',
                  margin: '0 auto',
                },
              },
            }}
            providers={['google', 'github']}
          />
        </div>
      )
    }
    else {
      // Automatically redirect to chat page when logged in
      navigate('/chat');
      return null; // Return null while redirecting
    }
}

export default PageLogin;