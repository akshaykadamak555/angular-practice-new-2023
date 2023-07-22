import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingContainerComponent } from './routing-container.component';

describe('RoutingContainerComponent', () => {
  let component: RoutingContainerComponent;
  let fixture: ComponentFixture<RoutingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
