// components
import { Component, OnInit }             from '@angular/core';

// models
import { UserResponse }                  from './models/user-response.model';

// services
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // make http GET request and then return response as an observable of type UserResponse
    this.http.get<UserResponse>("https://api.github.com/users/brookhutchinson")
      // subscribe to observable
      .subscribe(
        // success
        data => {
          console.log('http GET response');
          console.log('SUCCESS');
          console.log('login:' + ' ' + data.login);
          console.log('name:' + ' ' + data.name);
          console.log('location:' + ' ' + data.location);
        },
        // error
        (error: HttpErrorResponse) => {
          if (error.error instanceof Error) {
            // client-side error
            console.log('client-side error occured');
          } else {
            // server-side error
            console.log('server-side error occured');
          }
        }
      );
  }
}