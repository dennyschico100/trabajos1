import { TestBed } from '@angular/core/testing';

import { OfertaEmpleoService } from './oferta-empleo.service';

describe('OfertaEmpleoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertaEmpleoService = TestBed.get(OfertaEmpleoService);
    expect(service).toBeTruthy();
  });
});
