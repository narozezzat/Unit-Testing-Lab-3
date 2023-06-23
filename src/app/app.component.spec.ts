import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestComponent } from 'src/components/test/test.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test');
  });

  // it('test num value equal to 100 after call changenum function',()=>{
  //   component.changeNum();
  //   expect(component.num).toBe(100)
  // })
  // it('test num value equal to 200 after call changeAfterTime function with 3 s',fakeAsync(()=>{
  //   component.changeAfterTime()
  //   tick(3000)
  //   expect(component.num).toBe(200)
  // }))
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'test app is running!'
    );
  });
});
