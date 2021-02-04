import { TestBed } from '@angular/core/testing';

import { ProduitServicesService } from './produit-services.service';

describe('ProduitServicesService', () => {
  let service: ProduitServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
