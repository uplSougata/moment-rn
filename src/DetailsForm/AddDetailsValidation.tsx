import * as yup from 'yup';


export const addDetailsValidation = yup.object().shape({
    title: yup.string().required('Please enter the title'),
    description: yup.string().required('Please enter description'),
    // image: yup.string().required('Please select image'),
  });