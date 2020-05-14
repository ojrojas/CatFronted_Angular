import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminargatoComponent } from './eliminargato.component';

describe('EliminargatoComponent', () => {
  let component: EliminargatoComponent;
  let fixture: ComponentFixture<EliminargatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminargatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminargatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
