import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidatetaskPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const taskNumber = parseInt(value.taskNumber.toString(), 10)
    if (isNaN(taskNumber))
      throw new HttpException("Task number must be a number", HttpStatus.BAD_REQUEST)


    return { ...value, taskNumber: taskNumber };
  }
}
