
// const employeeOne = {
//   id: 1,
//   name: 'Juan',
//   position: 'Intern',
//   email: 'juan@flp.com',
//   manager: 'Pablo'
// }

// const employeeTwo = {
//   id: 2,
//   name: 'Lucas',
//   position: 'Intern 1',
//   email: 'lucas@flp.com',
//   manager: 'JD'
// }

// const employeeThree = {
//   id: 3,
//   name: 'Pedro',
//   position: 'Intern 2',
//   email: 'pedro@flp.com',
//   manager: 'Julio'
// }


// const employeesArray = [employeeOne, employeeTwo, employeeThree];

const reducerRekognition = (state = {}, action) => {
  switch (action.type){
    case 'GET_EMPLOYEE':
      return { ...state, employees: action.employees };
    case 'GET_EMPLOYEE_DB':
      return { ...state, employeeDB: action.employeeDB };
    case 'REKOGNITION':
      return { ...state, employeesIDs: action.employeesIDs};
    case 'SAVE_IMAGE':
      return { ...state, image: action.image, imageBytes: action.imageBytes, imageName: action.imageName };
    default :
      return state;
  }

};



export default reducerRekognition;