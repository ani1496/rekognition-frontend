
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
    case 'REKOGNITION':
      return { ...state, employees: action.payload };
    case 'SAVE_IMAGE':
      return { ...state, image: action.image, imageBytes: action.imageBytes, imageName: action.imageName };
    case 'CLEAR-SEARCH':
      return { ...state, employees: action.payload };
    default :
      return state;
  }

};



export default reducerRekognition;