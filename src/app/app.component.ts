import { Component } from '@angular/core';
import { UtilsService } from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public _utilsService: UtilsService) { }
  title = ' 0.41 קש"א';
  _sixDigitInputX?: number = parseInt(window.localStorage.getItem('sixDigitInputX') ?? '0');
  _sixDigitInputY?: number = parseInt(window.localStorage.getItem('sixDigitInputY') ?? '0');

  public get sixDigitInputX(): number {
    return this._sixDigitInputX!
  }

  public set sixDigitInputX(v: number) {
    this._sixDigitInputX = v;
    window.localStorage.setItem('sixDigitInputX', v.toString())
  }

  public get sixDigitInputY(): number {
    return this._sixDigitInputY!
  }

  public set sixDigitInputY(v: number) {
    window.localStorage.setItem('sixDigitInputY', v.toString())
    this._sixDigitInputY = v;
  }


  sixDigitInputShow: boolean = false;

  calaNorthFromTargetX?: number;
  calaNorthFromTargetY?: number;
  calaNorthFromTargetRes?: number;

  sixDigitInputXNamam1?: number;
  sixDigitInputYNamam1?: number;
  sixDigitInputXNamam2?: number;
  sixDigitInputYNamam2?: number;
  namam1Azimuth?: number;
  namam2Azimuth?: number;

  _realAzimuth?: number = parseInt(window.localStorage.getItem('realAzimuth') ?? '0');
  _viewerAzimuth?: number = parseInt(window.localStorage.getItem('viewerAzimuth') ?? '0');
  public get realAzimuth(): number {
    return this._realAzimuth!
  }

  public set realAzimuth(v: number) {
    this._realAzimuth = v;
    window.localStorage.setItem('realAzimuth', v.toString())
  }

  public get viewerAzimuth(): number {
    return this._viewerAzimuth!
  }

  public set viewerAzimuth(v: number) {
    window.localStorage.setItem('viewerAzimuth', v.toString())
    this._viewerAzimuth = v;
  }


  calibrateNorthShow: boolean = false;

  angle?: number = -1;
  distance?: number = 1000;
  angleDistanceShow: boolean = false;

  targetX?: number;
  targetY?: number;

  NZmanualButton: boolean = true;
  NZcalcByNamamButton: boolean = false;

  calcNorthByTargetShow: boolean = false;
  showMenu: boolean = false;

  calcTaget() {

    let azimuth = this.realAzimuth! - this.viewerAzimuth! + this.angle!
    let azimuthDeg = (azimuth / 6400) * 360;
    let azimuthRad = azimuthDeg * 2 * Math.PI / 360;
    this.targetX = Math.round(this.sixDigitInputX! + ((this.distance! * (Math.sin(azimuthRad)))));
    this.targetY = Math.round(this.sixDigitInputY! + ((this.distance! * (Math.cos(azimuthRad)))));
  }

  calaNorthFromTargetCords() {

    let dx = this.calaNorthFromTargetX! - this.sixDigitInputX!;
    let dy = this.calaNorthFromTargetY! - this.sixDigitInputY!;
    this.calaNorthFromTargetRes = this._utilsService.calaNorthFromTargetCords(dx, dy)
  }

  calcByNamams() {

    let namam1AzimuthRad = this._utilsService.alpToRad(this.namam1Azimuth! + this.realAzimuth! - this.viewerAzimuth!)
    let namam2AzimuthRad = this._utilsService.alpToRad(this.namam2Azimuth! + this.realAzimuth! - this.viewerAzimuth!)

    let cord = this.getSelfCordByNamams(this.sixDigitInputXNamam1!, this.sixDigitInputYNamam1!, namam1AzimuthRad, this.sixDigitInputXNamam2!, this.sixDigitInputYNamam2!, namam2AzimuthRad)

    this.sixDigitInputX = cord[0]
    this.sixDigitInputY = cord[1]
  }

  getSelfCordByNamams(x1: any, y1: any, a1: any, x2: any, y2: any, a2: any) {
    console.log(x1, y1, a1, x2, y2, a2)
    let y = (x1 - Math.tan(a1) * y1 + Math.tan(a2) * y2 - x2) / (Math.tan(a2) - Math.tan(a1))
    let x = x1 + Math.tan(a1) * (y - y1)
    return [Math.round(x), Math.round(y)]
  }



}
