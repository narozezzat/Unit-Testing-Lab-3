import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}
  public getService() {
    return 'service is here';
  }
}
