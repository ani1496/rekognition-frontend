import * as myAPIs from './api.js';
import axios from 'axios';


//REKOGNITION
export const rekognitionPost = (imageName, imageBytes, config) => {  
  return async dispatch => {
  	let employeeResponse;
  	let postRekognitionResponse;
  	let managerResponse;
  	let arrayDB = [];

    function dispatchingResponse(response) {
      	dispatch({
	      	type: 'REKOGNITION',
	        payload: response
		})
		return response;
    }

    try {
      	postRekognitionResponse = await axios.post(
		    `${myAPIs.rekAPI}${imageName}`,
		    {
		          data: imageBytes
		    },
		    config, 
		    {
		          responseType:'json',
		    }
		);

		if(postRekognitionResponse.data)
			console.log(postRekognitionResponse.data);

		for(var i=0; i<postRekognitionResponse.data.length; i++){

			employeeResponse = await axios.get(`${myAPIs.dbAPI}${postRekognitionResponse.data[i]}`);
			managerResponse = await axios.get(`${myAPIs.dbAPI}${employeeResponse.data.Item.parent}`);

			if(managerResponse){
				employeeResponse.data.Item.managerFistName = managerResponse.data.Item.firstname;
				employeeResponse.data.Item.managerLastName = managerResponse.data.Item.lastname;
			}
			
			arrayDB.push(employeeResponse.data.Item);
		}

      	return dispatchingResponse(arrayDB);
    }
    catch(err){
    	dispatchingResponse('false');
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

//CLEAR-SEARCH

export const clearSearch = () => ({
	type: 'CLEAR-SEARCH',
	payload: 'empty'
});



