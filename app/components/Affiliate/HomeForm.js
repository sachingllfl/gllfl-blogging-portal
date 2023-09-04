"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaRegUser, FaMobileScreen, FaEnvelope } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";

const validationSchema = Yup.object().shape({
  full_name: Yup.string().required("Full Name is required"),
  mobile: Yup.number("Please enter only numbers").required(
    "Mobile is required"
  ),
  email: Yup.string().email().required("Email is required"),
});

const HomeForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="py-12 xl:py-24 bg-[url('./assets/home/bg_home_form.png')] bg-cover bg-center">
      <div className="max-w-6xl mx-auto px-4 lg:px-12 md:px-4">
        <h6 className="text-white text-lg xl:text-2xl  mb-4">
          Complete payment processing solutions for thousands of clients
          nationwide
        </h6>
        <h6 className="text-white text-xl md:text-3xl xl:text-5xl font-bold mb-8">
          We are Transparent,
          <br />
          Reliable, and keep it simple!
        </h6>
        <Formik
          initialValues={{ full_name: "", mobile: "", email: "" }}
          validationSchema={validationSchema}
          onSubmit={(val) => {
            console.log(val);
          }}
        >
          {({ dirty, isValid }) => (
            <Form className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6">
              <div className="relative">
                <FaRegUser className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-600" />
                <Field
                  type="text"
                  name="full_name"
                  className="bg-white w-full border-none py-1.5 px-4 !pl-11 text-sm lg:text-base lg:py-3 lg:px-8 rounded lg:rounded-lg outline-none"
                  placeholder="Full Name"
                />
                <ErrorMessage
                  name="full_name"
                  component="div"
                  className="text-rose-600 text-xs absolute -bottom-5"
                />
              </div>
              <div className="relative">
                <FaMobileScreen className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-600" />
                <Field
                  type="number"
                  name="mobile"
                  className="bg-white w-full border-none py-1.5 px-4 !pl-11 text-sm lg:text-base lg:py-3 lg:px-8 rounded lg:rounded-lg outline-none"
                  placeholder="Mobile"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-rose-600 text-xs absolute -bottom-5"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-600" />
                <Field
                  type="text"
                  name="email"
                  className="bg-white w-full border-none py-1.5 px-4 !pl-11 text-sm lg:text-base lg:py-3 lg:px-8 rounded lg:rounded-lg outline-none"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-rose-600 text-xs absolute -bottom-5"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={!(isValid && dirty)}
                  className="bg-custom_orange text-white flex items-center justify-center gap-2 self-start group py-1.5 px-4 text-sm lg:text-base lg:py-3 lg:px-8 rounded lg:rounded-lg shrink-0"
                >
                  Submit
                  <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-150" />
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default HomeForm;
