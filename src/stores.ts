import { writable } from "svelte/store";
import type { ITask } from "./task.type";

export const items = writable<ITask[]>([]);