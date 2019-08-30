import { Component, OnInit } from '@angular/core';
import { APIService } from "../API.service";
import { orderBy } from "lodash";

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.scss']
})
export class DeptComponent implements OnInit {
  departments: any = [];

  constructor(private api: APIService) { }

  async ngOnInit() {
    const result = await this.api.ListDepartments();
    this.departments = orderBy(result.items, ['name'], ['asc']);
  }

}
