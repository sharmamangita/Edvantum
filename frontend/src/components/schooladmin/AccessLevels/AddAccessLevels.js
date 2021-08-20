import React, {Component} from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

class AddAccessLevels extends Component {
    constructor(props){
        super(props);
        this.state = {
          records: [],
          tooltipOpen: false,
          startstyle: {
            color: 'red',
            fontSize: '14px'
          },
        }
    }

    componentDidMount(){
        let re = [
          {
            _id: 1,
            user: "Anil Sharma",
            category: 'Admin',
            access: "Fees, Bus"
          },
          {
            _id: 2,
            user: "Ram Singh",
            category: 'Accounts',
            access: "Fees"
          },
        ];
        this.setState({records: re})
    }

    renderAction = (props) => {
    
        return(
            <span>
                <button type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
                    <i className="mdi mdi-border-color" style={{fontSize:'17px'}}></i>
                </button>

                <button type="button" className="btn btn-outline-danger" style={{padding:'8px'}}>
                    <i className="mdi mdi-delete"style={{fontSize:'17px'}}></i>
                </button>
            </span>
        )
    }
    DeactiveAction = (props, index) => {
    
        return(
          <span>  
            <span className="form-check form-check-danger" style={{display:'inline-flex'}}>
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" defaultChecked />
                <i className="input-helper"></i>
              </label>
            </span>
          </span>
        )
    }

    field = () => {
        const fields = [
            {
                name: "action",
                title: "",
                width: "0%",
                align:"center",
                render: this.DeactiveAction,
            },
            {
              title: "User",
              field: "user",
            },
            {
              title: "Category",
              field: "category",
            },
            {
              title: "Access",
              field: "access",
            },
            {
              name: "action",
              title: "Actions ",
              render: this.renderAction,
            },
        ];
        return fields;
    }

    handleClose = () => {
        this.setState({selectedClass:"", isModalVisible: false})
    }

    render() {
        return(
            <div>
                <div className="page-header">
                <h3 className="page-title"> Create School Sub-Admin </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample">

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

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Select Category<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
                                                    <select className="form-control">
                                                        <option>Teacher</option>
                                                        <option>Accountant</option>
                                                        <option>Admin</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Select User<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
                                                    <select className="form-control">
                                                        <option>Ram</option>
                                                        <option>Sham</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <h4 className="card-title">Give Access for :</h4>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <Form.Group>
                                            <div className="form-check form-check-success">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" defaultChecked /> Dashboard 
                                                    <i className="input-helper"></i>
                                                </label>
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6">
                                            <Form.Group>
                                            <div className="form-check form-check-success">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" defaultChecked /> Mangage Classes 
                                                    <i className="input-helper"></i>
                                                </label>
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6">
                                            <Form.Group>
                                            <div className="form-check form-check-success">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" defaultChecked /> Manage Student Data 
                                                    <i className="input-helper"></i>
                                                </label>
                                            </div>
                                            </Form.Group>
                                        </div>

                                        <div className="col-sm-6">
                                            <Form.Group>
                                            <div className="form-check form-check-success">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" defaultChecked /> Manage Subjects 
                                                    <i className="input-helper"></i>
                                                </label>
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6">
                                            <Form.Group>
                                            <div className="form-check form-check-success">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" defaultChecked /> Manage Staff Data 
                                                    <i className="input-helper"></i>
                                                </label>
                                            </div>
                                            </Form.Group>
                                        </div>

                                        <div className="col-sm-6">
                                            <Form.Group>
                                            <div className="form-check form-check-success">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" defaultChecked /> Manage Fee Data 
                                                    <i className="input-helper"></i>
                                                </label>
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12">
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

export default AddAccessLevels;