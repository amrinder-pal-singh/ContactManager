import { TestBed } from '@angular/core/testing';

import { ContactsManagerServiceService } from './contacts-manager-service.service';

describe('ContactsManagerServiceService', () => {
  let service: ContactsManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactsManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
