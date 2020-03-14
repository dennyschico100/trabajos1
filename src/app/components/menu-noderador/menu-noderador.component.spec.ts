import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNoderadorComponent } from './menu-noderador.component';

describe('MenuNoderadorComponent', () => {
  let component: MenuNoderadorComponent;
  let fixture: ComponentFixture<MenuNoderadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNoderadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNoderadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
