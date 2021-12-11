import { useState } from 'react';

import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

function Login() {
    const zeroErrors = {email: '', password: ''};
    const allTouched = (isIt) => ({email: isIt, password: isIt});
    const [error, setError] = useState(zeroErrors);
    const [isTouched, setIsTouched] = useState(allTouched(false));
    const validationRules = {
        email: yup.string().email().required(),
        password: yup.string().required()
    };
    const onChangeHandler = (event) => {
        event.preventDefault();
        let newError = {...error};
        if (!isTouched[event.target.name]) {
            let newIsTouched = {...isTouched};
            newIsTouched[event.target.name] = true;
            setIsTouched(newIsTouched);
        }
        validationRules[event.target.name].validate(event.target.value)
            .then(function () {
                newError[event.target.name] = '';
                setError(newError);
            }).catch(function (err) {
                newError[event.target.name] = err.message;
                setError(newError);
            });
    }
    const schema = yup.object().shape(validationRules);
    const onLoginHandler = (event) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let formDataObj = Object.fromEntries(formData.entries());
        schema.validate(formDataObj, { abortEarly: false })
            .then(function (validData) {
                console.log(validData);
                //todo: send to server
            }).catch(function (err) {
                let newError = zeroErrors;
                err.inner.forEach(e => {
                    newError[e.path] = e.message;
                });
                setError(newError);
                setIsTouched(allTouched(true));
            });

        let email = formData.get('email');
        let password = formData.get('password');

        /* authService.login(email, password)
            .then((authData) => {
                login(authData);
                addNotification('You logged in successfully', types.success);
                navigate('/dashboard');
            })
            .catch(err => {
                // TODO: show notification
                console.log(err);
            });
        } */
    }

    return (
        <Form noValidate onSubmit={onLoginHandler} onChange={onChangeHandler} >
            <Form.Label as="legend" column sm={2}>Вход:</Form.Label>
            <FloatingLabel controlId="registerEmail" label="Имейл" className="mb-3">
                <Form.Control name="email" type="email" isValid={isTouched.email && !error.email} isInvalid={!!error.email} />
                <Form.Control.Feedback type="invalid">{error.email}</Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel controlId="registerPassword" label="Парола" className="mb-3">
                <Form.Control name="password" type="password" isValid={isTouched.password && !error.password} isInvalid={!!error.password} />
                <Form.Control.Feedback type="invalid">{error.password}</Form.Control.Feedback>
            </FloatingLabel>
            <Button type="submit">Влез!</Button>
        </Form>
    );
}

export default Login;