import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-letter-button',
  templateUrl: './letter-button.component.html',
  styleUrls: ['./letter-button.component.scss']
})
export class LetterButtonComponent implements OnInit {
  @Input() letter: string;
  @Input() letterSuccess = false;
  @Input() letterFail = false;
  @Input() disabled = false;
  @Output() letterClicked = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
