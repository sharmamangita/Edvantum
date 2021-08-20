import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

class AddStaff extends Component {
    constructor(props){
        super(props);
        this.state = {
          records: [],
          tooltipOpen: false,
          startstyle: {
            color: 'red',
            fontSize: '14px'
          },
          isModalVisible: false,
          selectedClass: '',
        }
    }

    render() {
        return(
            <div>
                <div className="page-header">
                <h3 className="page-title"> Add Staff </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
														<h4 className="card-title">Add Staff Member</h4>
                                <form className="forms-sample">
                                    {/* ================================================ */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">First Name <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" placeholder="First Name" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Last Name <span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
                                                    <Form.Control type="text" placeholder="Last Name" />
                                                </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Mobile No. <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control  type="number" placeholder="Mobile No." />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Email <span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
                                                    <Form.Control type="email" placeholder="Enter Email" />
                                                </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    
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
                        
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Address</label>
                                                <div className="col-sm-9">
                                                <Form.Control type="text"/>
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
                                    {/* ================== associate teacher class======================= */}
                                    <h4 className="card-title">Associate Teacher With Class & Subjects</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Class <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <DropdownMultiselect
                                                    options={["1-A","1-B","2-A","2-B","2-C","3-A","3-B","4-A","4-B"]}
                                                    name="Classes"
                                                />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-5">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Subject <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <DropdownMultiselect
                                                    options={["English", "Yoga", "Math", "Music", "Drawing"]}
                                                    name="Subjects"
                                                />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-1">
                                            <button type="submit" className="btn btn-primary ml-2" style={{lineHeight:1.5, float:'right', borderRadius:'25px', width:'45px'}}>+</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Class Teacher{/*<span style={this.state.startstyle}>*</span>*/}</label>
                                            <div className="col-sm-9">
                                                <select className="form-control">
                                                    <option>math</option>
                                                    <option>english</option>
                                                </select>
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Subject Head{/*<span style={this.state.startstyle}>*</span>*/}</label>
                                            <div className="col-sm-9">
                                                <select className="form-control">
                                                    <option>math</option>
                                                    <option>english</option>
                                                </select>
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <Form.Group className="col-md-12">
                                        <label htmlFor="exampleTextarea1">Introduction About Teacher</label>
                                        <textarea className="form-control" id="exampleTextarea1" placeholder="150-200 words" rows="4"></textarea>
                                    </Form.Group>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5, float:'right'}}>Submit</button>
                                        </div>
                                    </div>
                                    {/* ========================================================== */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddStaff;