import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {ReflectiveInjector} from '@angular/core/';
import {provide} from '@angular/core/';
import {BaseRequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

@Injectable()
export class LoadShaderAsync {
  constructor(private http: Http) {

 var http: Http = this.getInjector().get(Http);
 //http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));


  }

  getInjector() {

    return ReflectiveInjector.resolveAndCreate([
      BaseRequestOptions,
      MockBackend,
      provide(Http, {
        useFactory:
        function(backend: any, defaultOptions: any) {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      })
    ]);
    //  let lsa = new LoadShaderAsync(new Http('/app/gl/sl/vs-simple.glsl'));
  }

  getShader(url: string): Observable<string> {
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    return response.text();
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
