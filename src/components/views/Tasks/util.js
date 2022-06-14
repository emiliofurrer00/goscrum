export function categorizeTasks(tasks){
    const categorizedTasks = tasks.reduce((acc, currentTask) => {
        const {status} = currentTask;
        acc[status].push(currentTask);
        return acc;
    }, {"NEW": [], "IN PROGRESS": [], "FINISHED": [],});
    console.log(categorizedTasks);
    return categorizedTasks;
}