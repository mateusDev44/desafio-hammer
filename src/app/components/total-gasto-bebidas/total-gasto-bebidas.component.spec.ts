import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalGastoBebidasComponent } from './total-gasto-bebidas.component';

describe('TotalGastoBebidasComponent', () => {
  let component: TotalGastoBebidasComponent;
  let fixture: ComponentFixture<TotalGastoBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalGastoBebidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalGastoBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
