import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// state
import { useState } from 'react';

const DialogueInput = (props) => {

    
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
                value={props.currentUserInput}
                onChange={(e) => props.setCurrentUserInput(e.target.value)}
                placeholder="Type your message here..."
                variant="outlined"
            />
            <Button 
                variant="contained"
                sx={{ height: '56px' }}
                onClick={() => props.handleSubmit(props.currentUserInput)}
            >
                Envoyer
            </Button>
        </Box>
    );
}

export default DialogueInput;