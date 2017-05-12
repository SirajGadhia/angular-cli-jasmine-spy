import {SpyObject} from '../../testing/mock-helper';
import {AppService} from './app.service';

import Spy = jasmine.Spy;
import {Observable} from 'rxjs/Observable';

export class MockAppService extends SpyObject {
    getDataSpy: Spy;

    fakeResponse: any;
    err: any;

    /* istanbul ignore next */
    constructor() {
        super(AppService);

        this.fakeResponse = null;
        this.err = false;

        this.getDataSpy = this.spy('getData').andReturn(this);
    }

    /* istanbul ignore next */
    subscribe(callback: any, err: any) {
        if (this.err) {
            err();
        } else {
            callback(this.fakeResponse);
        }
    }
    /* istanbul ignore next */
    setResponse(json: any, err: boolean): void {
        this.fakeResponse = json;
        this.err = err;
    }

}
