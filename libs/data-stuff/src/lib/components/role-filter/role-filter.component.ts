import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ht-role-filter',
  templateUrl: './role-filter.component.html',
  styleUrls: ['./role-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleFilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
