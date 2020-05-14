import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditargatoComponent } from './editargato.component';

describe('EditargatoComponent', () => {
  let component: EditargatoComponent;
  let fixture: ComponentFixture<EditargatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditargatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditargatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
