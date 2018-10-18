import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtByDomComponent } from './art-by-dom.component';

describe('ArtByDomComponent', () => {
  let component: ArtByDomComponent;
  let fixture: ComponentFixture<ArtByDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtByDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtByDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
