import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {MockAppService} from './mock-app.service';
import {AppService} from './app.service';
import {HttpModule} from '@angular/http';


describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let mockAppService: MockAppService;

    beforeEach(async(() => {
        mockAppService = new MockAppService();
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [HttpModule],
            providers: [{provide: AppService, useValue: mockAppService}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'app works!'`, async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app works!');
    }));

    it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('app works!');
    }));

    it('should call getData service and spy on with jasmine', async(() => {
        fixture.detectChanges();
        expect(mockAppService.getDataSpy).toHaveBeenCalled();

    }));
});
