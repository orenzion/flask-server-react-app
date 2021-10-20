import requests

BASE = "http://localhost:5000"


response = requests.get(
    BASE + "1/2/1/2")
print(response.json())
