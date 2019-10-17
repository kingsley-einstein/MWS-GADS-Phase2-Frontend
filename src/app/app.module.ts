import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { UserEffects, FavoriteEffects, LoadingEffects } from '../management/effects';
import { appReducer } from '../management/reducers';

import { MaterialModule, RoutingModule, FormModule } from '../modules';

import { HttpService } from '../services';

import { HttpInterceptorProvider } from '../providers';

import { SnackBarUtil, Encryption } from '../utils';

import { MainComponent, LoginComponent, RegistrationComponent, HomeComponent } from '../components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    HttpClientModule,
    FormModule,
    EffectsModule.forRoot([UserEffects, FavoriteEffects, LoadingEffects]),
    StoreModule.forRoot(appReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    SnackBarUtil,
    HttpService,
    Encryption,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorProvider,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
