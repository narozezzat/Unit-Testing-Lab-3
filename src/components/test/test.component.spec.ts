import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { TestService } from 'src/services/test.service';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let testService: TestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    testService = TestBed.inject(TestService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test return type number', () => {
    expect(component.multiply).not.toBeNaN();
  });
  it('test multiply result equal to 12', () => {
    expect(component.multiply(3, 4)).toBe(12);
  });
  it('should call getValue Function from service in ngOnInit', () => {
    spyOn(testService, 'getService');
    component.ngOnInit();
    expect(testService.getService).toHaveBeenCalled();
    expect(testService.getService).toHaveBeenCalledTimes(1);
  });
});
