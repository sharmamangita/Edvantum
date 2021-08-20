import React, {Component} from 'react';
import { Form } from 'react-bootstrap';

class AddClass4Employees extends Component {
    constructor(props){
        super(props);
        this.state = {
          tooltipOpen: false,
          startstyle: {
            color: 'red',
            fontSize: '14px'
          },
          isModalVisible: false,
        }
    }

    render() {
        return(
            <div>
                <div className="page-header">
                <h3 className="page-title"> Class 4 Employees </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
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
                                            <label className="col-sm-3 col-form-label">Category <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                            <select className="form-control">
                                                <option>Driver</option>
                                                <option>Peon</option>
                                                <option>guard</option>
                                                <option>Gate Keeper</option>
                                            </select>
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5, float:'right'}}>Add</button>
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

export default AddClass4Employees;