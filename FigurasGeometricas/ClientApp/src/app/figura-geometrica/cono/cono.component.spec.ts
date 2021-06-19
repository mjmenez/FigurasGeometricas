import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConoComponent } from './cono.component';

describe('ConoComponent', () => {
  let component: ConoComponent;
  let fixture: ComponentFixture<ConoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
