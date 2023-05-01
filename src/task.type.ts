export interface ITask {
    taskId: number;
    taskName: string;
    taskComplete: boolean;
    taskDelay?: number;
}