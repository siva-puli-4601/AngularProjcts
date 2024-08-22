import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard12Component } from './dashboard12.component';

describe('Dashboard12Component', () => {
  let component: Dashboard12Component;
  let fixture: ComponentFixture<Dashboard12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboard12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
