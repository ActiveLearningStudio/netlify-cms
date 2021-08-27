import React from 'react';
import { Button } from 'react-bootstrap';
import { Formik,Field,TextArea } from 'formik';
import bg from '../../assets/images/HomePageSVG.svg';

const Start = () => {
  return (
    <>
     <div className="start-section">
    
       <h2>Ready to start with Curriki?</h2>
       <div className="start-content">
         <div className="start-content-btn">
             <div className="demo-btn">
              <h3>Try our <span> demo environment</span></h3>
             <span><Button size="sm" variant="outline-primary"> SIGN UP</Button></span> 
            </div>
            <div className="demo-btn">
              <h3>Register for<span> monthly demo </span></h3>
              <span><Button  size="sm" variant="outline-primary"> Register</Button></span>
            </div>
       </div>
       
       <div className="start-content-contact-us">
       
        <h3>
          Contact us
        </h3>
        <p>
        Want to learn more about how CurrikiStudio can work for<br></br> your organization?
        </p>
        <div className="main-content">

       
        <div className="contact-us-form">
        <Formik
       initialValues={{ email: '', password: '',fname:'',lname:'',companyName:'',
       componayCategory:'',jobTitle:'',message:'' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <div className="name-group">
           <div>
           <label>First Name</label>
           <input
             type="text"
             name="fname"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.fname}
           />
           </div>
           <div>
           <label>First Name</label>
           <input
             type="text"
             name="fname"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.fname}
           />
           </div>
            
           </div>
          
           <div className="email-group">
           <div>
           <label>Email</label>
           </div>
           <div>
           <input
           
           type="email"
           name="email"
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.email}
         />
         {errors.email && touched.email && errors.email}
           </div>
           
            
           </div>
           <div className="email-group">
           <div>
           <label>Company Name</label>
           </div>
           <div>
           <input
             type="text"
             name="companyName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.companyName}
           />
           </div>
           
            
           </div>
           
           <div className="name-group">
           <div>
           <label>Company Category</label>
           <div>
           <Field name="color" as="select">
             <option value="red">Red</option>
           <option value="green">Green</option>
             <option value="blue">Blue</option>
            
         </Field>
         </div>
           </div>
           <div>
           <label>Company Category</label>
           <div>
             <input
             type="text"
             name="companyName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.companyName}
           />
           
         </div>
           </div>
           
            
           </div>
           
          
           <div className="email-group">
           <div>
           <label>Message</label>
           </div>
           <div>
           <Field as="textarea"
             type="text"
             name="message"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.message}
           />
           </div>
           
            
           </div>
          
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
       )}
     </Formik>
     <div>
        
        </div>
        
        </div>
        <img src={bg} alt="img" />
        </div>
       </div>

       </div>

       
     </div>
    </>
  );
};

export default Start;
