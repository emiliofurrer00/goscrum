async function fetchAllTasks(){
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtaWxpb2Z1cnJlcjAwQGdtYWlsLmNvbSIsInJvbGUiOiJUZWFtIExlYWRlciIsInVzZXJOYW1lIjoiV2FsYW5zaXRvIiwidGVhbUlkIjoiOWNkYmQxMDgtZjkyNC00MzgzLTk0N2QtOGYwYzY1MWQwZGFkIiwidXNlcklkIjoiNjJhMGM3MzMzM2EyMjRlYTc2MDc5OTRlIiwiaWF0IjoxNjU0ODE4ODc1LCJleHAiOjE2NTQ5MDUyNzV9.B8dYpvTK_EE6jDqxpN-7FF0FfBu8TCmCXGV0-_c22b8';
    const response = await fetch('https://goscrum-api.alkemy.org/task', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`
        },
    })
    const parsedResponse = await response.json();
    console.log(`El valor de response al final es:`);
    console.log(parsedResponse);
    return parsedResponse;
}

//fetchAllTasks()
console.log(fetchAllTasks())