import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { TrainingService } from '../training.service';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
// import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})

export class PastTrainingComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['name', 'completed', 'calories'];
  dataSource = [];
  excerciseSub: Subscription;
  // @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.dataSource.sort()
    this.excerciseSub = this.trainingService.excerciseUpdated.subscribe(() => {
      this.dataSource = this.trainingService.getCompletedExcercise();
    })
    this.dataSource = this.trainingService.getCompletedExcercise();
  }

  ngOnDestroy() {
    this.excerciseSub.unsubscribe();
  }

}