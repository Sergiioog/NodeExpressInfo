import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpresspagComponent } from './expresspag.component';

describe('ExpresspagComponent', () => {
  let component: ExpresspagComponent;
  let fixture: ComponentFixture<ExpresspagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpresspagComponent]
    });
    fixture = TestBed.createComponent(ExpresspagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
