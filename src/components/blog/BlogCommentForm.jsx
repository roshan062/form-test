import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';

const BlogCommentForm = () => {
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
    event.target.reset();
  };

  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    message: Yup.string().required("Please write your comment"),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Accept Terms and Conditions is required"
    ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  return (
    <form ref={form} onSubmit={handleSubmit(sendEmail)}>
      <div className="ptf-form-group">
        <input
          placeholder="Write your comment here... *"
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

      <div className="ptf-form-row two-col" style={{ marginBottom: ".625rem" }}>
        <div className="ptf-form-group">
          <input
            placeholder="Your name *"
            type="text"
            name="name"
            {...register("name")}
            className={`${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name?.message}</div>
          )}
        </div>
        <div className="ptf-form-group">
          <input
            placeholder="Your Email *"
            name="email"
            type="text"
            {...register("email")}
            className={` ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email?.message}</div>
          )}
        </div>
      </div>
      {/* End .ptf-form-group */}

      <div
        className="ptf-form-group agreement-checkbox "
        style={{ marginBottom: "3.75rem" }}
      >
        <input
          name="acceptTerms"
          type="checkbox"
          id="acceptTerms"
          {...register("acceptTerms")}
          className={` ${errors.acceptTerms ? "is-invalid" : ""}`}
        />

        <label className="ptf-checkbox" htmlFor="acceptTerms">
          <span className="ptf-checkbox__checkmark"></span>Save my name & email
          in this browser for next time I comment.
        </label>
        {errors.acceptTerms && (
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <p className="form-submit">
        <button className="ptf-submit-button ptf-submit-button--style-2">
          Submit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 17 17"
          >
            <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
          </svg>
        </button>
      </p>
      {/* End .form-submit */}
    </form>
  );
};

export default BlogCommentForm;
