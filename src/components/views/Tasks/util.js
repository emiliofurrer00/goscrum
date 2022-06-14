export function categorizeTasks(tasks){
    const categorizedTasks = tasks.reduce((acc, currentTask) => {
        const {status} = currentTask;
        acc[status].push(currentTask);
        return acc;
    }, {"NEW": [], "IN PROGRESS": [], "FINISHED": [],});
    console.log(categorizedTasks);
    return categorizedTasks;
}

export const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
}