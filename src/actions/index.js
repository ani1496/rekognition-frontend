
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
  name: 'Banana',
  position: 'Intern 2',
  email: 'pedro@flp.com',
  manager: 'Julio'
}


const employeesArray = [employeeOne, employeeTwo, employeeThree];



//GET_EMPLOYEE
export const getEmployee = (ids = employeesArray) => ({    //GET API DYNAMODB!!!!!!
	// return dispatch => {
	// 	axios.get().then( res => {
	// 		dispatch({
	// 			type: GET_EMPLOYEE,
	// 			employees: res
	// 		})
	// 	});
	// }
	type: 'GET_EMPLOYEE',
	employees: ids
});

//REKOGNITION
export const useRekognition = (image) => ({
	type: 'REKOGNITION',
	//imageInf: axios
	image
});

//SAVE_IMAGE
export const saveImage = (image) => ({
	type: 'SAVE_IMAGE',
	image
});


//SAVE_REKOGNITION
export const rekognitionResponse = (response) => ({
	type: 'SAVE_REKOGNITION',
	response
});


