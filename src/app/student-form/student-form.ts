import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.html',   // <- matches your file name
  styleUrls: ['./student-form.css']     // optional: update if CSS filename differs
})
export class StudentForm {
  student = { name: '', email: '', age: null };

  onSubmit(f: any) {
    if (f.valid) {
      console.log('Submitted:', this.student);
      f.resetForm();
    }
  }
}
