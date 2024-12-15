import { Component } from '@angular/core';  

@Component({
  selector: 'app-oc-angular',
  imports: [],
  templateUrl: './oc-angular.component.html',
  styleUrl: './oc-angular.component.scss'
})
export class OcAngularComponent {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;

  ngOnInit(){
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 5;
  }
} 
