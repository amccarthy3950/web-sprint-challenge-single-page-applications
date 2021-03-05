import * as yup from 'yup'

const formSchema = yup.object().shape({
    size: yup.string()
        .oneOf(['small','medium','large','extra large']),
    sauce: yup.string()
        .oneOf(['barbeque','original red','garlic','alfredo']),
    name: yup.string()
        .trim()
        .required('Name is required, please enter the name')
        .min(2,'Name must have at least 2 characters'),
    special: yup.string(),
    pepperoni:yup.boolean(),
    chicken:yup.boolean(),
    onions:yup.boolean(),
    mushrooms:yup.boolean(),
    greenPepper:yup.boolean(),
    pineapple:yup.boolean(),
})

export default formSchema