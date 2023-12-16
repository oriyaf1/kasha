import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' 0.34 קש"א';
  sixDigitInputX?: number = 0;
  sixDigitInputY?: number = 0;
  sixDigitInputShow: boolean = false;

  sixDigitInputXNamam1?:number
  sixDigitInputYNamam1?:number
  sixDigitInputXNamam2?:number
  sixDigitInputYNamam2?:number
  namam1Azimuth?:number
  namam2Azimuth?:number
  
  realAzimuth?: number = 0;
  viewerAzimuth?: number = 0;
  calibrateNorthShow: boolean = false;
  
  angle?: number = -1;
  distance?: number = 1000;
  angleDistanceShow: boolean = false;
  
  targetX?: number;
  targetY?: number;

  NZmanualButton:boolean= true;
  NZcalcByNamamButton:boolean = false; 

  calcTaget() {
    
    let azimuth = this.realAzimuth! - this.viewerAzimuth! + this.angle!
    let azimuthDeg = (azimuth / 6400) * 360;
    let azimuthRad = azimuthDeg * 2 * Math.PI / 360;
    this.targetX = Math.round(  this.sixDigitInputX! + ( (this.distance! * (Math.sin(azimuthRad)) )) );
    this.targetY = Math.round(  this.sixDigitInputY! + ( (this.distance! * (Math.cos(azimuthRad)) )));
  }

}
