import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [AsyncPipe]
})
export class AppComponent {
  team: Observable<string[]>;

  constructor(employee: EmployeeService) {
    this.team = employee.getList();
  }
}
