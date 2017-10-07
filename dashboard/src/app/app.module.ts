import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PlotlyComponent} from './plotly/plotly.component';
import {DomainComponent} from './domain/domain.component';
import {RouterModule} from "@angular/router";
import {DomainService} from "./providers/domain.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
      PlotlyComponent,
      DomainComponent
  ],
  imports: [
    BrowserModule,
      HttpModule,
      RouterModule.forRoot([
              {
                  path: '',
                  redirectTo: 'domain',
                  pathMatch: 'full'
              },
              {
                  path: 'domain',
                  component: DomainComponent,
              }
          ],
          {useHash: false})
  ],
  providers: [
      DomainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
