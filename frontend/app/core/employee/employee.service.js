'use strict';

const url = 'http://localhost:3000/api';

function processResponse(response) {
  if (response.status !== 200) throw new Error(`${response.statusText}`);
  return response.data;
}

function processError(err) {
  console.log(err.statusText);
}

angular.
  module('core.employee').
  factory('EmployeeService', ['$http',
    function($http) {
      return {
        getEmployees: (name) => $http({ method: 'GET', url: name ? `${url}/employees?name=${name}` : `${url}/employees`})
          .then(processResponse)
          .catch(processError),
        createEmployee: (data) => $http({ method: 'POST', url: `${url}/employees`, data})
          .then(processResponse)
          .catch(processError),
        deleteEmployee: (id) => $http({ method: 'DELETE', url: `${url}/employees/${id}`})
          .then(processResponse)
          .catch(processError)
      }
    }
  ]);
