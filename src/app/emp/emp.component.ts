import { Component, OnInit } from '@angular/core';
import { APIService } from "../API.service";
import { orderBy } from "lodash";

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {
  employees: any = [];

  constructor(private api: APIService) { }

  async ngOnInit() {
    this.getData();
  }

  async getData(){
    const result = await this.api.ListEmployees();
    this.employees = orderBy(result.items, ['fullName'], ['asc']);
  }

  async remove(id){
    await this.api.DeleteEmployee({
      id
    });
    await this.getData();
  }
}
