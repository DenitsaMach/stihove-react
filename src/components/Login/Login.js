import { useNavigate } from 'react-router-dom';

import { Formik } from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

import * as authService from "../../services/authService";
import { useAuthContext } from '../../contexts/AuthContext';

function Login() {
    const navigate = useNavigate();
    const { login, user } = useAuthContext();
    const validationRules = {
        email: yup.string().email().required(),
        password: yup.string().required()
    };
    const onSubmitHandler = async (values) => {
        authService.login(values.email, values.password)
            .then(authData => {
                login(authData);
                navigate('/poems/mine');
            })
            .catch(err => {
                // TODO: show notification
                console.log(err);
            });
    }
    const schema = yup.object().shape(validationRules);
    return (
        <Formik validationSchema={schema} onSubmit={onSubmitHandler} initialValues={{email: user.email}}>
            {({ handleSubmit, handleChange, handleBlur, touched, isValid, errors, values}) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Label as="legend" column sm={2}>Вход:</Form.Label>
                    <FloatingLabel controlId="email" label="Имейл" className="mb-3">
                        <Form.Control type="email" name="email" value={values.email} isValid={touched.email && !errors.email} isInvalid={touched.email && errors.email} onChange={handleChange} onBlur={handleBlur} />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel controlId="password" label="Парола" className="mb-3">
                        <Form.Control type="password" name="password" isValid={touched.password && !errors.password} isInvalid={touched.password && errors.password} onChange={handleChange} onBlur={handleBlur} />
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </FloatingLabel>
                    <Button type="submit">Влез!</Button>
                </Form>
            )}
        </Formik>
    );
}

export default Login;