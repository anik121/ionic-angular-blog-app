import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = 'Undefined Title';
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {}

  onClick() {
    console.log('nice men');
  }
}
