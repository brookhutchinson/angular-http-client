// components
import { Component, OnInit }  from '@angular/core';

// services
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // make http GET request and then return response as an observable
    this.http.get("https://api.github.com/users/brookhutchinson")
      // subscribe to observable
      .subscribe(
        // store http response inside "data" property
        data => {
          console.log('http GET response');
          console.log(data);
        }
      );
  }
}