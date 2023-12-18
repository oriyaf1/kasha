import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  alpToRad(alp: any) {
    return ((alp / 6400) * 360) * 2 * Math.PI / 360
  }

  radToAlp(rad: any) {
    return (rad * 6400) / (2 * Math.PI)
  }
  degToAlp(deg: any) {
    return deg * 6400 / 360;
  }
  radToDeg(rad: any) {
    return (rad * 360) / (2 * Math.PI);
  }

  calaNorthFromTargetCords(dx: number, dy: number) {
    if (dy == 0) {
      if (dx == 0)
        return 0;
      return dx > 0 ? 1600 : 4800;
    }
    if (dx >= 0 && dy >= 0)
      return Math.round(this.radToAlp(Math.atan(dx / dy)))
    if (dx >= 0 && dy <= 0)
      return 3200 - Math.round(this.radToAlp(Math.atan((dx * -1) / dy)))
    if (dx <= 0 && dy <= 0)
      return 3200 + Math.round(this.radToAlp(Math.atan((dx * -1) / (-1 * dy))))
    if (dx <= 0 && dy >= 0)
      return 6400 - Math.round(this.radToAlp(Math.atan((dx) / (-1 * dy))))
    return 0;
  }
}
