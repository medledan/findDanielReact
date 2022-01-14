import React, { useState } from 'react';
import './contact.css';
import LargeButton from '../btns/LargeButton';

export default function Contact(props) {
  const { sectionText } = props;

  const [formData, setFormData] = useState({
    name: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name);
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const handleSubmit = e => {
    console.log('submitted');
    e.preventDefault();
  };

  return (
    <section id="contact" className="contactMe py-4 text-center">
      <div className="row">
        <div className="col-12">
          <LargeButton
            btnText="CONTACT ME"
            bootStrapBtnStyle="btn btn-lg btn-danger btn-outline-light"
            hrefTarget=""
            btnSize="btn-lg"
            btnMargin="mt-4"
            dataBsToggle="modal"
            dataBsTarget="#contactMeFormModal"
          />
        </div>
        <div className="col-12 mt-4">
          <a href="#header" className="to-top">
            {sectionText}
          </a>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <section
        className="modal fade"
        id="contactMeFormModal"
        tabIndex="-1"
        aria-labelledby="contactMeModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="contactMeModal">
                CONTACT
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                method="POST"
                action="https://docs.google.com/forms/d/1twHGZ4cDDDjFD68D8kKVU0gxhWV8t_OlBgf6oiOj_GU/formResponse"
                className="container-fluid"
                id="contactForm"
              >
                <div className="row mb-4">
                  <div className="col-sm-12 col-md-6 inputField form-group">
                    <input
                      type="text"
                      className="form-control mt-2"
                      id="name"
                      placeholder="Enter name"
                      name="entry.1190652405"
                      value={formData.name.entry}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <input
                      type="text"
                      className="form-control mt-2"
                      id="email"
                      placeholder="Enter email"
                      name="entry.1984352103"
                      value={formData.name.entry}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <textarea
                      className="form-control"
                      id="textArea"
                      rows="3"
                      placeholder="Message Me"
                      name="entry.1055495654"
                      value={formData.name.entry}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-lg btn-outline-light mr-4"
                data-bs-dismiss="modal"
              >
                CLOSE
              </button>
              <button
                type="submit"
                form="contactForm"
                data-bs-dismiss="modal"
                className="btn btn-lg btn-outline-light btn-danger"
                onSubmit={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
