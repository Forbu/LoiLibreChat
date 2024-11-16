import Autocomplete from '@mui/material/Autocomplete';   
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react';

const ModelCarac = (props) => {
    const [modelCarac, setModelCarac] = useState("default");
    const [selectedDatabase, setSelectedDatabase] = useState(null);

    // You can replace this with your actual database options
    const databaseOptions = [
        "Database 1",
        "Database 2",
        "Database 3",
        // Add more database options as needed
    ];

    return (
        <Box sx={{ 
            position: 'fixed',
            left: '20px',
            top: '20px',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            width: 'auto'
        }}>
            <Autocomplete
                sx={{ width: 200 }}
                value="default"
                onChange={(event, newValue) => setModelCarac(newValue)}
                options={[]}
                renderInput={(params) => <TextField {...params} label="Model Carac" />}
            />
            <Autocomplete
                sx={{ width: 200 }}
                value={selectedDatabase}
                onChange={(event, newValue) => setSelectedDatabase(newValue)}
                options={databaseOptions}
                renderInput={(params) => <TextField {...params} label="RAG Database" />}
            />
        </Box>
    );
}

export default ModelCarac;