import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioUi } from './radio-ui';

describe('RadioUi', () => {
  let component: RadioUi;
  let fixture: ComponentFixture<RadioUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioUi]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RadioUi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
