import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addNewTransaction(): void {
    this.router.navigate(['addNewTransaction']);
  }

  calculateConfidence(): void {
    this.router.navigate(['calculateConfidence']);
  }
}
