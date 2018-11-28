import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppfirstComponent } from './appfirst.component';

describe('AppfirstComponent', () => {
  let component: AppfirstComponent;
  let fixture: ComponentFixture<AppfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
