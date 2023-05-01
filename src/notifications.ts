import { writable } from "svelte/store";

export enum ThemesEnum {
    DANGER = "#E26D69",
    INFO = "#5bc0de",
    SUCCESS = "#84C991",
};

type Notification = {
    id: number;
    message: string;
    type: ThemesEnum;
    timeout: number;
}

var id = 0;

export const notifications = writable<Notification[]>([])

export function toast(message: string, type: ThemesEnum = ThemesEnum.INFO, timeout: number = 2000) {
    let notification: Notification = {id, message, type, timeout}
    notifications.update((state) => [notification, ...state]);
    id++;
    console.log(id);
    setTimeout(() => {
        removeToast(notification);
    }, timeout);
}

export function removeToast(notification: Notification) {
  notifications.update((state) => {
    return state.filter((notif) => notif.id !== notification.id);
  });
}