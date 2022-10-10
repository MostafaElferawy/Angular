import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAddProductComponent } from './reactive-add-product.component';

describe('ReactiveAddProductComponent', () => {
  let component: ReactiveAddProductComponent;
  let fixture: ComponentFixture<ReactiveAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
