import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provide } from '@angular/core';
import { GLComponent } from './gl.component';

// import {enableProdMode} from '@angular/core';

// enableProdMode();
  bootstrap (GLComponent, [HTTP_PROVIDERS]);
