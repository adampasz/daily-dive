import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provide } from '@angular/core';
import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { GLComponent } from './gl.component';
// import {enableProdMode} from '@angular/core';

// enableProdMode();
let debug = true;
if (debug) {
  bootstrap (GLComponent);
} else {
bootstrap(AppComponent, [HTTP_PROVIDERS, provide(XHRBackend, {
    useClass: InMemoryBackendService
  }),
  provide(SEED_DATA, {
    useClass: InMemoryDataService
  })
]);
}
