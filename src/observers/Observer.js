export class Observer {
    constructor() {
        this.listeners = [];
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    unsubscribe(id, type) {
        this.listeners = this.listeners.filter(listener => listener.id !== id && listener.type !== type);
    }

    allUnsubscribe(id) {
        this.listeners = this.listeners.filter(listener => listener.id !== id);
    }

    notify(type, payload) {
        this.listeners.forEach((listener) => {
            if (listener.type === type) {
                listener.callback(payload);
            }
        });
    }
}