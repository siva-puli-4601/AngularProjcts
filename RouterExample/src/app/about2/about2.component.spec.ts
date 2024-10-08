import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About2Component } from './about2.component';

describe('About2Component', () => {
  let component: About2Component;
  let fixture: ComponentFixture<About2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(About2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
