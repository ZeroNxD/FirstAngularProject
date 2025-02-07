import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingPageComponent } from './counting-page.component';

describe('CountingPageComponent', () => {
  let component: CountingPageComponent;
  let fixture: ComponentFixture<CountingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
