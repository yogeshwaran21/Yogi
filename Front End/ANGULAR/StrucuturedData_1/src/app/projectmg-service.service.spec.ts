import { TestBed } from '@angular/core/testing';

import { ProjectmgServiceService } from './projectmg-service.service';

describe('ProjectmgServiceService', () => {
  let service: ProjectmgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectmgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
