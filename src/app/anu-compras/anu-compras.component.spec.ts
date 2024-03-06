import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuComprasComponent } from './anu-compras.component';

describe('AnuComprasComponent', () => {
  let component: AnuComprasComponent;
  let fixture: ComponentFixture<AnuComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnuComprasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnuComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
