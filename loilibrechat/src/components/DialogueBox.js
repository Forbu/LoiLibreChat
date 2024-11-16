import Box from '@mui/material/Box';

const DialogueBox = (props) => {
    const { dialogue } = props;
    
    return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                padding: '12px',
                margin: '8px 0',
                maxWidth: '80%',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                display: 'inline-block'
            }}
        >
            <div style={{ marginBottom: '4px', textAlign: 'left' }}>
                <strong>{dialogue.user}</strong>
            </div>
            <div style={{ textAlign: 'left' }}>
                {dialogue.text}
            </div>
        </Box>
    );
}

export default DialogueBox;