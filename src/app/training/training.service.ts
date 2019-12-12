import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class TrainingService {
    currentExcercise = new Subject();
    excerciseUpdated = new Subject();
    private runningExcercise;
    private availableExcercise = [
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 40 },
        { id: 'crunches', name: 'Curunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 30 }
    ];
    private completedExcercise = [];

    getAvailableExcercise() {
        return this.availableExcercise.slice()
    }
    getStartedExcercise(excercise) {
        this.runningExcercise = this.availableExcercise.find(el => el.id == excercise)
        this.currentExcercise.next({ ...this.runningExcercise });
    }

    getRunningExcercise() {
        return { ...this.runningExcercise }
    }

    addExcercise(excercise) {
        this.completedExcercise.unshift(excercise);
        this.excerciseUpdated.next(excercise);
        sessionStorage.setItem('excercise', JSON.stringify(this.completedExcercise));
    }

    getCompletedExcercise() {
        const ssnExcercise = sessionStorage.getItem('excercise');
        if(ssnExcercise && ssnExcercise != null && ssnExcercise != '') {
            this.completedExcercise = JSON.parse(ssnExcercise);
            return this.completedExcercise.slice();
        } 
    }
}