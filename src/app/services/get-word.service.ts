import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetWordService {
  readonly FRUITS = [
    'apple',
    'banana',
    'pineapple',
    'peach',
    'pear',
    'plum',
    'orange',
    'kiwi',
    'starfruit'
  ];

  constructor() {
  }

  getNextFruit() {
    return this.FRUITS[this.getRandomInt(0, this.FRUITS.length - 1)];
  }

  /**
   *
   * @param min inclusive
   * @param max inclusive
   */
  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
