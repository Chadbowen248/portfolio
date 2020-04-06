import React from "react"
import { Link } from "gatsby"

import FormikForm from "../components/FormikForm/formik"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectInfo from "../components/ProjectInfo/projectInfo"

const FormikFormPage = () => (
  <Layout>
    <SEO title="Formik Form" />
    <ProjectInfo>
     <p>This is a basic form built with Yup and Formik. Formik is a nice way to handle form state in React, and I’ve found Yup to be an amazing tool for validation, even though I’ve barely scratched the surface of what it can do. This isn’t hooked up to anything, I’m just using a setTimeout to simulate a loading state. I will say that under normal use cases the combination of these two tools is very powerful, however, once you get into more complex situations it gets a little dicey. I’ve had a situation where my form’s initial values come from the backend, and then the user could update the form. It seemed like I ended up having two sources of truth, and keeping them in sync was a hassle. I don’t think it’s a problem with Formik, I’ll call it user error. Anyway, be sure to try to submit without filling out an input and make sure the passwords match!</p>
    </ProjectInfo>
    <FormikForm />
  </Layout>
)

export default FormikFormPage
