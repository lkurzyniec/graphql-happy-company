import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { APIService } from "../API.service";
import { orderBy } from "lodash";

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit, OnDestroy {
  employees: any = [];
  onCreateEmployeeSubscription: any = null;
  onDeleteEmployeeSubscription: any = null;

  constructor(private api: APIService) { }

  async ngOnInit() {
    this.getData();

    this.onCreateEmployeeSubscription = this.api.OnCreateEmployeeListener.subscribe(
      added => this.employees.push(added.value.data.onCreateEmployee)
    );
    this.onDeleteEmployeeSubscription = this.api.OnDeleteEmployeeListener.subscribe(
      deleted => this.employees = this.employees.filter(item => item.id !== deleted.value.data.onDeleteEmployee.id)
    );
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    this.onCreateEmployeeSubscription.unsubscribe();
    this.onDeleteEmployeeSubscription.unsubscribe();
  }

  async getData(){
    const result = await this.api.ListEmployees();
    this.employees = orderBy(result.items, ['fullName'], ['asc']);
  }

  async remove(id){
    await this.api.DeleteEmployee({
      id
    });
  }
}
