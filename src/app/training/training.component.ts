import { TrainingService } from './training.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  color = 'primary';
  mode = 'determinate';
  value = 0;
  timer;
  excerciseActive;
  excerciseSub: Subscription;
  currrentExcercise;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    // 
    this.excerciseSub = this.trainingService.currentExcercise.subscribe(excercise =>{
      this.excerciseActive = (excercise != '') ? true: false;
      this.currrentExcercise = excercise;
      console.log(excercise)
      this.startOrResumeTraining();
    })
  }

  startOrResumeTraining() {
    const step = this.trainingService.getRunningExcercise().duration / 100 * 100;
    this.timer = setInterval(() => {
      this.value += 1;
      if (this.value >= 100) {
        clearInterval(this.timer);
      }
    }, step);
  }


  stopExcercise() {
    clearInterval(this.timer)
  }

  ngOnDestroy(){
    this.excerciseSub.unsubscribe()
  }

}
