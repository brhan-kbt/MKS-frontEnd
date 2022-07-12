import { TestBed } from '@angular/core/testing';
import { UtilService } from './util.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { MatDialogModule } from '@angular/material/dialog';

describe('UtilService', () => {
  let service: UtilService;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatDialogModule
      ],
      declarations: [],
      providers: [MessageService],
    });
    service = TestBed.inject(UtilService);
    messageService = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call message service add method', () => {
    const spy = spyOn(messageService, 'add');
    service.showMessage('success', 'summary', 'detail');
    expect(spy).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'summary',
      life: 4000,
      detail: 'detail',
      closable: false
    });
  });
});

