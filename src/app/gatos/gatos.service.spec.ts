import { TestBed } from '@angular/core/testing';

import { GatosService } from './gatos.service';

describe('GatosService', () => {
  let service: GatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
