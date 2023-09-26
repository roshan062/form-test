import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import swal from 'sweetalert';

const ContactForm2 = () => {
    // Google Apps Script URL
    const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbyql5Jm9Tbbimpd3v_VXWhcxxko5KppjkVoHcR-sdB4WA075QHYhdAjBetZkLAX7_pb/exec';

    // Create a reference for the form
    const form = useRef();

    // Define validation schema
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        project: Yup.string().required('Please, write about your project.'),
        message: Yup.string().required('Please, convey your message to us.'),
        email: Yup.string()
            .required('Email is required')
            .email('Entered value does not match email format'),
    });

    // Create form options with validation schema
    const formOptions = { resolver: yupResolver(validationSchema) };

    // Use useForm hook to get form methods
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    // Handle form submission
    const onSubmit = async (data, e) => {
        e.preventDefault();

        // Create a FormData object for sending data
        const formData = new FormData(form.current);

        // Send data to Google Apps Script
        try {
            const response = await fetch(googleAppsScriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                body: formData,
            });

            if (response.status === 200) {
                swal('Success', 'We will contact you within 24 hours.', 'success');
                e.target.reset(); // Reset the form on success
            } else {
                swal('Oops...', 'Something went wrong. Try Again!', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            swal('Oops...', 'Something went wrong. Try Again!', 'error');
        }
    };

    return (
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="contact_form">
            <div className="ptf-form-group">
                <label data-number="01">What’s your name?</label>
                <input
                    placeholder="Your name"
                    type="text"
                    name="name"
                    {...register("name")}
                    className={`${errors.name ? "is-invalid" : ""}`}
                />
                {errors.name && (
                    <div className="invalid-feedback">{errors.name?.message}</div>
                )}
            </div>
            {/* End .ptf-form-group */}

            <div className="ptf-form-group">
                <label data-number="03">What is your email address?</label>
                <input
                    placeholder="Your email id"
                    name="email"
                    type="text"
                    {...register("email")}
                    className={` ${errors.email ? "is-invalid" : ""}`}
                />
                {errors.email && (
                    <div className="invalid-feedback">{errors.email?.message}</div>
                )}
            </div>
            {/* End .ptf-form-group */}

            <div className="ptf-form-group">
                <label data-number="04">Tell us about your requirements.</label>
                <input
                    placeholder="Write about your requirements"
                    type="text"
                    name="project"
                    {...register("project")}
                    className={`${errors.project ? "is-invalid" : ""}`}
                />
                {errors.project && (
                    <div className="invalid-feedback">{errors.project?.message}</div>
                )}
            </div>
            {/* End .ptf-form-group */}

            <div className="ptf-form-group">
                <label data-number="05">Your message to Multi Cloud Ai?</label>
                <input
                    placeholder="Write your message for us"
                    type="text"
                    name="message"
                    {...register("message")}
                    className={`${errors.message ? "is-invalid" : ""}`}
                />
                {errors.message && (
                    <div className="invalid-feedback">{errors.message?.message}</div>
                )}
            </div>
            {/* End .ptf-form-group */}

            {/* <!--Spacer--> */}
            <div className="ptf-spacer" style={{ "--ptf-xxl": "2.5rem" }}></div>

            <div className="ptf-form-group agreement-checkbox ">
                <input
                    name="acceptTerms"
                    type="checkbox"
                    id="acceptTerms"
                    {...register("acceptTerms")}
                    className={` ${errors.acceptTerms ? "is-invalid" : ""}`}
                />

                <label className="ptf-checkbox" htmlFor="acceptTerms">
                    <span className="ptf-checkbox__checkmark"></span>I agree to receive
                    occasional newsletters from Multi Cloud Ai.
                </label>
                {errors.acceptTerms && (
                    <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                )}
            </div>
            {/* End .ptf-form-group */}

            {/* <!--Spacer--> */}
            <div className="ptf-spacer" style={{ "--ptf-xxl": "5.625rem" }}></div>

            <button className="ptf-submit-button">
                Submit
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 17 17"
                >
                    <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                </svg>
            </button>
            {/* End .ptf-submit-button */}
        </form>
    );
};

export default ContactForm2;
