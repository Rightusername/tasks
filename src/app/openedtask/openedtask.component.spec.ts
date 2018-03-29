import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedtaskComponent } from './openedtask.component';

describe('OpenedtaskComponent', () => {
  let component: OpenedtaskComponent;
  let fixture: ComponentFixture<OpenedtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenedtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenedtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
