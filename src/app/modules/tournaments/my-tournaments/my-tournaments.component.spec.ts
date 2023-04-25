import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTournamentsComponent } from './my-tournaments.component';

describe('MyTournamentsComponent', () => {
  let component: MyTournamentsComponent;
  let fixture: ComponentFixture<MyTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTournamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
