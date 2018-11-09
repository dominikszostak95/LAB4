import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items = [
    {
	  "id" : 1,
	  "image" : "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=350",
      "text" : "Pierwszy"
	},
    {
	  "id" : 2,
	  "image" : "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=350",
      "text" : "Drugi"
	},
    {
	   "id" : 3,
	  "image" : "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=350",
      "text" : "Trzeci"
	},
    {
	  "id" : 4,
	  "image" : "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=350",
      "text" : "Czwarty"
	},
    {
	  "id" : 5,
	  "image" : "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=350",
      "text" : "Piąty"
	},
    {
	  "id" : 6,
	  "image" : "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=350",
      "text" : "Szósty"
	},
    {
	  "id" : 7,
	  "image" : "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=350",
      "text" : "Siódmy"
	},
    {
	  "id" : 8,
	  "image" : "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=350",
      "text" : "Ósmy"
	},
    {
	  "id" : 9,
	  "image" : "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=350",
      "text" : "Dziewiąty "
	},
    {
	  "id" : 10,
	  "image" : "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&h=350",
      "text" : "Dziesiąty"
	}
  ]

  constructor() { }

  ngOnInit() {
  }

}
