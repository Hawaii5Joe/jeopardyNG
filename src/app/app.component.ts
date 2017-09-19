import { Component, OnInit } from '@angular/core';
import { JeopardyService} from './jeopardy.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

// variables used to make page work
questionInfo;


constructor(private jeopardyService: JeopardyService){}

getDataFromService(){
  this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
          console.log(this.questionInfo);
        }
      )
    }

ngOnInit(){
  this.getDataFromService()
  }



}