import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTournamentsComponent } from './current-tournaments.component';

describe('CurrentTournamentsComponent', () => {
  let component: CurrentTournamentsComponent;
  let fixture: ComponentFixture<CurrentTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTournamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
