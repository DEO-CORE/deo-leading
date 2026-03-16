import requests
import os
from dotenv import load_dotenv

load_dotenv()

def send_telegram_message(text):
    token = os.getenv("TOKEN")
    chat_id = os.getenv("ID")
    
    # Проверка, что переменные загрузились
    if not token or not chat_id:
        print("Ошибка: TOKEN или ID не найдены в .env файле")
        return

    url = f"https://api.telegram.org/bot{token}/sendMessage"
    
    try:
        payload = {"chat_id": chat_id, "text": text, "parse_mode": "HTML"}
        requests.post(url, data=payload)
    except Exception as e:
        print(f"Ошибка отправки в TG: {e}")