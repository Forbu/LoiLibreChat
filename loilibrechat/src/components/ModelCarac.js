import Autocomplete from '@mui/material/Autocomplete';   
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';

// use useEffect to fetch the models and datasets from the backend


const ModelCarac = (props) => {

    // list of models
    const [models, setModels] = useState(["Mistral", "OpenAI"]);

    // list of datasets
    const [datasets, setDatasets] = useState(["RAG Database 1", "RAG Database 2"]);

    const fetchModelsAndDatasets = async () => {
        try {
            // Update the URL to use localhost or your actual domain instead of 'backend'
            const backendUrl = process.env.REACT_APP_BACKEND_URL.replace('backend', 'localhost');
            console.log('Fetching from:', backendUrl);

            // Fetch models
            const response_models = await fetch(backendUrl + '/llms');
            if (!response_models.ok) {
                throw new Error(`HTTP error! status: ${response_models.status}`);
            }

            // data  models is a list ["Mistral", "OpenAI"]
            const data_models = await response_models.json();

            setModels(data_models);

            props.setModelCarac(data_models[0]);

            // Fetch datasets
            const response_datasets = await fetch(process.env.REACT_APP_BACKEND_URL + '/datasets');
            if (!response_datasets.ok) {
                throw new Error(`HTTP error! status: ${response_datasets.status}`);
            }

            // data datasets is a list ["RAG Database 1", "RAG Database 2"]
            const data_datasets = await response_datasets.json();

            setDatasets(data_datasets);

            props.setSelectedDatabase(data_datasets[0]);

        } catch (error) {
            console.error('Error fetching data:', error);
            // Optionally keep the default values in case of error
            setModels(["Mistral", "OpenAI"]);
            setDatasets(["RAG Database 1", "RAG Database 2"]);
        }
    };

    useEffect(() => {
        fetchModelsAndDatasets();
    }, []);

    return (
        <Container sx={{ 
            position: 'fixed',
            left: '20px',
            top: '80px',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            width: 'auto'
        }}>
            <Autocomplete
                sx={{ width: 200 }}
                value={props.modelCarac}
                onChange={(event, newValue) => props.setModelCarac(newValue)}
                options={models}
                renderInput={(params) => <TextField {...params} label="Model Carac" />}
            />
            <Autocomplete
                sx={{ width: 200 }}
                value={props.selectedDatabase}
                onChange={(event, newValue) => props.setSelectedDatabase(newValue)}
                options={datasets}
                renderInput={(params) => <TextField {...params} label="RAG Database" />}
            />
        </Container>
    );
}

export default ModelCarac;