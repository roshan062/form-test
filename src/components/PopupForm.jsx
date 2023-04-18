import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';
import "../assets/scss/popup.module.scss";
import swal from 'sweetalert';

const PopupForm = () => {
    // setting mailjs
    const form = useRef();
    const serviceId = "service_7gyjl0h";
    const publicKey = "bZ6o3hLqR8XwYxKrw";
    const templateId = "template_1gssiux";

    const sendEmail = (data, event) => {
        document.querySelector("#popup").style.visibility = "hidden";
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
        event.target.reset();
        event.preventDefault();

    };

    // for validation
    const validationSchema = Yup.object().shape({
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    // get functions to build form with useForm() hook
    const { handleSubmit } = useForm(formOptions);

    window.onload = function () {
        setTimeout(() => {
            document.querySelector("#popup").style.visibility = "visible";
        }, 15000);
    }

    const closeHandler = function (e) {
        e.preventDefault();
        document.querySelector("#popup").style.visibility = "hidden";
    }



    return (
        <form ref={form} id="popup" onSubmit={handleSubmit(sendEmail)}>
            <h3 style={{ paddingBottom: "20px" }}>Let's get connect</h3>
            <button onClick={closeHandler}>❌</button>
            <div className="ptf-form-row " style={{ marginBottom: ".325rem" }}>
                <div>
                    <input
                        placeholder="Your Name *"
                        type="text"
                        name="name"
                        autoComplete='off'
                        required
                    />
                </div>
                <div>
                    <input
                        placeholder="Your Email *"
                        name="email"
                        type="text"
                        autoComplete='off'
                        required
                    />
                </div>

                <div className='mb-20'>
                    <input
                        placeholder="Tell us about your requirements. *"
                        type="text"
                        autoComplete='off'
                        name="message"
                        required
                    />
                </div>
                {/* End .ptf-form-group */}
            </div>
            {/* End .ptf-form-group */}

            <p className="fz-10 has-black-color">
                By sending us your inquiries, you agree
                to process your personal data and sending you further related informations.
            </p>
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

export default PopupForm;
