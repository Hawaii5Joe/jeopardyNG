import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { JeopardyService} from './jeopardy.service'
import { FormsModule } from '@angular/forms';
import { AnswerfieldComponent } from './answerfield/answerfield.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerfieldComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    JeopardyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
