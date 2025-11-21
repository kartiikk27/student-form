import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { StudentForm } from './student-form/student-form'; // path to student-form.ts

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StudentForm],
  templateUrl: './app.html'
})
export class App { }
