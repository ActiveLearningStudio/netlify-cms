import React from "react";
import { Formik, Field, TextArea } from "formik";
import bg from "../../assets/images/HomePageSVG.svg";

const Start = ({data}) => {
  console.log(data);
  return (
    <>
      <div className="start-section">
        <h2 className="start-title">{data.frontmatter.startCurriki_heading}</h2>
        <div className="start-content">
          <div className="start-content-btn">
            {data.frontmatter.startDemos.demo.map((demo)=>{
              return (
                <div className="demo-title">
                <h3 className="start-damo">
                  {/* Try our  */}
                  <span> {demo.demo_title}</span>
                </h3>
                <a href={demo.demos_btn.demoBtn_url} className="damo-btn">
                 {demo.demos_btn.demoBtn_text}
                </a>
              </div>
              )
            
            })}
            
            
          </div>

          <div className="start-content-contact-us">
            <h3 className="content-title">Contact us</h3>
            <p className="content-text">
              Want to learn more about how CurrikiStudio can work for your
              organization?
            </p>
            <div className="main-content">
              <div className="contact-us-form">
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    fname: "",
                    lname: "",
                    companyName: "",
                    componayCategory: "",
                    jobTitle: "",
                    message: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Please complete this required field.";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
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
                          <div>
                            <input
                              className="input-FN"
                              type="text"
                              name="fname"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.fname}
                            />
                          </div>
                        </div>
                        <div className="">
                          <label>Last Name</label>
                          <div>
                            <input
                              className="input-FN"
                              type="text"
                              name="fname"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.fname}
                            />
                          </div>
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
                          <p className="errer">
                            {errors.email && touched.email && errors.email}
                          </p>
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

                      <div className="slect-group">
                        <div>
                          <label>Company Category</label>
                          <div>
                            <Field
                              name="color"
                              as="select"
                              className="option-fild"
                            >
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
                          <Field
                            className="text-msm"
                            as="textarea"
                            type="text"
                            name="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                          />
                        </div>
                      </div>

                      <button
                        className="submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </form>
                  )}
                </Formik>
                <div></div>
              </div>
              <img className="content-img" src={bg} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
