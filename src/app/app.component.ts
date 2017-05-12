import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  dataResponse = [];

  constructor(public appService: AppService) {}
  ngOnInit() {
          this.appService.getData()
              .subscribe((response) => {
                  this.dataResponse = response;
              });
  }
}
