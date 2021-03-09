import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantViewComponent } from './important-view.component';

describe('ImportantViewComponent', () => {
  let component: ImportantViewComponent;
  let fixture: ComponentFixture<ImportantViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportantViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
