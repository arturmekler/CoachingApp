import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { GoalComponent } from './goal/goal.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
    { path: 'chart', component: ChartComponent },
    { path: 'goal', component: GoalComponent },
    { path: 'info', component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
