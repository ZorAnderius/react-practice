import * as Yup from "yup";
import clsx from "clsx";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";

import styles from './FormikComponent.module.css';

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too short!').max(50, 'Too long!').required("Required Name"),
    email: Yup.string().email('Must be a valid email').required("Required Email"),
    message: Yup.string().min(3, "Too short!").max(300, "Too long!").required("Required Message"),
    gender: Yup.string().oneOf(["male", "female", "other"]).required("Required gender") 
})

const initialValues = {
    username: "",
    email: ""
};

export const FormikComponent = () => {
    const nameId = useId();
    const emailId = useId();
    const feedbackId = useId();
    const selectId = useId();

    const handleSubmit = (values, actions) => {
        console.dir(values);
        console.dir(actions);
}

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor={nameId}>Name</label>
                    <Field id={nameId} className={styles.field} type="text" name="username" />
                    <ErrorMessage className={styles.error} name="username" component="span" />
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor={emailId}>Email</label>
                    <Field className={styles.field} id={emailId} type="text" name="email" />
                    <ErrorMessage className={styles.error} name="email" component="span" />
                </div>
                
                <div className={styles.inputContainer}>
                    <label htmlFor={feedbackId}>Feedback:</label>
                    <Field className={styles.field} as="textarea" id={feedbackId} name="message" cols="20" rows="5" />
                    <ErrorMessage className={styles.error} name="message" component="span" />
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor={selectId}>Choose your gender</label>
                    <Field className={styles.field} as="select" id={selectId} name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </Field>
                    <ErrorMessage className={styles.error} name="gender" component="span" />
                </div>
                <button className={styles.btn} type="submit">Submit</button>
            </Form>
        </Formik>
    );
};