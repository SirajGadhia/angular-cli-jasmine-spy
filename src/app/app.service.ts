import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class AppService {

  constructor(public http: Http) { }

    getData(): Observable<any[]> {
        return Observable.create(
            (observer: Observer<any[]>) => {
                observer.next([{'test': 'value'}]);
                observer.complete();
            }
        );
    }
}
