// @ts-ignore
import Point from '@mapbox/point-geometry';

export function indexTouches(touches: Touch[], points: Point[]) {
  const obj: { [key: string]: any } = {};
  for (let i = 0; i < touches.length; i++) {
    obj[touches[i].identifier] = points[i];
  }
  return obj;
}
