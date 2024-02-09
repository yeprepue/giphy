import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======
import { RouterTestingModule } from '@angular/router/testing';
>>>>>>> b215c8def2cb6bd350d855d95db1ff9273beaed1
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
<<<<<<< HEAD
=======
    imports: [RouterTestingModule],
>>>>>>> b215c8def2cb6bd350d855d95db1ff9273beaed1
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'bases'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bases');
=======
  it(`should have as title 'giphy'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('giphy');
>>>>>>> b215c8def2cb6bd350d855d95db1ff9273beaed1
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span')?.textContent).toContain('bases app is running!');
=======
    expect(compiled.querySelector('.content span')?.textContent).toContain('giphy app is running!');
>>>>>>> b215c8def2cb6bd350d855d95db1ff9273beaed1
  });
});
