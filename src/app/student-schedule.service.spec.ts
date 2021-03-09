import { TestBed } from '@angular/core/testing';

import { StudentScheduleService } from './student-schedule.service';

describe('StudentScheduleService', () => {
  let service: StudentScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
