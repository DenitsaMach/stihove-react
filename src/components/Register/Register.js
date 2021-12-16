import { useNavigate } from 'react-router-dom';

import { Formik } from 'formik';
import * as yup from 'yup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

function Register() {
    const navigate = useNavigate();
    const { login } = useAuthContext();
    const validationRules = {
        email: yup.string().email().required(),
        name: yup.string().required(),
        surname: yup.string().required(),
        password: yup.string().required(),
        passwordRepeat: yup.mixed().test('pass-test', 'Must be the same as password', function (value) {
            let { password } = this.parent;
            return value === password
         }),
    };
    const onSubmitHandler = async (values) => {
        authService.register(values.email, values.password, values.name, values.surname)
            .then(authData => {
                login({email: values.email});
                navigate('/login');
            })
            .catch(err => {
                // TODO: show notification
                console.log(err);
            });
    }
    const schema = yup.object().shape(validationRules);
    return (
        <Formik validationSchema={schema} onSubmit={onSubmitHandler} initialValues={{}}>
            {({ handleSubmit, handleChange, handleBlur, touched, isValid, errors, }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Label as="legend" column sm={2}>Регистрация:</Form.Label>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="email" label="Имейл" className="mb-3">
                                <Form.Control type="email" name="email" isValid={touched.email && !errors.email} isInvalid={touched.email && errors.email} onChange={handleChange} onBlur={handleBlur} />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="name" label="Име" className="mb-3">
                                <Form.Control type="text" name="name" isValid={touched.name && !errors.name && touched.name} isInvalid={touched.name && errors.name} onChange={handleChange} onBlur={handleBlur} />
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="surname" label="Фамилия" className="mb-3">
                                <Form.Control type="text" name="surname" isValid={touched.surname && !errors.surname} isInvalid={touched.surname && errors.surname} onChange={handleChange} onBlur={handleBlur} />
                                <Form.Control.Feedback type="invalid">{errors.surname}</Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FloatingLabel controlId="password" label="Парола" className="mb-3">
                                <Form.Control type="password" name="password" isValid={touched.password && !errors.password} isInvalid={touched.password && errors.password} onChange={handleChange} onBlur={handleBlur} />
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="passwordRepeat" label="Повтори паролата" className="mb-3">
                                <Form.Control type="password" name="passwordRepeat" isValid={touched.passwordRepeat && !errors.passwordRepeat} isInvalid={!!errors.passwordRepeat} onChange={handleChange} onBlur={handleBlur} />
                                <Form.Control.Feedback type="invalid">{errors.passwordRepeat}</Form.Control.Feedback>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Button type="submit" disabled={!isValid}>Регистрирай ме!</Button>
                </Form>
            )}
        </Formik>
    );
}

export default Register;