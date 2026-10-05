export default async function fetchHelper(url, method, body={}, authorisation=false) {
  const headers = {"Content-Type" : "application/json"};
  const options = {};

  if (authorisation) {
    const token = localStorage.getItem("token");
    headers.Authorization = `Bearer ${token}`
  }
  
  if (Object.keys(body).length < 1) {
    options.method = method;
    options.headers = headers;
  }else{
    options.method = method;
    options.headers = headers;
    options.body = JSON.stringify(body);
  }
  
  const response = await fetch(url, options);
  if (response.statusText === "Unauthorized") window.location.href = "login"

  const result = await response.json();
  return result;
}