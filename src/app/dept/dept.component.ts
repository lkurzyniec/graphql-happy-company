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
    this.getData();

    this.api.OnCreateDepartmentListener.subscribe(
      added => this.departments.push(added.value.data.onCreateDepartment)
    );
    this.api.OnDeleteDepartmentListener.subscribe(
      deleted => this.departments = this.departments.filter(item => item.id !== deleted.value.data.onDeleteDepartment.id)
    );
  }

  async getData(){
    const result = await this.api.ListDepartments();
    this.departments = orderBy(result.items, ['name'], ['asc']);
  }

  async remove(id){
    await this.api.DeleteDepartment({
      id
    });
  }
}
