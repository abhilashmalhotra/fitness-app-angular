import { TrainingService } from './../training.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  excercises = [];
  constructor(private traingService: TrainingService) { }

  ngOnInit() {
    this.excercises = this.traingService.getAvailableExcercise();
  }
  startExcercise(form: NgForm) {
    this.traingService.getStartedExcercise(form.value.excercise);
  }
}
