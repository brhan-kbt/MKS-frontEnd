import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BaseService', () => {
  let service: BaseService;
  let httpMock: HttpTestingController;
  const url = 'http://cats.com/warehouses';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(BaseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get url', () => {
    const env = { apiUrl: 'http://cats.com' };
    const fullUrl = service.getUrl('warehouses', env);
    expect(fullUrl).toEqual(url);
  });

  it('should call get method of HttpClient class', () => {
    const response = { success: true, data: [{}] };

    service.get(url).subscribe(res => {
      expect(res).toEqual(response);
    });

    const testReq = httpMock.expectOne(url);
    expect(testReq.request.method).toBe('GET');
    testReq.flush(response);
    httpMock.verify();
  });

  it('should call post method of HttpClient class', () => {
    const response = { success: true, data: [{}] };

    service.post(url, {}).subscribe(res => {
      expect(res).toEqual(response);
    });

    const testReq = httpMock.expectOne(url);
    expect(testReq.request.method).toBe('POST');
    testReq.flush(response);
    httpMock.verify();
  });

  it('should call put method of HttpClient Class', () => {
    const response = { success: true, data: [{}] };
    const payload: any = {}

    service.put(url, payload).subscribe(res => {
      expect(res).toEqual(response);
    });

    const testReq = httpMock.expectOne(url);
    expect(testReq.request.method).toBe('PUT');
    testReq.flush(response);
    httpMock.verify();
  });

  it('should call delete method of HttpClient Class', () => {
    service.delete(url).subscribe();
    const testReq = httpMock.expectOne(url);
    expect(testReq.request.method).toBe('DELETE');
  });
});
