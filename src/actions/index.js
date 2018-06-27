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

//GET_EMPLOYEE
export const getEmployee = (ids) => ({    //GET API DYNAMODB!!!!!!
	return dispatch => {
		axios.get().then( res => {
			dispatch({
				type: GET_EMPLOYEE,
				employees: res
			})
		});
	}
});

