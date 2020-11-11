import { TestBed } from '@angular/core/testing';

import { HttptestInterceptor } from './httptest.interceptor';

describe('HttptestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttptestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttptestInterceptor = TestBed.inject(HttptestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
