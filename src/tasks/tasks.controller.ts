import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ValidatetaskPipe } from './pipe/validatetask/validatetask.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) { }

    @Get()
    getAllTasks(@Query() query: any) {
        return this.taskService.getAllTasks()
    }

    @Get('greet')
    greetTask(@Query(ValidatetaskPipe) query: { taskNumber: number, taskTitle: string }) {
        return `Hello, this is ${query.taskTitle} with number: ${query.taskNumber}`
    }

    @Get("/:id")
    getTask(@Param('id') id: string) {
        return this.taskService.getTask(parseInt(id))
    }

    @Post()
    @UseGuards(AuthGuard)
    createTask(@Body() task: any) {
        return this.taskService.createTask(task)
    }

}
