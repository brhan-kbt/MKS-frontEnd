import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';
import { TransportersService } from './transporters.service';
import { Transporter } from '../models/transporter.model';

describe('TransporterService', () => {
  let service: TransportersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [
        MessageService,
      ]
    });
    service = TestBed.inject(TransportersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch transporter from server', () => {
    const response = { success: true, data: [{}] };
    const spy = spyOn(service, 'get').and.returnValue(of(response));

    service.get().subscribe((res: any) => {
      expect(res).toEqual(response);
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should add a new transporter', () => {
    const response = { success: true, data: {} };
    const data: Transporter =
     { id: null, name: 'Abebe', code: 'Test', address: 'Test', contact_phone: 'Test' };
    const spy = spyOn(service, 'add').and.returnValue(of(response));


    service.add(data).subscribe((res: any) => {
      expect(res).toEqual(response);
      expect(spy).toHaveBeenCalledWith(data);
    });
  });

  it('should update a transporter', () => {
    const response = { success: true, data: [{}] };
    const data: Transporter = { id: 1 } as Transporter;
    const spy = spyOn(service, 'update').and.returnValue(of(response));


    service.update(data.id, data).subscribe((res: any) => {
      expect(res).toEqual(response);
      expect(spy).toHaveBeenCalledWith(data.id, data);
    });
  });
});
