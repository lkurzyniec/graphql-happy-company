/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateDepartmentInput = {
  id?: string | null;
  name: string;
  departmentManagerId?: string | null;
};

export type UpdateDepartmentInput = {
  id: string;
  name?: string | null;
  departmentManagerId?: string | null;
};

export type DeleteDepartmentInput = {
  id?: string | null;
};

export type CreateEmployeeInput = {
  id?: string | null;
  fullName: string;
  age?: number | null;
  employeeDepartmentId: string;
};

export type UpdateEmployeeInput = {
  id: string;
  fullName?: string | null;
  age?: number | null;
  employeeDepartmentId?: string | null;
};

export type DeleteEmployeeInput = {
  id?: string | null;
};

export type ModelDepartmentFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  and?: Array<ModelDepartmentFilterInput | null> | null;
  or?: Array<ModelDepartmentFilterInput | null> | null;
  not?: ModelDepartmentFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDFilterInput | null;
  fullName?: ModelStringFilterInput | null;
  age?: ModelIntFilterInput | null;
  and?: Array<ModelEmployeeFilterInput | null> | null;
  or?: Array<ModelEmployeeFilterInput | null> | null;
  not?: ModelEmployeeFilterInput | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type CreateDepartmentMutation = {
  __typename: "Department";
  id: string;
  name: string;
  manager: {
    __typename: "Employee";
    id: string;
    fullName: string;
    age: number | null;
    department: {
      __typename: "Department";
      id: string;
      name: string;
    };
  } | null;
  employees: {
    __typename: "ModelEmployeeConnection";
    items: Array<{
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateDepartmentMutation = {
  __typename: "Department";
  id: string;
  name: string;
  manager: {
    __typename: "Employee";
    id: string;
    fullName: string;
    age: number | null;
    department: {
      __typename: "Department";
      id: string;
      name: string;
    };
  } | null;
  employees: {
    __typename: "ModelEmployeeConnection";
    items: Array<{
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteDepartmentMutation = {
  __typename: "Department";
  id: string;
  name: string;
  manager: {
    __typename: "Employee";
    id: string;
    fullName: string;
    age: number | null;
    department: {
      __typename: "Department";
      id: string;
      name: string;
    };
  } | null;
  employees: {
    __typename: "ModelEmployeeConnection";
    items: Array<{
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  fullName: string;
  age: number | null;
  department: {
    __typename: "Department";
    id: string;
    name: string;
    manager: {
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null;
    employees: {
      __typename: "ModelEmployeeConnection";
      nextToken: string | null;
    } | null;
  };
};

export type UpdateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  fullName: string;
  age: number | null;
  department: {
    __typename: "Department";
    id: string;
    name: string;
    manager: {
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null;
    employees: {
      __typename: "ModelEmployeeConnection";
      nextToken: string | null;
    } | null;
  };
};

export type DeleteEmployeeMutation = {
  __typename: "Employee";
  id: string;
  fullName: string;
  age: number | null;
  department: {
    __typename: "Department";
    id: string;
    name: string;
    manager: {
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null;
    employees: {
      __typename: "ModelEmployeeConnection";
      nextToken: string | null;
    } | null;
  };
};

export type GetDepartmentQuery = {
  __typename: "Department";
  id: string;
  name: string;
  manager: {
    __typename: "Employee";
    id: string;
    fullName: string;
    age: number | null;
    department: {
      __typename: "Department";
      id: string;
      name: string;
    };
  } | null;
  employees: {
    __typename: "ModelEmployeeConnection";
    items: Array<{
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListDepartmentsQuery = {
  __typename: "ModelDepartmentConnection";
  items: Array<{
    __typename: "Department";
    id: string;
    name: string;
    manager: {
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null;
    employees: {
      __typename: "ModelEmployeeConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetEmployeeQuery = {
  __typename: "Employee";
  id: string;
  fullName: string;
  age: number | null;
  department: {
    __typename: "Department";
    id: string;
    name: string;
    manager: {
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null;
    employees: {
      __typename: "ModelEmployeeConnection";
      nextToken: string | null;
    } | null;
  };
};

export type ListEmployeesQuery = {
  __typename: "ModelEmployeeConnection";
  items: Array<{
    __typename: "Employee";
    id: string;
    fullName: string;
    age: number | null;
    department: {
      __typename: "Department";
      id: string;
      name: string;
    };
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateDepartmentSubscription = {
  __typename: "Department";
  id: string;
  name: string;
  manager: {
    __typename: "Employee";
    id: string;
    fullName: string;
    age: number | null;
    department: {
      __typename: "Department";
      id: string;
      name: string;
    };
  } | null;
  employees: {
    __typename: "ModelEmployeeConnection";
    items: Array<{
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateDepartmentSubscription = {
  __typename: "Department";
  id: string;
  name: string;
  manager: {
    __typename: "Employee";
    id: string;
    fullName: string;
    age: number | null;
    department: {
      __typename: "Department";
      id: string;
      name: string;
    };
  } | null;
  employees: {
    __typename: "ModelEmployeeConnection";
    items: Array<{
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteDepartmentSubscription = {
  __typename: "Department";
  id: string;
  name: string;
  manager: {
    __typename: "Employee";
    id: string;
    fullName: string;
    age: number | null;
    department: {
      __typename: "Department";
      id: string;
      name: string;
    };
  } | null;
  employees: {
    __typename: "ModelEmployeeConnection";
    items: Array<{
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  fullName: string;
  age: number | null;
  department: {
    __typename: "Department";
    id: string;
    name: string;
    manager: {
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null;
    employees: {
      __typename: "ModelEmployeeConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnUpdateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  fullName: string;
  age: number | null;
  department: {
    __typename: "Department";
    id: string;
    name: string;
    manager: {
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null;
    employees: {
      __typename: "ModelEmployeeConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnDeleteEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  fullName: string;
  age: number | null;
  department: {
    __typename: "Department";
    id: string;
    name: string;
    manager: {
      __typename: "Employee";
      id: string;
      fullName: string;
      age: number | null;
    } | null;
    employees: {
      __typename: "ModelEmployeeConnection";
      nextToken: string | null;
    } | null;
  };
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateDepartment(
    input: CreateDepartmentInput
  ): Promise<CreateDepartmentMutation> {
    const statement = `mutation CreateDepartment($input: CreateDepartmentInput!) {
        createDepartment(input: $input) {
          __typename
          id
          name
          manager {
            __typename
            id
            fullName
            age
            department {
              __typename
              id
              name
            }
          }
          employees {
            __typename
            items {
              __typename
              id
              fullName
              age
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDepartmentMutation>response.data.createDepartment;
  }
  async UpdateDepartment(
    input: UpdateDepartmentInput
  ): Promise<UpdateDepartmentMutation> {
    const statement = `mutation UpdateDepartment($input: UpdateDepartmentInput!) {
        updateDepartment(input: $input) {
          __typename
          id
          name
          manager {
            __typename
            id
            fullName
            age
            department {
              __typename
              id
              name
            }
          }
          employees {
            __typename
            items {
              __typename
              id
              fullName
              age
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDepartmentMutation>response.data.updateDepartment;
  }
  async DeleteDepartment(
    input: DeleteDepartmentInput
  ): Promise<DeleteDepartmentMutation> {
    const statement = `mutation DeleteDepartment($input: DeleteDepartmentInput!) {
        deleteDepartment(input: $input) {
          __typename
          id
          name
          manager {
            __typename
            id
            fullName
            age
            department {
              __typename
              id
              name
            }
          }
          employees {
            __typename
            items {
              __typename
              id
              fullName
              age
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDepartmentMutation>response.data.deleteDepartment;
  }
  async CreateEmployee(
    input: CreateEmployeeInput
  ): Promise<CreateEmployeeMutation> {
    const statement = `mutation CreateEmployee($input: CreateEmployeeInput!) {
        createEmployee(input: $input) {
          __typename
          id
          fullName
          age
          department {
            __typename
            id
            name
            manager {
              __typename
              id
              fullName
              age
            }
            employees {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEmployeeMutation>response.data.createEmployee;
  }
  async UpdateEmployee(
    input: UpdateEmployeeInput
  ): Promise<UpdateEmployeeMutation> {
    const statement = `mutation UpdateEmployee($input: UpdateEmployeeInput!) {
        updateEmployee(input: $input) {
          __typename
          id
          fullName
          age
          department {
            __typename
            id
            name
            manager {
              __typename
              id
              fullName
              age
            }
            employees {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEmployeeMutation>response.data.updateEmployee;
  }
  async DeleteEmployee(
    input: DeleteEmployeeInput
  ): Promise<DeleteEmployeeMutation> {
    const statement = `mutation DeleteEmployee($input: DeleteEmployeeInput!) {
        deleteEmployee(input: $input) {
          __typename
          id
          fullName
          age
          department {
            __typename
            id
            name
            manager {
              __typename
              id
              fullName
              age
            }
            employees {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEmployeeMutation>response.data.deleteEmployee;
  }
  async GetDepartment(id: string): Promise<GetDepartmentQuery> {
    const statement = `query GetDepartment($id: ID!) {
        getDepartment(id: $id) {
          __typename
          id
          name
          manager {
            __typename
            id
            fullName
            age
            department {
              __typename
              id
              name
            }
          }
          employees {
            __typename
            items {
              __typename
              id
              fullName
              age
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDepartmentQuery>response.data.getDepartment;
  }
  async ListDepartments(
    filter?: ModelDepartmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDepartmentsQuery> {
    const statement = `query ListDepartments($filter: ModelDepartmentFilterInput, $limit: Int, $nextToken: String) {
        listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            manager {
              __typename
              id
              fullName
              age
            }
            employees {
              __typename
              items {
                fullName
              }
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDepartmentsQuery>response.data.listDepartments;
  }
  async GetEmployee(id: string): Promise<GetEmployeeQuery> {
    const statement = `query GetEmployee($id: ID!) {
        getEmployee(id: $id) {
          __typename
          id
          fullName
          age
          department {
            __typename
            id
            name
            manager {
              __typename
              id
              fullName
              age
            }
            employees {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEmployeeQuery>response.data.getEmployee;
  }
  async ListEmployees(
    filter?: ModelEmployeeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEmployeesQuery> {
    const statement = `query ListEmployees($filter: ModelEmployeeFilterInput, $limit: Int, $nextToken: String) {
        listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            fullName
            age
            department {
              __typename
              id
              name
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEmployeesQuery>response.data.listEmployees;
  }
  OnCreateDepartmentListener: Observable<
    OnCreateDepartmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDepartment {
        onCreateDepartment {
          __typename
          id
          name
          manager {
            __typename
            id
            fullName
            age
            department {
              __typename
              id
              name
            }
          }
          employees {
            __typename
            items {
              __typename
              id
              fullName
              age
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateDepartmentSubscription>;

  OnUpdateDepartmentListener: Observable<
    OnUpdateDepartmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDepartment {
        onUpdateDepartment {
          __typename
          id
          name
          manager {
            __typename
            id
            fullName
            age
            department {
              __typename
              id
              name
            }
          }
          employees {
            __typename
            items {
              __typename
              id
              fullName
              age
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateDepartmentSubscription>;

  OnDeleteDepartmentListener: Observable<
    OnDeleteDepartmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDepartment {
        onDeleteDepartment {
          __typename
          id
          name
          manager {
            __typename
            id
            fullName
            age
            department {
              __typename
              id
              name
            }
          }
          employees {
            __typename
            items {
              __typename
              id
              fullName
              age
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteDepartmentSubscription>;

  OnCreateEmployeeListener: Observable<
    OnCreateEmployeeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEmployee {
        onCreateEmployee {
          __typename
          id
          fullName
          age
          department {
            __typename
            id
            name
            manager {
              __typename
              id
              fullName
              age
            }
            employees {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateEmployeeSubscription>;

  OnUpdateEmployeeListener: Observable<
    OnUpdateEmployeeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEmployee {
        onUpdateEmployee {
          __typename
          id
          fullName
          age
          department {
            __typename
            id
            name
            manager {
              __typename
              id
              fullName
              age
            }
            employees {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateEmployeeSubscription>;

  OnDeleteEmployeeListener: Observable<
    OnDeleteEmployeeSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEmployee {
        onDeleteEmployee {
          __typename
          id
          fullName
          age
          department {
            __typename
            id
            name
            manager {
              __typename
              id
              fullName
              age
            }
            employees {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteEmployeeSubscription>;
}
