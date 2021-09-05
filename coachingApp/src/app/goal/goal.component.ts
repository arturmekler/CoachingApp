import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GoalService } from './goal-service.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  
  goalForm = new FormGroup({
    description: new FormControl(''),
    endDate: new FormControl(''),
    mileStones: new FormControl('')
  })

  constructor(private goalService:  GoalService) { }

  public save(){
    this.goalService.saveGoal(this.goalForm.value)
  }
  ngOnInit() {
    

  }

}
