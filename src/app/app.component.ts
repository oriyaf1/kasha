import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'קש"א';
  sixDigitInputX?: number = 670773;
  sixDigitInputY?: number = 733000;
  sixDigitInputShow: boolean = false;
  
  realAzimuth?: number = 0;
  viewerAzimuth?: number = 0;
  calibrateNorthShow: boolean = false;
  
  angle?: number = -1;
  distance?: number = 224;
  angleDistanceShow: boolean = false;
  
  targetX?: number;
  targetY?: number;

  calcTaget() {

    let azimuth = this.realAzimuth! - this.viewerAzimuth! + this.angle!
    azimuth = azimuth * (180 / Math.PI)
    this.targetX = this.sixDigitInputX! + ( (this.distance! * (Math.cos(azimuth)) ));
    this.targetY = this.sixDigitInputY! + ( (this.distance! * (Math.sin(azimuth)) ));
  }

}
