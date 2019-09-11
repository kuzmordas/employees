'use strict';

angular.
  module('employeeList').
  component('employeeList', {
    templateUrl: 'employee-list/employee-list.template.html',
    controller: ['EmployeeService',
      function EmployeeListController(EmployeeService) {
        const self = this;
        EmployeeService.getEmployees()
          .then(response => self.employees = response)
          .catch(error => console.log(error));

        self.onSearch = () => {
          EmployeeService.getEmployees(self.searchName)
            .then(response => self.employees = response)
            .catch(error => console.log(error.message));
        }

        self.onAddNewEmployee = () => {
          if (!self.newEmployee) return;
          EmployeeService.createEmployee({name: self.newEmployee})
            .then(result => self.employees.push(result))
            .catch(error => console.log(error.message));
        };

        self.onDeleteEmployee = (id) => {
          EmployeeService.deleteEmployee(id)
            .then(() => {
              const { employees } = self;
              const index = employees.findIndex(x => x._id === id);
              if (index > -1) employees.splice(index, 1);
            })
            .catch(error => console.log(error.message));
        }
      }
    ]
  });
