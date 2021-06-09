import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {User} from './user';
import TesteMockedService from './teste.mocked.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'teste';
  users: User[];
  columns: string[];
  user: User;

  constructor(
    private appService: AppService,
    private testeMockedService: TesteMockedService
  ) {}

  ngOnInit(): void {
    this.testeMockedService.mirageJsServer();
    this.insertUser();
  }
  
  private insertUser () {
    this.user = {login: 'Mike', id: 4, name: 'Schnee'};
    this.appService.insertUser(this.user).subscribe(res => {
      console.log(res);
    });
    this.getAllUsers();
  }

  private getAllUsers() {
    this.columns = [];
    this.appService.getAllUsers()
      .subscribe((values) => {
        this.users = values;
        console.log(this.users);
      });
  }
  
}

