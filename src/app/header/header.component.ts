import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;

  constructor(private httpService: HttpService) {
}

  ngOnInit() {
    this.getLoggedInUser();
  }


getLoggedInUser() {
      this.httpService.getLoggedInUser().subscribe(user => {
        console.log(user);
        this.user = user;
      },
      error => {
        console.log(error);
      });
    }

}
