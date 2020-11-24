import { Pipe, PipeTransform } from '@angular/core';
import {AuthResponseModel} from '../models/auth-response.model';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
