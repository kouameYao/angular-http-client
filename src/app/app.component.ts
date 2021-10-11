import { Component } from "@angular/core";
import { HttpClientService } from "./http-client.service";

//import { toPromise } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor( private httpService : HttpClientService) {}

  get() {
    console.log("GET FROM HTTP-CLIENT-SERVICE");
    this.httpService.doGET()
  }

  post() {
    console.log("POST FROM HTTP-CLIENT-SERVICE");
    this.httpService.doPOST()
  }

  put() {
    console.log("PUT FROM HTTP-CLIENT-SERVICE");
    this.httpService.doPUT()
  }

  delete() {
    console.log("DELETE FROM HTTP-CLIENT-SERVICE");
    this.httpService.doDELETE()
  }

  getAsPromise() {
    console.log("GET AS PROMISE FROM HTTP-CLIENT-SERVICE");
    this.httpService.doGETAsPromise()
  }

  getAsPromiseError() {
    console.log("GET AS PROMISE ERROR FROM HTTP-CLIENT-SERVICE");
    this.httpService.doGETAsPromiseError()
  }

  // To catch an error, we call the get method with wrong resource : apiRoot
  getAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR FROM HTTP-CLIENT-SERVICE");
    this.httpService.doGETAsObservableError()
    
  }

  getWithHeaders() {
    console.log("GET WITH HEADERS FROM HTTP-CLIENT-SERVICE");
    this.httpService.doGETWithHeaders()
  }
 
}