// PageDialogue.js

import React from 'react';
import { useState, useEffect } from 'react';
import DialogueInput from './DialogueInput';
import Dialogue from './Dialogue';
import ModelCarac from './ModelCarac';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

export default function PageDialogue(props) {
    const [dialogue, setDialogue] = useState([]);
    const [modelCarac, setModelCarac] = useState({});
    const [currentUserInput, setCurrentUserInput] = useState({});

    return (
        <Container>
            <Stack spacing={15}>
                
                    <div className="ModelCarac">
                        <ModelCarac modelCarac={modelCarac} setModelCarac={setModelCarac} />
                    </div>
                
                    <div>
                        <Dialogue dialogue={dialogue} />
                    </div>
                
                    <div className="DialogueInput">
                        <DialogueInput currentUserInput={currentUserInput} setCurrentUserInput={setCurrentUserInput} />
                    </div>
                
            </Stack>
        </Container>
    );
}