import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './components/home/home.component';
import { MapToolsComponent } from './components/map-tools/map-tools.component';
import { PurposeComponent } from './components/purpose/purpose.component';
import { ProfessionalLiteratureComponent } from './components/professional-literature/professional-literature.component';
import { ShotCorrectionComponent } from './components/shot-correction/shot-correction.component';
import {CdkMenuModule} from '@angular/cdk/menu';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapToolsComponent,
    PurposeComponent,
    ProfessionalLiteratureComponent,
    ShotCorrectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CdkMenuModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
