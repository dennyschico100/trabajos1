import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTrabajosComponent } from './listar-trabajos.component';

describe('ListarTrabajosComponent', () => {
  let component: ListarTrabajosComponent;
  let fixture: ComponentFixture<ListarTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
