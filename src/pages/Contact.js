import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <h2 className="my-5">GET IN TOUCH</h2>
        <div className="row">
          <div className="col-lg-6">
            <form action="#" method="post">
              <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                  <div className="col-md-6">
                    <label htmlFor="lname" className="text-black">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="lname"
                      className="form-control"
                      name="lname"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="name" className="text-black">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      name="name"
                    />
                  </div>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="email" className="text-dark">
                    Email <span className="text-danger">*</span>
                  </label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="text" className="text-dark">
                    Subject <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="form-group col-md-12">
                  <label htmlFor="email" className="text-dark">
                    Email <span className="text-danger">*</span>
                  </label>
                  <textarea className="form-control" cols="30" rows="7" />
                </div>

                <button className="buttons w-100" type="submit">
                  Send Massage
                </button>
              </div>
            </form>
          </div>
          {/* the right side of the page  */}
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h6 style={{ color: "#7971ea" }}>NEW YORK</h6>
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
            </div>
            <div className="card my-4">
              <div className="card-body">
                <h6 style={{ color: "#7971ea" }}>Tehran</h6>
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h6 style={{ color: "#7971ea" }}>DAMAVAND</h6>
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
