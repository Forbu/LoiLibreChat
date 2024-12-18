// PageDialogue.js

import React from 'react';
import { useState } from 'react';
import DialogueInput from './DialogueInput';
import Dialogue from './Dialogue';
import ModelCarac from './ModelCarac';
import Container from '@mui/material/Container';

const dialogueExemple = [
    {
        id: 1,
        text: "Parle à la loi avec LoiLibre !",
        user: "LoiLibre"
    },
]

export default function PageDialogue(props) {

    const [modelCarac, setModelCarac] = useState("Mistral");
    const [selectedDatabase, setSelectedDatabase] = useState("RAG Database 1");
    const [currentUserInput, setCurrentUserInput] = useState("");

    const [dialogues, setDialogues] = useState(dialogueExemple);

    const handleSubmit = async () => {
        // Add user message and save the new state
        const userMessage = { text: currentUserInput, user: "User", id: dialogues.length + 1 };
        setDialogues(prevDialogues => [...prevDialogues, userMessage]);

        // Call backend
        const json_body = { messages: [{ role: "user", content: currentUserInput }] };

        const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/interact/' + modelCarac + '/' + selectedDatabase, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(json_body)
        });

        const data = await response.json();

        // Add AI response using the previous state
        setDialogues(prevDialogues => [...prevDialogues, { text: data, user: "LoiLibre", id: prevDialogues.length + 1 }]);
    }

    return (
        <Container maxWidth="lg">
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                gap: '2rem',
                padding: '4rem 0 2rem 0'
            }}>
                <div className="ModelCarac">
                    <ModelCarac modelCarac={modelCarac} setModelCarac={setModelCarac} 
                                setSelectedDatabase={setSelectedDatabase} selectedDatabase={selectedDatabase} />
                </div>
            
                <div style={{ 
                    flex: 1,
                    overflow: 'auto',
                    minHeight: 0 // Important for proper flex behavior
                }}>
                    <Dialogue dialogues={dialogues} />
                </div>
            
                <div className="DialogueInput">
                    <DialogueInput 
                        currentUserInput={currentUserInput} 
                        setCurrentUserInput={setCurrentUserInput} 
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </Container>
    );
}