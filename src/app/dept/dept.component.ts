import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { APIService } from "../API.service";
import { orderBy } from "lodash";

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.scss']
})
export class DeptComponent implements OnInit, OnDestroy {
  departments: any = [];
  onCreateDepartmentSubscription: any = null;
  onDeleteDepartmentSubscription: any = null;

  constructor(private api: APIService) { }

  async ngOnInit() {
    this.getData();

    this.onCreateDepartmentSubscription = this.api.OnCreateDepartmentListener.subscribe(
      added => this.departments.push(added.value.data.onCreateDepartment)
    );
    this.onDeleteDepartmentSubscription = this.api.OnDeleteDepartmentListener.subscribe(
      deleted => this.departments = this.departments.filter(item => item.id !== deleted.value.data.onDeleteDepartment.id)
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.onCreateDepartmentSubscription.unsubscribe();
    this.onDeleteDepartmentSubscription.unsubscribe();
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
