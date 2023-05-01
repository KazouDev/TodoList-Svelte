import type { ITask } from "./task.type";

export default class TodoApi {
    static async getAll(): Promise<ITask[]> {
      return JSON.parse(localStorage.getItem("todo-list") || "[]");
    }
  
    static async save(items): Promise<void>{
      localStorage.setItem("todo-list", JSON.stringify(items));
    }
  }