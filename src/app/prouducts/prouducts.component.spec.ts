import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductsComponent } from './prouducts.component';

describe('ProuductsComponent', () => {
  let component: ProuductsComponent;
  let fixture: ComponentFixture<ProuductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProuductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
