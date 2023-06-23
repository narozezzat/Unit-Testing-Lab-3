import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from 'src/components/test/test.component';
import { TestPipe } from 'src/pipes/test.pipe';

@NgModule({
  declarations: [AppComponent, TestComponent, TestPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
