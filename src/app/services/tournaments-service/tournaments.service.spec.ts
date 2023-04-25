/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TournamentsService } from './tournaments.service';

describe('Service: Tournaments', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TournamentsService]
    });
  });

  it('should ...', inject([TournamentsService], (service: TournamentsService) => {
    expect(service).toBeTruthy();
  }));
});
