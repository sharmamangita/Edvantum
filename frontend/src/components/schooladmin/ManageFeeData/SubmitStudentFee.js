import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import ReactTooltip from "react-tooltip";
import { Link } from 'react-router-dom';

class SubmitStudentFee extends Component {
    constructor(props){
        super(props);
        this.state = {
          records: [],
          totalAmount: 2000,
          tooltipOpen: false,
          startstyle: {
            color: 'red',
            fontSize: '14px'
          },
          isModalVisible2: false,
          selectedClass: '',
        }
    }

    componentDidMount(){
        let re = [
          {
            class: '1-A',
            feesForMonths: 'April May',
            feesPaid:'16000',
            amountPaid:'10000',
            paymentDate:'9-04-2021',
            notPaid:'6200'
          },
        ];
        this.setState({records: re})
    }

    field = () => {
        const fields = [
            {
              title: "Class",
              field: "class",
            },
            {
              title: "fees For Months",
              field: "feesForMonths",
            },
            {
              title: "Fees Paid",
              field: "feesPaid",
            },
            {
              title: "Amount Paid",
              field: "amountPaid",
            },
            {
              title: "Payment Date",
              field: "paymentDate",
            },
            {
              title: "Not Paid",
              field: "notPaid",
            }
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

    handleClose2 = () => {
        this.setState({selectedstudent:{}, isModalVisible2: false})
      }

    render() {
        return(
            <div>
                <div className="page-header">
                <h3 className="page-title"> Pay Fees </h3>
                <Link className="nav-link" to="/admin/submitstudentfee">
                    <button type="button"onClick={()=> this.setState({isModalVisible2: true})} className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>Previous Fee Records</button>
                </Link>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
								
                                <form className="forms-sample">
                                    {/* ================================================ */}
                                    <h4 className="card-title">Student Details</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <label className="col-sm-3 col-form-label">Name: </label>
                                                <div className="col-sm-9 col-form-label"><span>Jasmeen kour</span></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">Admission No.</label>
                                            <div className="col-sm-9 col-form-label"><span>30322</span></div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <label className="col-sm-3 col-form-label">Father Name: </label>
                                                <div className="col-sm-9 col-form-label"><span>Santinder Singh</span></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="row">
                                            <label className="col-sm-3 col-form-label">Class:</label>
                                            <div className="col-sm-9 col-form-label"><span>1-A</span></div>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Fees For Month<span style={this.state.startstyle}>*</span></label>
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
                                            <label className="col-sm-3 col-form-label">Year<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <select className="form-control">
                                                    <option>2022</option>
                                                    <option>2021</option>
                                                    <option>2020</option>
                                                    <option>2019</option>
                                                </select>
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    {/* ================================ here show dynamic filed ========================== */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Admission Fees<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Activity Fees<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Tution Fees<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Security Fees<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Sports Fees<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Late Fees<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Bus Fees<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    {/* ================================ here show dynamic filed end ========================== */}
                                    
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Concession Type<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Concession Apply<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Total Amount<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9 col-form-label">
                                                <sapn>40000</sapn>
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <h4 className="card-title">Payment Section</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Payment Date<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="date" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Payment Mode:<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                            <select className="form-control">
                                                <option>Cash</option>
                                                <option>UPI</option>
                                                <option>Cheque</option>
                                            </select>
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Bank Name: <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                            <select className="form-control">
                                                <option>HDFC</option>
                                            </select>
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Branch Name:<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Payable Amount<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Release Date: <span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control type="date" className="form-control" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Cheque Status:<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                            <select className="form-control">
                                                <option>open</option>
                                                <option>close</option>
                                            </select>
                                            </div>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5, float:'right'}}>Pay Fees</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">                 

                        </div>
                    </div>
                </div>

            {/* ================================= */}
            <Modal show={this.state.isModalVisible2} size="xl" onHide={() => this.handleClose2()}>
                <Modal.Header closeButton>
                    <h3 className="page-title">Previous Fee Records</h3>
                </Modal.Header>
                    <div className="card">
                        <div className="card-body">
                            <MaterialTable
                                title=""
                                data={this.state.records}
                                columns={this.field()}
                                options={{ search: false, paging: true, exportButton: true, }}
                                />
                        </div>
                    </div>
                <Modal.Footer style={{backgroundColor: '#ffffff'}}>
                  <div className="row">
                    <div className="col-sm-12">
                      <span>FEE ONCE PAID IS NOT REFUNDABLE</span>
                    </div>
                  </div>
                    <Button variant="secondary" onClick={() => this.handleClose2()}>
                        Print
                    </Button>
                    <Button variant="secondary" onClick={() => this.handleClose2()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* ================================= */}

            </div>
        )
    }
}

export default SubmitStudentFee;