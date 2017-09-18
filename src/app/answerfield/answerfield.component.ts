import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { JeopardyService} from '../jeopardy.service'

@Component({
  selector: 'app-answerfield',
  templateUrl: './answerfield.component.html',
  styleUrls: ['./answerfield.component.css']
})
export class AnswerfieldComponent implements OnInit {

// variables used to make page work
@Input() questionInfo;
@Output() refreshQuestion= new EventEmitter<any>();
userAnswer;
checkUserAnswer;
currentScore =0;

 

constructor(private jeopardyService: JeopardyService){}

  ngOnInit() {
  }

// validate that the input and the answer are the same
checkAnswer(userAnswer){
// checking user answer against db
  this.checkUserAnswer="FALSE!"
  if (this.userAnswer == this.questionInfo.answer){
    this.checkUserAnswer= "CORRECT!"
    this.currentScore+=this.questionInfo.value
    
  }
    
  this.refreshQuestion.emit();
  this.userAnswer=''

  };
  
}
