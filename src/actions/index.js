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
	return dispatch =>{
  //       axios
		// .post(
		//     `${myAPIs.rekAPI}${imageName}`,
		//     {
		//           data: imageBytes
		//     },
		//     config, 
		//     {
		//           responseType:'json',
		//     }
		// )
		// .then( res => {
			
		// 	dispatch({
		// 		type: 'REKOGNITION',
		// 		employeesIDs: res.data.FaceMatches[0].Face.ExternalImageId
		// 	})
		// }).catch(err => {
		//     console.log(err);
		// });

		axios.post(
		    `${myAPIs.rekAPI}${imageName}`,
		    {
		          data: imageBytes
		    },
		    config, 
		    {
		          responseType:'json',
		    }
		)
		.then((response) => {
			let array = [];

			for(var i=0; i<response.data.FaceMatches.length; i++){
				axios.get(`${myAPIs.dbAPI}${1007}`).then(res => {
					array.push('rudy is lameee');
					array.push('but A.N.A likes him that way :)');
				});
			}
			
		    return array;
		})
		.then((response = []) => {
		      dispatch({
		      	type: 'REKOGNITION',
		        payload: response
		      })
		});
	};
};




//SAVE_IMAGE
export const saveImage = (image, imageBytes, imageName) => ({
	type: 'SAVE_IMAGE',
	image,
	imageBytes,
	imageName
});



