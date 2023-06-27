import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angularAnimationSection1';

  courseGoal = [
    { title: 'Master Angular Styling', isActive: true },
    { title: 'Understand Angular Animations', isActive: false },
    { title: 'Master Angular Animations', isActive: false },
  ];
}
