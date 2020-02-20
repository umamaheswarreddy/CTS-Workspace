import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecroinicsComponent } from './elecroinics.component';

describe('ElecroinicsComponent', () => {
  let component: ElecroinicsComponent;
  let fixture: ComponentFixture<ElecroinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecroinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecroinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
