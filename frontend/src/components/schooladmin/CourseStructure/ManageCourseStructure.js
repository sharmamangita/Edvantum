import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
class ManageCourseStructure extends Component {
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
					selectedRoute: '',
        }
    }

    componentDidMount(){
        let re = [
          {
            _id: 1,
						subject:'English',
            syllabus:'Chapter-1,2',
						
          },
          {
            _id: 2,
						subject:'Hindi',
            syllabus:'Chapter-1,2',
          },
					{
            _id: 3,
						subject:'Maths',
            syllabus:'Lesson-1,2,3',
          },
        ];
        this.setState({records: re})
    }

    renderAction = (props) => {
    
        return(
          <span>
          <ReactTooltip id='Edit' type='warning' effect='solid'>
            <span>Edit</span>
          </ReactTooltip>
            <Link to="/admin/addbusroute">
						<button data-tip data-for="Edit" type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
                <i className="mdi mdi-border-color" style={{fontSize:'17px'}}></i>
            </button></Link>
            
          <ReactTooltip id='Delete' type='error' effect='solid'>
            <span>Delete</span>
          </ReactTooltip>
          
            <button data-tip data-for="Delete" type="button" className="btn btn-outline-danger" style={{padding:'8px'}}>
                <i className="mdi mdi-delete"style={{fontSize:'17px'}}></i>
            </button>
        </span>
        )
    }

    DeactiveAction = (props, index) => {
    
        return(
          <span>
            <ReactTooltip id='activate' type='error' effect='solid'>
                <span>Activate/Deactive</span>
              </ReactTooltip>  
            <span  data-tip data-for="activate" className="form-check form-check-danger" style={{display:'inline-flex'}}>
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
              title: "Subject",
							field: "subject",
            },
						{
              title: "Syllabus",
							field: "syllabus",
            },
						{
              name: "action",
              title: "Actions ",
              render: this.renderAction,
            },
        ];
        return fields;
    }

    DriverHyperlink = (props) => {
        return(
          <>
          <Link to="/admin/busdata">{props.driver}</Link>
          </>
        )
    }

    studentHyperlink = (props) => {
        return(
          <>
          <Link to="/admin/busdata">{props.student}</Link>
          </>
        )
    }
		routeHyperlink = (props) => {
      return(
        <span>
          <ReactTooltip id='subjects' type='warning' effect='solid'>
              <span>show route details</span>
          </ReactTooltip>
          <button data-tip data-for="subjects" onClick={() => this.setState({selectedRoute:props.routeNo, isModalVisible: !this.state.isModalVisible})} type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
						{props.routeNo}
          </button>    
        </span>
      )
  }

  handleClose = () => {
    this.setState({selectedClass:"", isModalVisible: false})
  }

    render() {
        return(
            <div>
                <div className="page-header">
                <h3 className="page-title"> Course Structure </h3>
								<Link className="nav-link" to="/admin/addcoursestructure">
										<button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>Add</button>
								</Link>
                </div>
								 <div className="row">
																				<div className="col-md-3">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Class: </label>
                                                <div className="col-sm-9">
                                                    <select className="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
																												<option>3</option>
																												<option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
																				<div className="col-md-3">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Term: </label>
                                                <div className="col-sm-9">
                                                    <select className="form-control">
                                                        <option>I</option>
                                                        <option>II</option>
																												<option>III</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
								</div>		
								<div	className="row col-12">
									<div className="d-sm-flex justify-content-xl-between align-items-center mb-2 col-8">
										<label className="col-sm-6 col-form-label">Perioid: April 2021 - June 2021</label>
										
										<label className="col-sm-3 col-form-label">Marks: 30</label>
										
									</div>
								</div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                                           
                            <MaterialTable
                            title=""
                            data={this.state.records}
                            columns={this.field()}
                            options={{ search: true, paging: true, exportButton: true }}
                            />
                        </div>
                    </div>
                </div>
								{/* ================================= */}
								<Modal show={this.state.isModalVisible} onHide={() => this.handleClose()}>
										<Modal.Header closeButton>
										<h3 className="page-title"> {this.state.selectedRoute} </h3>
										</Modal.Header>
										<div className="card">
												<div className="card-body">
														<form>
															<div className="row">
																<span className="col-md-6">
																		Bus No./Id : SN001
																</span>
																<span className="col-md-6">
																		Time : 8:00AM - 3:00PM
																</span>
															</div>
																<div className="row">
																		<span className="col-sm-12">
																			Operates on : Mon, Tue, Wed, Thurs, Fri
																		</span>
																</div>
																<div className="row">
																		<span className="col-md-6">
																				Bus Driver : <Link>Ram Singh</Link>
																		</span>
																		<span className="col-md-6">
																				Bus Monitor : <Link>Meena</Link>
																		</span>
																</div>
																<div className="row">
																		<span className="col-md-6">
																				Capacity : 20
																		</span>
																		<span className="col-md-6">
																				Students : <Link>20</Link>
																		</span>
																</div>
																<div className="row">
																		<span className="col-md-12">
																				Start From : 20
																		</span>
																</div>
																<div className="row">
																		<span className="col-md-12">
																				Stop At(Destination) : Sector-14, Sector-15, Sector-16
																		</span>
																</div>
																<div className="row">
																		<span className="col-md-12">
																				Status : Active
																		</span>
																</div>
														</form>
												</div>
										</div>
										<Modal.Footer style={{backgroundColor: '#ffffff'}}>
											<Button variant="primary">
												Edit
											</Button>
											<Button variant="secondary" onClick={() => this.handleClose()}>
												Close
											</Button>
										</Modal.Footer>
								</Modal>
            {/* ================================= */}
            </div>
        )
    }
}

export default ManageCourseStructure;