import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MapToolsComponent } from './components/map-tools/map-tools.component';
import { PurposeComponent } from './components/purpose/purpose.component';
import { ShotCorrectionComponent } from './components/shot-correction/shot-correction.component';
import { ProfessionalLiteratureComponent } from './components/professional-literature/professional-literature.component';

const routes: Routes = [
  { path: 'map-tools', component: MapToolsComponent },
  { path: 'purpose', component: PurposeComponent },
  { path: 'shot-correction', component: ShotCorrectionComponent },
  { path: 'professional-literature', component: ProfessionalLiteratureComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
