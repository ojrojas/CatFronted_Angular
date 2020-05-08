import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreategatoComponent } from './creategato.component';

describe('CreategatoComponent', () => {
  let component: CreategatoComponent;
  let fixture: ComponentFixture<CreategatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreategatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreategatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
