import { TestBed } from '@angular/core/testing';

import { ServiceFuncionarioService } from './service-funcionario.service';

describe('ServiceFuncionarioService', () => {
  let service: ServiceFuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
