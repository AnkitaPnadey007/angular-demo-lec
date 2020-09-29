import { Component, OnInit } from '@angular/core';
import { attribute } from './/attribute';
import { from } from 'rxjs';
import { LogInComponent } from '../log-in/log-in.component';



@Component({
  selector: 'app-ragistration',
  templateUrl: './ragistration.component.html',
  styleUrls: ['./ragistration.component.scss']
})
export class RagistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  a : attribute;
 
}
