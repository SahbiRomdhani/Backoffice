import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class GenericService {
  headers: HttpHeaders;

  constructor() {
    this.headers = new HttpHeaders();
    this.headers.append("Content-Type", "application/json");
  }

  handleResponse(response: any) {
    console.log("**** response *****");
    console.log("status " + response.status);
    console.log("statusText " + response.statusText);
    console.log("url " + response.url);
    console.log("headers " + JSON.stringify(response.headers));
    console.log("**** response *****");
  }


  handleErrors(error: Response) {
    console.log("**** Error *****");
    console.log("status " + error.status);
    console.log("statusText " + error.statusText);
    console.log("url " + error.url);
    console.log("headers " + JSON.stringify(error.headers));
    console.log(JSON.stringify(error.json()));
    console.log("**** error *****");
    return Observable.throw(error);
  }

}
