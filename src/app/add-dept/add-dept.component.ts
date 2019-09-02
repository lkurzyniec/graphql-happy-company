import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIService } from "../API.service";
import { orderBy } from "lodash";

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.scss']
})
export class AddDeptComponent implements OnInit {
  form: FormGroup;
  employees: any = [];
  newDeptId: string;

  constructor(private fb: FormBuilder, private api: APIService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      managerId: ['', Validators.required],
    });
  }

  async ngOnInit() {
    const result = await this.api.ListEmployees();
    this.employees = orderBy(result.items, ['fullName'], ['asc']);
  }

  managerChanged(e){
    this.form.get('managerId').setValue(e.target.value, {
      onlySelf: true
   })
  }

  async addDepartment() {
    const result = await this.api.CreateDepartment({
      name: this.form.get('name').value,
      departmentManagerId: this.form.get('managerId').value,
    });

    this.newDeptId = result.id;
    this.form.reset();
  }

}
