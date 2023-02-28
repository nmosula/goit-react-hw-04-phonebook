import { Formik, Field } from 'formik';
import { Form, FormField, ErrorMessage, FrmButton } from './UserForm.styled';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';


const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberRegex = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const UserSchema = Yup.object().shape({
    name: Yup.string()
        .matches(nameRegex, {message: "Invalid name", })
        .required('Required'),
    number: Yup.string()
        .matches(numberRegex, {message: "Invalid number. For example '123-45-67'", })
        .required('Required')
});


const UserForm = ({ onSave }) => {

    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={UserSchema}
            onSubmit={(values, actions) => {
                onSave({
                    id: nanoid(),
                    ...values,
                });
                actions.resetForm();
            }}
        >

            <Form>
                <FormField>
                    Name
                    <Field name="name" />
                    <ErrorMessage name="name" component="span" />
                </FormField>
                <FormField>
                    Tel
                    <Field name="number" />
                    <ErrorMessage name="number" component="span" />
                </FormField>
                <FrmButton type="submit">Add Contact</FrmButton>
            </Form>
    
        </Formik>
    );
    
}

export default UserForm;