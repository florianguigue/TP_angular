import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeuvresAuteurComponent } from './oeuvres-auteur.component';

describe('OeuvresAuteurComponent', () => {
  let component: OeuvresAuteurComponent;
  let fixture: ComponentFixture<OeuvresAuteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeuvresAuteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeuvresAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
