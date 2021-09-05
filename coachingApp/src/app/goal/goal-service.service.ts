import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { GoalModel } from '../model/goal-model';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

constructor(private httpService: HttpService) {}

  saveGoal(goalForm: any){
    this.httpService.post('dupa',"dupa",goalForm).subscribe(()=>{
      console.log("Poszlo");
    })
  }



}
