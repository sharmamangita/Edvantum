import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import ReactTooltip from "react-tooltip";

class CreateFees extends Component {
    constructor(props){
        super(props);
        this.state = {
          records: [],
          totalAmount: 16200.00,
          tooltipOpen: false,
          startstyle: {
            color: 'red',
            fontSize: '14px'
          },
          isModalVisible: false,
          selectedClass: '',
        }
    }

    componentDidMount(){
        let re = [
          {
            particulars: 'Admission',
            amount: '10000.00',
          },
          {
            particulars: 'Tution',
            amount: '2000.00',
          },
          {
            particulars: 'Annual',
            amount: '2000.00',
          },
          {
            particulars: 'Sport',
            amount: '500.00',
          },
          {
            particulars: 'Activity',
            amount: '500',
          },
          {
            particulars: 'Security',
            amount: '1000',
          },
          {
            particulars: 'Late',
            amount: '200',
          },
        ];
        this.setState({records: re})
    }

    field = () => {
        const fields = [
            {
              title: "Particulars",
              field: "particulars",
            },
            {
              title: "Amount(Rs.)",
              field: "amount",
            },
            {
              name: "action",
              title: "Actions ",
              render: this.renderAction,
            },
        ];
        return fields;
    }
    
    renderAction = (props) => {
    
        return(
            <span>
              <ReactTooltip id='Edit' type='warning' effect='solid'>
                <span>Edit</span>
              </ReactTooltip>
                <button data-tip data-for="Edit" type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
                    <i className="mdi mdi-border-color" style={{fontSize:'17px'}}></i>
                </button>
                
              <ReactTooltip id='Delete' type='error' effect='solid'>
                <span>Delete</span>
              </ReactTooltip>
              
                <button data-tip data-for="Delete" type="button" className="btn btn-outline-danger" style={{padding:'8px'}}>
                    <i className="mdi mdi-delete"style={{fontSize:'17px'}}></i>
                </button>
            </span>
        )
    }

    render() {
        return(
            <div>
                <div className="page-header">
                <h3 className="page-title"> Create Fees </h3>
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
                                            <label className="col-sm-3 col-form-label">Class<span style={this.state.startstyle}>*</span></label>
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
                                            <label className="col-sm-3 col-form-label">Session:<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <select className="form-control">
                                                <option>2021 - 2022</option>
                                                <option>2020 - 2021</option>
                                                </select>
                                            </div>
                                        </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Months<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <DropdownMultiselect
                                                    options={["January", "February", "March", "April", "May", "June", "July", "August", "September","October","November","December"]}
                                                    name="Months"
                                                />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Last Fee Date <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="date" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    
                                
                                    {/* ================== associate teacher class======================= */}
                                    <h4 className="card-title">Fees Details</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Particular<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-5">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Amount (Rs.)<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    
                                        <div className="col-sm-1">
                                            <button type="submit" className="btn btn-primary ml-2" style={{lineHeight:1.5, float:'right', borderRadius:'25px', width:'45px'}}>+</button>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col">
                                            <MaterialTable
                                                title={"Total Amount = "+this.state.totalAmount +" -/-"}  
                                                data={this.state.records}
                                                columns={this.field()}
                                                options={{ search: false, paging: false, exportButton: true }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
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

export default CreateFees;