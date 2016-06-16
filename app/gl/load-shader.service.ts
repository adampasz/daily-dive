import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { HTTP_PROVIDERS } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoadShaderService {
  constructor(private http: Http) {

  }

  getShader(url: string): Observable<Response> {
    return this.http.get(url).map(this.extractData);
  }

  private extractData(res: Response) {
    console.log('extract data');
    debugger;
    return res;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
