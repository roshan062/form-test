import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


const ContactForm = () => {
  // setting mailjs
  const form = useRef();
  const serviceId = "service_7gyjl0h";
  const publicKey = "bZ6o3hLqR8XwYxKrw";
  const templateId = "template_9gydbho";

  const sendEmail = (data, event) => {
    event.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.status);
        if (result.status === 200) {
          swal("Success", "We will contact you within 24 hours.", "success")
        }
      }, (error) => {
        console.log(error.text);
        swal("Oops...", "Something went wrong. Try Again!", "error");
      });
    onSubmit(data, event)
  };

  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    project: Yup.string().required("Please, write about your project."),
    message: Yup.string().required("Please, convey your message to us."),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data, e) {
    e.target.reset();
  }

  return (
    <form ref={form} onSubmit={handleSubmit(sendEmail)} className="contact_form">
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
        <label data-number="03">What’s your email address?</label>
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

export default ContactForm;
