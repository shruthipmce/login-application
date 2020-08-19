import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ColumnMode = ColumnMode;

  rows = [
    {
      "name": "Pooja",
      "subject": "English",
      "email": "pooja@gmail.com",
      "dob": "22/11/1994",
      "section": "A",
      "gender": "female"
    },
    {
      "name": "Jyothi",
      "subject":"Hindi",
      "email": "jyothi@gmail.com",
      "dob": "13/02/2000",
      "section": "A",
      "gender": "female"
    },
    {
      "name": "Hema",
      "subject": "English",
      "email": "hema@gmail.com",
      "dob": "02/01/1992",
      "section": "C",
      "gender": "female"
    },
    {
      "name": "Archana",
      "subject": "English",
      "email": "archana@gmail.com",
      "dob": "10/09/2004",
      "section": "A",
      "gender": "female"
    }
  ];
}
