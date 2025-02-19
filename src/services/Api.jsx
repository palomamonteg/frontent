const API_URL = "http://localhost:8080";

export async function fetchData(endpoint) {
  const response = await fetch(`${API_URL}/${endpoint}`);
  return response.json();
}

export async function sendData(endpoint, data) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}