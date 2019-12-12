import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingService } from './training.service';
import { TrainingConfirmComponent } from './../modals/training-confirm/training-confirm.component';
import { MatDialog } from '@angular/material/dialog';

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
  selectedTab = 0;
  currrentExcercise;
  constructor(private trainingService: TrainingService, private dialog: MatDialog) { }
  

  ngOnInit() {
    // 
    this.excerciseSub = this.trainingService.currentExcercise.subscribe(excercise =>{
      this.excerciseActive = (excercise != '') ? true: false;
      this.currrentExcercise = excercise;
      // console.log(excercise)
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
    clearInterval(this.timer);
    // add data to components modal
    const dialogRef = this.dialog.open(TrainingConfirmComponent, {
      data: { name:  this.currrentExcercise.name},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedTab = 1;
      this.excerciseActive = !this.excerciseActive;      
      this.trainingService.addExcercise({...this.currrentExcercise, completed: this.value});
      this.value = 0;
    });
  }

  ngOnDestroy(){
    this.excerciseSub.unsubscribe()
  }

}
