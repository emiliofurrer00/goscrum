export function createTask({title, status, priority, description}){
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
    })
}