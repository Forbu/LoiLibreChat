import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// state
import { useState } from 'react';

const DialogueInput = (props) => {
    const [userInput, setUserInput] = useState('');
    
    return (
        <Box sx={{ 
            display: 'flex', 
            gap: 2,
            padding: 2,
            alignItems: 'flex-start'
        }}>
            <TextField
                multiline
                rows={4}
                fullWidth
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message here..."
                variant="outlined"
            />
            <Button 
                variant="contained"
                sx={{ height: '56px' }}
            >
                Send
            </Button>
        </Box>
    );
}

export default DialogueInput;