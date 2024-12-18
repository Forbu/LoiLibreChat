import DialogueBox from './DialogueBox';
import { useState } from 'react';
import Stack from '@mui/material/Stack';



const Dialogue = (props) => {
    

    return (
        <Stack spacing={2}>
            {props.dialogues.map((dialogue) => (
                <DialogueBox key={dialogue.id} dialogue={dialogue} />
            ))}
        </Stack>
    );
}

export default Dialogue;