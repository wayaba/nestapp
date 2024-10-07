import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {

    private tasks = []

    getAllTasks() {
        return this.tasks;
    }

    getTask(id: number) {
        const foundTask = this.tasks.find(task => task.id === id);
        if (!foundTask)
            return new NotFoundException(`Task with id ${id} not found`)

        return foundTask
    }

    createTask(task: any) {
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
        return task
    }
}
