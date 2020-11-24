import { TestBed } from '@angular/core/testing';

import { BasicInterceptorInterceptor } from './basic-interceptor.interceptor';

describe('BasicInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BasicInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BasicInterceptorInterceptor = TestBed.inject(BasicInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
