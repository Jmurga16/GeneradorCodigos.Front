import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigosListComponent } from './codigos-list.component';

describe('CodigosListComponent', () => {
  let component: CodigosListComponent;
  let fixture: ComponentFixture<CodigosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
