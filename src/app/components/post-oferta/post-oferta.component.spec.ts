import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOfertaComponent } from './post-oferta.component';

describe('PostOfertaComponent', () => {
  let component: PostOfertaComponent;
  let fixture: ComponentFixture<PostOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
