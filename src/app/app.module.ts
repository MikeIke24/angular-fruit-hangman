import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HangmanLetterComponent } from './components/hangman-letter/hangman-letter.component';
import { LetterButtonComponent } from './components/letter-button/letter-button.component';
import { WinMessageComponent } from './components/win-message/win-message.component';
import { LoseMessageComponent } from './components/lose-message/lose-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanLetterComponent,
    LetterButtonComponent,
    WinMessageComponent,
    LoseMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
