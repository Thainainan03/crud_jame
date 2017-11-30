import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AccountService {
  apiUrl = "http://localhost:3100/";
  constructor(private http : Http) { }

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  addAccount(data) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiUrl +'AddAccount', JSON.stringify(data), options)
      .map(res => res.json());
  }

  UpdateAccount(data) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.apiUrl + 'UpdateAccount', JSON.stringify(data), options)
      .map(res => res.json());
  }

  /*DeleteAccount(id) {
    console.log(id)
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers});

    return this.http.get(this.apiUrl + 'DeleteAccount/'+id,  )
      .map(success => success.status)
  }*/

  DeleteAccount(data) {
    let headers = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiUrl + 'DeleteAccount', JSON.stringify(data), options)
      .map(res => res.json());
  }

}
