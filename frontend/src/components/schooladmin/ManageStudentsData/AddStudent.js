import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import { HexColorPicker } from "react-colorful";
// import "react-colorful/dist/index.css";

class AddStudent extends Component {
    state = {
        startDate: new Date(),
        color: '#ffffff',
        fontcolor: '#ffffff',
        startstyle: {
          color: 'red',
          fontSize: '14px'
        }
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
      componentDidMount() {
        bsCustomFileInput.init()
        }

      render() {
        return (
          <div>
            <div className="page-header">
              <h3 className="page-title"> Add Student  </h3>
            </div>
            <div className="row">
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Student Info</h4>
                    <form className="forms-sample">

                        <div className="row">
                        <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">Admission No.<span style={this.state.startstyle}>*</span></label>
                                <div className="col-sm-9">
                                    <Form.Control  type="text" />
                                </div>
                                </Form.Group>
                            </div>
                          <div className="col-md-6">
														<Form.Group className="row">
																<label className="col-sm-3 col-form-label">Admission Date<span style={this.state.startstyle}>*</span></label>
																<div className="col-sm-9">
                                    <Form.Control  type="date" />
                                </div>
														</Form.Group>
                          </div>
                        </div>

												<div className="row">
														<div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">First Name <span style={this.state.startstyle}>*</span></label>
                                <div className="col-sm-9">
                                    <Form.Control  type="text" />
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Last Name <span style={this.state.startstyle}>*</span></label>
                                    <div className="col-sm-9">
                                        <Form.Control type="text" />
                                    </div>
                                </Form.Group>
                            </div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<Form.Group className="row">
															<label className="col-sm-3 col-form-label">Date of Birth</label>
															<div className="col-sm-9">
															<DatePicker className="form-control w-100"
																selected={this.state.startDate}
																onChange={this.handleChange}
															/>
															</div>
														</Form.Group>
													</div>
													<div className="col-md-6">
														<Form.Group className="row">
															<label className="col-sm-3 col-form-label"> Photo <span style={this.state.startstyle}>*</span></label>
															<div className="custom-file col-sm-9">
																<Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
																<label className="custom-file-label" htmlFor="customFileLang">Browse</label>
															</div>
														</Form.Group>
													</div>
												</div>
												<div className="row">
													<div className="col-md-6">
														<Form.Group className="row">
															<label className="col-sm-3 col-form-label">Gender</label>
															<div className="col-sm-9">
																<select className="form-control">
																	<option>Male</option>
																	<option>Female</option>
																</select>
															</div>
														</Form.Group>
													</div>
                          <div className="col-md-6">
														<Form.Group className="row">
																<label className="col-sm-3 col-form-label">Class <span style={this.state.startstyle}>*</span></label>
																<div className="col-sm-9">
																	<select className="form-control">
																		<option>1</option>
																		<option>2</option>
																	</select>
																</div>
														</Form.Group>
                          </div>
                        </div>
												<div className="row">
													<div className="col-md-6">
														<Form.Group className="row">
															<label className="col-sm-3 col-form-label">Session Start from</label>
															<div className="col-sm-9">
                                <Form.Control type="date" />
                              </div>
														</Form.Group>
													</div>
                        </div>
												
												
                        {/* ===================================== Father ================================== */}
                        <h4 className="card-title">Father's Details</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">First Name <span style={this.state.startstyle}>*</span></label>
                                <div className="col-sm-9">
                                    <Form.Control  type="text" />
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Last Name <span style={this.state.startstyle}>*</span></label>
                                    <div className="col-sm-9">
                                        <Form.Control type="text" />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">Mobile No. <span style={this.state.startstyle}>*</span></label>
                                <div className="col-sm-9">
                                    <Form.Control  type="number" />
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Email <span style={this.state.startstyle}>*</span></label>
                                    <div className="col-sm-9">
                                        <Form.Control type="email" />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
												
												{/* ===================================== mother ================================== */}
                        <h4 className="card-title">Mother's Details</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">First Name <span style={this.state.startstyle}>*</span></label>
                                <div className="col-sm-9">
                                    <Form.Control  type="text" />
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Last Name <span style={this.state.startstyle}>*</span></label>
                                    <div className="col-sm-9">
                                        <Form.Control type="text" />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">Mobile No. <span style={this.state.startstyle}>*</span></label>
                                <div className="col-sm-9">
                                    <Form.Control  type="number" />
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-3 col-form-label">Email <span style={this.state.startstyle}>*</span></label>
                                    <div className="col-sm-9">
                                        <Form.Control type="email" />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
												{/* =================================== Address ================================= */}
                        <h4 className="card-title">Address</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">Country <span style={this.state.startstyle}>*</span></label>
                                <div className="col-sm-9">
                                  <select className="form-control">
                                    <option>India</option>
                                    <option>Italy</option>
                                    <option>Russia</option>
                                    <option>Britain</option>
                                  </select>
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                              <Form.Group className="row">
                                  <label className="col-sm-3 col-form-label">State <span style={this.state.startstyle}>*</span></label>
                                  <div className="col-sm-9">
                                    <select className="form-control">
                                      <option>Punjab</option>
                                      <option>Bihar</option>
                                    </select>
                                  </div>
                              </Form.Group>
                            </div>
                        </div>
												<div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                  <label className="col-sm-3 col-form-label">City <span style={this.state.startstyle}>*</span></label>
                                  <div className="col-sm-9">
                                    <Form.Control type="text" className="form-control" id="exampleInputCity1" placeholder="Location" />
                                  </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                              <Form.Group className="row">
                                  <label className="col-sm-3 col-form-label">Pin code <span style={this.state.startstyle}>*</span></label>
                                  <div className="col-sm-9">
                                    <Form.Control type="text" className="form-control" id="exampleInputName12" placeholder="Pin code" />
                                  </div>
                              </Form.Group>
                            </div>
                        </div>
                        <Form.Group> 
                            <label htmlFor="exampleTextarea1">Address <span style={this.state.startstyle}>*</span></label>
                            <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                        </Form.Group>
												{/* =================================== other Details ============================== */}
												<h4 className="card-title">Other Details</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">Concession id<span style={this.state.startstyle}>*</span></label>
                                <div className="col-sm-9">
                                  <select className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                  </select>
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                              <Form.Group className="row">
                                  <label className="col-sm-3 col-form-label">Category <span style={this.state.startstyle}>*</span></label>
                                  <div className="col-sm-9">
                                    <select className="form-control">
                                      <option>type 1</option>
                                      <option>type 2</option>
                                    </select>
                                  </div>
                              </Form.Group>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">Status <span style={this.state.startstyle}>*</span></label>
                                <div className="col-sm-9">
                                  <select className="form-control">
                                    <option>on</option>
                                    <option>off</option>
                                  </select>
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                              <Form.Group className="row">
                                  <label className="col-sm-3 col-form-label">Passed Out <span style={this.state.startstyle}>*</span></label>
                                  <div className="col-sm-9">
                                    <Form.Control type="date" />
                                  </div>
                              </Form.Group>
                            </div>
                        </div>
                        {/* ===================================================================== */}
                        {/* =================================== Bus============================== */}
												<h4 className="card-title">Bus/Private</h4>
												<div className="row">
												<div className="col-md-6">
													<Form.Group>
													<div className="form-check">
														<label className="form-check-label">
															<input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" defaultChecked/>
															<i className="input-helper"></i>
															Bus
														</label>
													</div>
													</Form.Group>
												</div>
												<div className="col-md-6">
													<Form.Group>
													<div className="form-check">
														<label className="form-check-label">
															<input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" defaultChecked/>
															<i className="input-helper"></i>
															Private
														</label>
													</div>
													</Form.Group>
												</div>
												</div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-3 col-form-label">Route<span style={this.state.startstyle}>*</span></label>
                                <div className="col-sm-9">
                                  <select className="form-control">
                                    <option>Please select Route</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                  </select>
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                              <Form.Group className="row">
                                  <label className="col-sm-3 col-form-label">Destination<span style={this.state.startstyle}>*</span></label>
                                  <div className="col-sm-9">
                                    <select className="form-control">
                                      <option>Please select Destination</option>
                                      <option>type 1</option>
                                      <option>type 2</option>
                                    </select>
                                  </div>
                              </Form.Group>
                            </div>
                        </div>
                        

                        {/* ========================================================== */}
                      <button type="submit" className="btn btn-primary mr-2">Submit</button>
                      <button className="btn btn-light">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
}

export default AddStudent;