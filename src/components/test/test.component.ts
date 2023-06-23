import { Component } from '@angular/core';
import { TestService } from 'src/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  num1: number = 3;
  num2: number = 4;
  constructor(public TestService: TestService) {}
  ngOnInit(): void {
    this.TestService.getService();
  }
  multiply = (num1: number, num2: number) => {
    return this.num1 * this.num2;
  };
}
