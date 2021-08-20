import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import bsCustomFileInput from 'bs-custom-file-input';
import { HexColorPicker } from "react-colorful";
// import "react-colorful/dist/index.css";

class AddSchool extends Component {
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
              <h3 className="page-title"> Setup New School  </h3>
            </div>
            <div className="row">

              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">School Info</h4>
                    <form className="forms-sample">
                        <Form.Group>
                            <label htmlFor="exampleInputName1">School Name <span style={this.state.startstyle}>*</span> </label>
                            <Form.Control type="text" className="form-control" id="exampleInputName1" placeholder="Name" />
                        </Form.Group>
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

                        {/* ===================================== principal ================================== */}
                        <h4 className="card-title">Principal info</h4>
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
                        {/* ===================================== /principal/ ================================== */}

                        {/* ===================================== logo/color scheme for schools ====================================== */}
                        
                        <h4 className="card-title">logo/color scheme for school</h4>
                        <Form.Group>
                            <label>School logo <span style={this.state.startstyle}>*</span></label>
                            <div className="custom-file">
                            <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es"/>
                            <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                            </div>
                        </Form.Group>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="row">
                                <label className="col-sm-4 col-form-label">Background color <span style={this.state.startstyle}>*</span></label>
                                <div className="col-sm-8">
                                  <Form.Control type="text" className="form-control" id="exampleInputName1" value={this.state.color} placeholder="Name" />
                                  <HexColorPicker color={this.state.color} onChange={(e) => this.setState({color: e})} />
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="row">
                                    <label className="col-sm-4 col-form-label">Font color <span style={this.state.startstyle}>*</span></label>
                                    <div className="col-sm-8">
                                      <Form.Control type="text" className="form-control" id="exampleInputName1" value={this.state.fontcolor} placeholder="Name" />
                                      <HexColorPicker color={this.state.fontcolor} onChange={(e) => this.setState({fontcolor: e})} />
                                    </div>
                                </Form.Group>
                            </div>
                        </div>

                        {/* ===================================== / logo/color scheme for schools / ====================================== */}

                        {/* ========================================================== */}
                        <h4 className="card-title">Admin Info</h4>
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
                        <div className="row">
                          <div className="col-md-6">
                            <Form.Group className="row">
                              <label className="col-sm-3 col-form-label">UserName <span style={this.state.startstyle}>*</span></label>
                              <div className="col-sm-9">
                              <Form.Control type="text"/>
                              </div>
                            </Form.Group>
                          </div>
                          <div className="col-md-6">
                            <Form.Group className="row">
                              <label className="col-sm-3 col-form-label">Password <span style={this.state.startstyle}>*</span></label>
                              <div className="col-sm-9">
                              <Form.Control type="password"/>
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

export default AddSchool;