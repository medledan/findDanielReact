import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contactMe py-4 text-center">
      <div className="row">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-lg btn-danger btn-outline-light"
            data-bs-toggle="modal"
            data-bs-target="#contactMeForm"
          >
            CONTACT ME
          </button>
        </div>
        <div className="col-12 mt-4">
          <a href="#header" className="to-top">
            BACK TO TOP
          </a>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <section
        className="modal fade"
        id="contactMeForm"
        tabindex="-1"
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
              <form className="container-fluid">
                <div className="row mb-4">
                  <div className="col-sm-12 col-md-6 inputField form-group">
                    <input
                      type="text"
                      className="form-control mt-2"
                      id="name"
                      placeholder="Enter name"
                      name="name"
                    />
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <input
                      type="text"
                      className="form-control mt-2"
                      id="email"
                      placeholder="Enter email"
                      name="email"
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
                form="fakeForm"
                formaction="fakeURL.com"
                data-bs-dismiss="modal"
                className="btn btn-lg btn-outline-light btn-danger"
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
