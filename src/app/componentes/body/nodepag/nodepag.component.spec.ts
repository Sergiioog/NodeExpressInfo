import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodepagComponent } from './nodepag.component';

describe('NodepagComponent', () => {
  let component: NodepagComponent;
  let fixture: ComponentFixture<NodepagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodepagComponent]
    });
    fixture = TestBed.createComponent(NodepagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
