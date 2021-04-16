import {Component, OnInit} from '@angular/core';
import {GetWordService} from './services/get-word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  splitWord: string[];
  wrongLettersEntered: string[] = [];
  foundLetters: string[] = [];
  gameStatus: 'win' | 'lose' | 'ongoing' = 'ongoing';

  readonly ALLOWED_LETTER_CHOICES = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  readonly ALLOWED_WRONG_GUESSES = 6;

  constructor(
    // tslint:disable-next-line:variable-name
    private _getWordService: GetWordService
  ) {
  }

  get isGameOver() {
    // console.log(this.gameStatus === 'win' || this.gameStatus === 'lose');
    return this.gameStatus === 'win' || this.gameStatus === 'lose';
  }

  get chancesRemainingMessage() {
    const chancesLeft = this.ALLOWED_WRONG_GUESSES - this.chancesUsed;
    return `You have ${chancesLeft} ${chancesLeft === 1 ? 'chance' : 'chances'} to find the word!`;
  }

  get chancesUsed() {
    return this.wrongLettersEntered.length;
  }

  ngOnInit() {
    this.initializeGame();
  }

  initializeGame() {
    this.splitWord = this.fetchWord().toUpperCase().split('');
    this.wrongLettersEntered = [];
    this.foundLetters = [];
    this.gameStatus = 'ongoing';
  }

  fetchWord() {
    return this._getWordService.getNextFruit();
  }

  onUserLetterSelect(character: string) {
    if (this._isLetterPresentInWord(character)) {
      // The letter that the player selected exists in the hangman word
      // Add the found letter to the found letters array and check if they have won the game
      this.foundLetters.push(character);
      if (this._areAllEmptySpacesFound()) {
        this.gameWon();
      }
    } else {
      // The letter that the player selected is not a correct choice
      // Add the letter they selected to list of wrong letters entered
      this.wrongLettersEntered.push(character);
      if (this.wrongLettersEntered.length >= this.ALLOWED_WRONG_GUESSES) {
        this.gameLost();
      }
    }
  }

  gameWon() {
    this.gameStatus = 'win';
  }

  gameLost() {
    this.gameStatus = 'lose';
  }

  letterHasBeenFoundByUser(letter: string) {
    return this.foundLetters.includes(letter);
  }

  isLetterNotPartOfWord(letter: string) {
    return this.wrongLettersEntered.includes(letter);
  }

  private _areAllEmptySpacesFound(): boolean {
    let cloneOfSplitWord = [...this.splitWord];
    this.foundLetters.forEach(letter => {
      cloneOfSplitWord = cloneOfSplitWord.filter(splitLetter => splitLetter !== letter);
    });
    return cloneOfSplitWord.length === 0;
  }

  private _isLetterPresentInWord(letter: string): boolean {
    return this.splitWord.some(letterFromWord => letter === letterFromWord);
  }
}
