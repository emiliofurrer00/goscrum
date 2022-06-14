import { getToken } from "./util";

export async function createTask({title, status, priority, description}){
    const token = localStorage.getItem("token");
    fetch('https://goscrum-api.alkemy.org/task', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`
        },
        body: JSON.stringify({
            task: {
                title,
                status,
                priority,
                description
            }
        })
    })
        .then(response => response.json())
        .then(parsedJson => {
            console.log(parsedJson);
            return parsedJson
    })
}

export async function fetchAllTasks(onlyMine = false){
    const token = getToken();
    const response = await fetch(`https://goscrum-api.alkemy.org/task${onlyMine ? "/ME" : ""}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`
        },
    })
    const parsedResponse = await response.json();
    return parsedResponse;
}

export async function removeTaskById(id){
    const token = getToken();
    const response = await fetch(`https://goscrum-api.alkemy.org/task/${id}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`
        },
    })
    const parsedResponse = await response.json();
    return parsedResponse
}

export async function getAuthData(){
    const initialResponse = await fetch('https://goscrum-api.alkemy.org/auth/data')
    const parsedResponse = await initialResponse.json();
    return parsedResponse;
}