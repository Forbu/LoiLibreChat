import pytest
from fastapi.testclient import TestClient
from loilibreback.serving import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Accessing the Loilibre backend"}

def test_read_llms():
    response = client.get("/llms")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
    assert "openai:gpt-4o" in response.json()
    assert "mistral:open-mistral-7b" in response.json()

def test_read_datasets():
    response = client.get("/datasets")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
    assert "None" in response.json()

def test_interact():
    test_payload = {
        "messages": [
            {"role": "user", "content": "Hello, how are you?"}
        ]
    }
    
    response = client.post(
        "/interact/openai:gpt-4o/None",
        json=test_payload
    )
    assert response.status_code == 200
    assert isinstance(response.json(), str)

@pytest.mark.parametrize("invalid_llm", ["invalid_model", "unknown:gpt"])
def test_interact_invalid_llm(invalid_llm):
    test_payload = {
        "messages": [
            {"role": "user", "content": "Hello"}
        ]
    }
    
    response = client.post(
        f"/interact/{invalid_llm}/None",
        json=test_payload
    )
    assert response.status_code == 422  # or 400 depending on your error handling 