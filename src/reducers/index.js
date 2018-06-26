
const employeeOne = {
  id: 1,
  name: 'Juan',
  position: 'Intern',
  email: 'juan@flp.com',
  manager: 'Pablo'
}

const employeeTwo = {
  id: 2,
  name: 'Lucas',
  position: 'Intern 1',
  email: 'lucas@flp.com',
  manager: 'JD'
}

const employeeThree = {
  id: 3,
  name: 'Pedro',
  position: 'Intern 2',
  email: 'pedro@flp.com',
  manager: 'Julio'
}


const employeesArray = [employeeOne, employeeTwo, employeeThree];

const reducerRekognition = (state = {employeesArray}, action) => {
  switch (action.type){
    case 'GET_EMPLOYEE':
      return { ...state, employees: action.employees };
    default :
      return state;
  }

};


export default reducerRekognition;