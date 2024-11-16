import DialogueBox from './DialogueBox';
import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';

// dialogue exemple 
const dialogueExemple = [
    {
        id: 1,
        text: "Hello, how are you?",
        user: "user"
    },
    {
        id: 2,
        text: "I'm fine, thank you",
        user: "assistant"
    },
    {
        id: 3,
        text: "a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that \
        it has a more-or-less normal distribution of letters, as opposed to using \
        'Content here, content here', making it look like readable English. Many \
        desktop publishing packages and web page editors now use Lorem Ipsum as their \
        default model text, and a search for 'lorem ipsum' will uncover many web sites \
        still in their infancy. Various versions have evolved over the years, sometimes \
        by accident, sometimes on purpose (injected humour and the like).",
        user: "user"
    }
]


const Dialogue = (props) => {
    
    const [dialogues, setDialogues] = useState(dialogueExemple);

    return (
        <Stack spacing={2}>
            {dialogues.map((dialogue) => (
                <DialogueBox key={dialogue.id} dialogue={dialogue} />
            ))}
        </Stack>
    );
}

export default Dialogue;