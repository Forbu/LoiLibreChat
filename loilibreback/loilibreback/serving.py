"""

This is the backend for the Loilibre project.

The backend has 3 main components:
- call (/llms) to the list of available LLMs (from the LLM provider)
- call (/datasets) to the list of available datasets (from the dataset provider)
- call (/interact) to interact with the LLM with a specific dataset
"""
import os
from dotenv import dotenv_values
from pydantic import BaseModel
import json
# import List
from typing import List
import fastapi
import uvicorn
import aisuite as ai
from fastapi.middleware.cors import CORSMiddleware  # Add this import at the top


config = dotenv_values(".env")

# set the environment variables
for key, value in config.items():
    os.environ[key] = value

app = fastapi.FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

client = ai.Client() # client to the LLM provider

models_list = ["openai:gpt-4o", "mistral:open-mistral-7b"]
datasets_list = ["None"]

class Message(BaseModel):
    role: str
    content: str


class Messages(BaseModel):
    """
    exemple of data :
        test_payload = {
            "messages": [
                {"role": "user", "content": "Hello, how are you?"}
            ]
        }
    """
    messages: List[Message]


@app.get("/")
def read_root():
    return {"message": "Accessing the Loilibre backend"}

@app.get("/llms")
def read_llms():
    return models_list

@app.get("/datasets")
def read_datasets():
    return datasets_list

@app.post("/interact/{llm}/{dataset}")
def read_interact(llm: str, dataset: str, request: Messages):
    """
    Convert the prompt into a dataset and send it to the LLM provider
    """
    payload = request.model_dump_json()
    
    if llm not in models_list:
        raise fastapi.HTTPException(status_code=422, detail="LLM not found")
    
    if dataset not in datasets_list:
        raise fastapi.HTTPException(status_code=422, detail="Dataset not found")
    
    # to json
    payload = json.loads(payload)
    
    # TODO : retrieve the interesting element in from different code laws with embeddings
    
    ## send the payload to the LLM provider
    response = client.chat.completions.create(
        model=llm,
        messages=payload["messages"],  # Pass the messages list directly
        temperature=0.75
    )

    return response.choices[0].message.content

## launch the server
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8001)









