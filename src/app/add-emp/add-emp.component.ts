import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { APIService } from "../API.service";
import { orderBy } from "lodash";

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {
  form: FormGroup;
  departments: any = [];
  newEmpId: string;

  constructor(private fb: FormBuilder, private api: APIService) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      departmentId: ['', Validators.required],
    });
  }

  async ngOnInit() {
    const result = await this.api.ListDepartments();
    this.departments = orderBy(result.items, ['name'], ['asc']);
  }

  departmentChanged(e) {
    this.form.get('departmentId').setValue(e.target.value, {
      onlySelf: true
    })
  }

  async addEmployee() {
    const result = await this.api.CreateEmployee({
      fullName: this.form.get('fullName').value,
      employeeDepartmentId: this.form.get('departmentId').value,
    });

    this.newEmpId = result.id;
    this.form.reset();
  }
}
