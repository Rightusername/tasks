import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.css']
})
export class TaskslistComponent implements OnInit {


  constructor( private tasksService: TasksService ) { }

  taskName;

  addTask() {
    this.tasksService.add(this.taskName);
    this.taskName = '';
  }

  ngOnInit() {
  }

}
