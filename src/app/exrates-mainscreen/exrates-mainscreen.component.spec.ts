import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExratesMainscreenComponent } from './exrates-mainscreen.component';

describe('ExratesMainscreenComponent', () => {
  let component: ExratesMainscreenComponent;
  let fixture: ComponentFixture<ExratesMainscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExratesMainscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExratesMainscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
