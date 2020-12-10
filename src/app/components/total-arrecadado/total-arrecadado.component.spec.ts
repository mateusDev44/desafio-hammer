import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalArrecadadoComponent } from './total-arrecadado.component';

describe('TotalArrecadadoComponent', () => {
  let component: TotalArrecadadoComponent;
  let fixture: ComponentFixture<TotalArrecadadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalArrecadadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalArrecadadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
