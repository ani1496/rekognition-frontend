import * as myAPIs from './api.js';
import axios from 'axios';

//const APIurl = myAPIs.rekAPI;


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
export const getEmployee = (ids = employeesArray) => ({ 
	type: 'GET_EMPLOYEE',
	employees: ids
});

export const getEmployeeDB = (id = 1007) => {    //GET API DYNAMODB!!!!!!
	return dispatch => {
		axios.get(`${myAPIs.dbAPI}${id}`).then( res => {
			dispatch ({
				type: 'GET_EMPLOYEE_DB',
				employeeDB: res
			});
		});
	}
};

//REKOGNITION
export const rekognitionPost = (imageName, imageBytes, config) => {  
  return async dispatch => {
  	let getResponse;
  	let postResponse;
  	let arrayDB = [];

    function onSuccess(response) {
      	dispatch({
	      	type: 'REKOGNITION',
	        payload: response
		})
		return response;
    }

    try {
      	postResponse = await axios.post(
		    `${myAPIs.rekAPI}${imageName}`,
		    {
		          data: imageBytes
		    },
		    config, 
		    {
		          responseType:'json',
		    }
		);

		for(var i=0; i<postResponse.data.FaceMatches.length; i++){
			getResponse = await axios.get(`${myAPIs.dbAPI}${1007}`)
			arrayDB.push(getResponse.data.Item);
		}

      	return onSuccess(arrayDB);
    }
    catch(err){
    	console.log(err);
    }
  }
}




//SAVE_IMAGE
export const saveImage = (image, imageBytes, imageName) => ({
	type: 'SAVE_IMAGE',
	image,
	imageBytes,
	imageName
});




