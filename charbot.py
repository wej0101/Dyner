import requests

def chat_with_ollama(message, model="llama3"):
    url = "http://localhost:11434/api/chat"
    payload = {
        "model": model,
        "messages": [
            {"role": "user", "content": message}
        ]
    }

    response = requests.post(url, json=payload)
    return response.json()["message"]["content"]

# 테스트 호출
print(chat_with_ollama("나의 공부 내용을 바탕으로 퀴즈를 만들어줘. 내용: TCP 3-way-handshake"))