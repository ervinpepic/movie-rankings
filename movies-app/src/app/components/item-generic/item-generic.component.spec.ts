import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGenericComponent } from './item-generic.component';

describe('ItemGenericComponent', () => {
  let component: ItemGenericComponent;
  let fixture: ComponentFixture<ItemGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemGenericComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
