import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExratesListComponent } from './exrates-list.component';

describe('ExratesListComponent', () => {
  let component: ExratesListComponent;
  let fixture: ComponentFixture<ExratesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExratesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExratesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
