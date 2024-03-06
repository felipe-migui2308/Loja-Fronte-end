import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroDecoComponent } from './quadro-deco.component';

describe('QuadroDecoComponent', () => {
  let component: QuadroDecoComponent;
  let fixture: ComponentFixture<QuadroDecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuadroDecoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuadroDecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
