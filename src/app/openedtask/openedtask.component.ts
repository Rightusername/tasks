import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-openedtask',
  templateUrl: './openedtask.component.html',
  styleUrls: ['./openedtask.component.css']
})
export class OpenedtaskComponent implements OnInit {

  task;
  comment;

  constructor(private tasksService: TasksService, private router: Router ) { }

  ngOnInit() {
    this.task = this.tasksService.getTaskById(this.router.url.substr(1));
    console.log(this.task.name);
  }

  sendComment() {
    this.tasksService.addComment(this.task.id, {
      text: this.comment,
      avatar: false,
      username: 'Gap'
    });
    this.comment = '';
    setTimeout(() => {
      document.getElementById('comments').scrollTo(0, document.getElementById('comments').scrollHeight);
    }, 50);
  }

}
