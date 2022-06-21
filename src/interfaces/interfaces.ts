export interface TaskList {
    counter: number,
    tasks: Task[]
}

export interface Task {
    id: number,
    task: string|null
}
