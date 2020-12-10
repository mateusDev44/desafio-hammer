import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalGastoComidaComponent } from './total-gasto-comida.component';

describe('TotalGastoComidaComponent', () => {
  let component: TotalGastoComidaComponent;
  let fixture: ComponentFixture<TotalGastoComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalGastoComidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalGastoComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
