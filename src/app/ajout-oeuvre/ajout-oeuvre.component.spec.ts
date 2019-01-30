import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOeuvreComponent } from './ajout-oeuvre.component';

describe('AjoutOeuvreComponent', () => {
  let component: AjoutOeuvreComponent;
  let fixture: ComponentFixture<AjoutOeuvreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutOeuvreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutOeuvreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
