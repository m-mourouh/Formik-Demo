import { useFormik } from "formik"
import * as Yup from "Yup";  // Great form validation library  

const SignUpForm = () => {
    
    const formik = useFormik({
        initialValues: { 
            firstName: "",
             lastName: "",
              email: ""
            },
            validationSchema: Yup.object({
                firstName: Yup.string().max(15,"Must be 15 characters or less").required("First name is required"),
                lastName: Yup.string().max(20,"Must be 15 characters or less").required("Last name is required"),
                email:  Yup.string().email("Invalid Email address").required('Email is required')
            }),
            onSubmit: (values): void => {
                console.log(values);
            }
    });
    //! console log formik values
    // console.log(formik.values);
    //! console log formik values
    console.log(formik.touched);
  return (
    <form className="loginForm"  onSubmit={formik.handleSubmit}>
        <h1>Login</h1>

        <span>
            <input type="text" placeholder="First Name" value={formik.values.firstName} onChange={formik.handleChange} name="firstName" onBlur={formik.handleBlur} />
        </span>
        { formik.touched.firstName && formik.errors.firstName &&   <p className="error"><small>{formik.errors.firstName}</small></p> }
        <span>
            <input type="text" placeholder="Last Name" value={formik.values.lastName}  onChange={formik.handleChange} name="lastName" onBlur={formik.handleBlur} />
       
        </span>
        { formik.touched.lastName && formik.errors.lastName &&   <p className="error"><small>{formik.errors.lastName}</small></p> }
        <span>
            <input type="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} name="email" onBlur={formik.handleBlur} />
       
        </span>
        {  formik.touched.email && formik.errors.email &&   <p className="error"><small>{formik.errors.email}</small></p> }
        <button type="submit" className="btn">Login</button>

    </form>
  )
}

export default SignUpForm
