import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hangman-letter',
  templateUrl: './hangman-letter.component.html',
  styleUrls: ['./hangman-letter.component.scss']
})
export class HangmanLetterComponent implements OnInit {
  @Input() letterHidden = true;
  @Input() gameOver = false;
  @Input() letter: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}
