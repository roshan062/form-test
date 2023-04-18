import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';


const BlogVacancyContactForm = () => {
    // setting mailjs
    const form = useRef();
    const serviceId = "service_7gyjl0h";
    const publicKey = "bZ6o3hLqR8XwYxKrw";
    const templateId = "template_1gssiux";

    const sendEmail = (data, event) => {
        event.preventDefault();
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        // event.target.reset();
        onSubmit(data, event)
    };

    // for validation
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        qualification: Yup.string().required("Mention your qualification"),
        role: Yup.string().required("Fill your job role."),
        experience: Yup.string().required("Mention your experience."),
        email: Yup.string()
            .required("Email is required")
            .email("Entered value does not match email format"),
        salary: Yup.string().required("Mention your salary expectation"),
        resume: Yup.string().required("Provide your resume's google drive link."),
        acceptTerms: Yup.bool().oneOf(
            [true],
            "Accept Terms and Conditions is required"
        ),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;


    function onSubmit(data, e) {
        // display form data on success
        console.log("Message submited: " + JSON.stringify(data));
        e.target.reset();
    }

    return (
        <form ref={form} onSubmit={handleSubmit(sendEmail)} className="contact_form">
            <div className="ptf-form-group">
                <label data-number="01">What’s your name?</label>
                <input
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
                <label data-number="02">What’s your qualification?</label>
                <input
                    type="text"
                    name="qualification"
                    {...register("qualification")}
                    className={`${errors.qualification ? "is-invalid" : ""}`}
                />
                {errors.qualification && (
                    <div className="invalid-feedback">{errors.qualification?.message}</div>
                )}
            </div>
            {/* End .ptf-form-group */}

            <div className="ptf-form-group">
                <label data-number="03">What’s your email address?</label>
                <input
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
                <label data-number="04">Which role do you want to apply for?</label>
                <select
                    name="role"
                    {...register("role")}
                    className={`${errors.budget ? "is-invalid" : ""}`}
                >
                    <option value="Not Selected">Select from Below</option>
                    <option value="Frontend Developer">Fronted Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="App Developer">App Developer</option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="HR and Management">HR and Management</option>
                    <option value="Marketing Specialist">Marketing Specialist</option>
                </select>
                {errors.role && (
                    <div className="invalid-feedback">{errors.role?.message}</div>
                )}
            </div>
            {/* End .ptf-form-group */}

            <div className="ptf-form-group">
                <label data-number="05">How many years of experience do you have?</label>
                <select
                    name="experience"
                    {...register("experience")}
                    className={`${errors.budget ? "is-invalid" : ""}`}
                >
                    <option value="Not Selected">Select from Below</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="5">6 or above</option>
                </select>
                {errors.experience && (
                    <div className="invalid-feedback">{errors.experience?.message}</div>
                )}
            </div>
            {/* End .ptf-form-group */}
            <div className="ptf-form-group">
                <label data-number="06">What is your salary expectation?</label>
                <input
                    name="salary"
                    type="text"
                    {...register("salary")}
                    className={` ${errors.salary ? "is-invalid" : ""}`}
                />
                {errors.salary && (
                    <div className="invalid-feedback">{errors.salary?.message}</div>
                )}
            </div>

            {/* End .ptf-form-group */}
            <div className="ptf-form-group">
                <label data-number="07">Provide your resume's google drive link?</label>
                <input
                    name="resume"
                    type="text"
                    {...register("resume")}
                    className={` ${errors.resume ? "is-invalid" : ""}`}
                />
                {errors.resume && (
                    <div className="invalid-feedback">{errors.resume?.message}</div>
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
                    occasional Multi Cloud Ai newsletters containing news & advice on creating
                    personal and business progress via digital tech.
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

export default BlogVacancyContactForm;
