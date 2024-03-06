import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaSinucaComponent } from './mesa-sinuca.component';

describe('MesaSinucaComponent', () => {
  let component: MesaSinucaComponent;
  let fixture: ComponentFixture<MesaSinucaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesaSinucaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesaSinucaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
