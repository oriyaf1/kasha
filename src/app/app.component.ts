import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = ' 0.36 קש"א';
  sixDigitInputX?: number = 736235;
  sixDigitInputY?: number = 669715;
  sixDigitInputShow: boolean = false;

  sixDigitInputXNamam1?: number = 726411;
  sixDigitInputYNamam1?: number = 661108;
  sixDigitInputXNamam2?: number = 726525;
  sixDigitInputYNamam2?: number = 660984;
  namam1Azimuth?: number = 345.68 * 6400 / 360
  namam2Azimuth?: number = 117.17 * 6400 / 360

  realAzimuth?: number = 0;
  viewerAzimuth?: number = 0;
  calibrateNorthShow: boolean = false;

  angle?: number = -1;
  distance?: number = 1000;
  angleDistanceShow: boolean = false;

  targetX?: number;
  targetY?: number;

  NZmanualButton: boolean = true;
  NZcalcByNamamButton: boolean = false;

  calcNorthByTargetShow: boolean = false;

  calcTaget() {

    let azimuth = this.realAzimuth! - this.viewerAzimuth! + this.angle!
    let azimuthDeg = (azimuth / 6400) * 360;
    let azimuthRad = azimuthDeg * 2 * Math.PI / 360;
    this.targetX = Math.round(this.sixDigitInputX! + ((this.distance! * (Math.sin(azimuthRad)))));
    this.targetY = Math.round(this.sixDigitInputY! + ((this.distance! * (Math.cos(azimuthRad)))));
  }

  calcByNamams() {

    let namam1AzimuthRad = this.alpToRad(this.namam1Azimuth!)
    let namam2AzimuthRad = this.alpToRad(this.namam2Azimuth!)

    let cord = this.getSelfCordByNamams(this.sixDigitInputXNamam1!, this.sixDigitInputYNamam1!, namam1AzimuthRad, this.sixDigitInputXNamam2!, this.sixDigitInputYNamam2!, namam2AzimuthRad)

    this.sixDigitInputX = cord[0]
    this.sixDigitInputY = cord[1]
  }
  alpToRad(alp: any) {
    return ((alp / 6400) * 360) * 2 * Math.PI / 360
  }
  getSelfCordByNamams(x1: any, y1: any, a1: any, x2: any, y2: any, a2: any) {
    console.log(x1, y1, a1, x2, y2, a2)
    let y = (x1 - Math.tan(a1) * y1 + Math.tan(a2) * y2 - x2) / (Math.tan(a2) - Math.tan(a1))
    let x = x1 + Math.tan(a1) * (y - y1)
    return [Math.round(x), Math.round(y)]
  }



}
