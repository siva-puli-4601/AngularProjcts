import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoinfoComponent } from './compoinfo.component';

describe('CompoinfoComponent', () => {
  let component: CompoinfoComponent;
  let fixture: ComponentFixture<CompoinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
