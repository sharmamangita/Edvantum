import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

class TimeTable extends Component {
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

    componentDidMount(){
        let re = [
          {
            _id: 1,
            day: 'Monday',
						c1: 'English(Harsimran)',
						c2: 'S.St(Maninder)',
						c3: 'Punjabi(Parminder)',
						c4: 'Science(Nidhi)',
						c5: 'Math(Japreet)',
						c6: '',
						cx: 'Snack time'
					},
          {
            _id: 2,
            day: 'Tuesday',
						c1: 'Music(Vinod)',
						c2: 'Science(Nidhi)',
						c3: 'Art & Craft(Shwetank)',
						c4: 'Computer(Shalini)',
						c5: 'GK(Anju)',
						c6: '',
						cx: 'Snack time'
					},
          {
            _id: 3,
            day: 'Wednesday',
						c1: 'French(Ankita)',
						c2: 'English(Harsimran)',
						c3: 'S.St(Maninder)',
						c4: 'Math(Japreet)',
						c5: 'Punjabi(Parminder)',
						c6: '',
						cx: 'Snack time'
					},
          {
            _id: 4,
            day: 'Thursday',
						teacher: 'S.St(Maninder)',
						c1: 'S.St(Maninder)',
						c2: 'French(Ankita)',
						c3: 'English(Harsimran)',
						c4: 'Math(Japreet)',
						c5: 'Hindi(Parminder)',
						c6: ''
					},
          {
            _id: 5,
            day: 'Friday',
						c1: 'Hindi(Parminder)',
						c2: 'Physical Edu.(Sunita)',
						c3: 'Science(Nidhi)',
						c4: 'Math(Japreet)',
						c5: 'GK(Anju)',
						c6: 'Computer(Shalini)',
						cx: 'Snack time'
					},
					{
            _id: 6,
            day: 'Friday',
						c1: 'Hindi(Parminder)',
						c2: 'Physical Edu.(Sunita)',
						c3: 'Science(Nidhi)',
						c4: 'Math(Japreet)',
						c5: 'GK(Anju)',
						c6: '',
						cx: 'Snack time'
					}
        ];
        this.setState({records: re})
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



    field = () => {
        const fields = [
            {
              title: "Day",
              field: "day",
            },
            {
              title: "8:40-9:20",
              field: "c1",
            },
						{
              title: "9:30-10:10",
              field: "c2",
            },
						{
              title: "10:20-10:55",
              field: "c3",
            }
						,{
              title: "10:55-11:15",
              field: "cx",
            }
						,{
              title: "11:15-11:50",
              field: "c4",
            },
						{
              title: "12:00-12:40",
              field: "c5",
            },
						{
              title: "12:50-1:30",
              field: "c6",
            },

            {
              name: "action",
              title: "Actions ",
              width: "0%",
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
                <h3 className="page-title"> Time Tables </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Form.Group className="row">
                                                <label className="col-sm-12 col-form-label">Select Class<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-12">
                                                    <select className="form-control">
                                                        <option>1-A</option>
                                                        <option>1-B</option>
																												<option>2-A</option>
																												<option>2-B</option>
                                                        <option>2-C</option>
                                                        <option>3-A</option>
																												<option>3-B</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
																				<div className="col-md-3">
                                            <Form.Group className="row">
                                                <label className="col-sm-12 col-form-label">Subject<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-12">
                                                    <select className="form-control">
                                                        <option>English</option>
                                                        <option>Hindi</option>
                                                        <option>History</option>
                                                        <option>Maths</option>
																												<option>Science</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
																				<div className="col-md-3">
                                            <Form.Group className="row">
                                                <label className="col-sm-12 col-form-label">Teacher<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-12">
                                                    <select className="form-control">
                                                        <option>Shalini Devi</option>
                                                        <option>Ravinder Kumar</option>
                                                        <option>Gaurav Sharma</option>
                                                        <option>Pratibha Kumari</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
																				<div className="col-md-3">
                                            <Form.Group className="row">
                                                <label className="col-sm-12 col-form-label">Day<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-12">
                                                    <select className="form-control">
                                                        <option>Monday</option>
                                                        <option>Tuesday</option>
                                                        <option>Wednesday</option>
                                                        <option>Thursday</option>
																												<option>Friday</option>
																												<option>Saturday</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
																				
                                        <div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-12 col-form-label">Time<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-5">
                                                <Form.Control
                                                    type="time"
                                                    format="hh:mm"
                                                    name="recordingDepartureTime"
                                                    placeholder="Start Time"
                                                />
                                            </div>
																						<div className="col-sm-1 mt-3"> to </div>
																						<div className="col-sm-5">
                                                <Form.Control
                                                    type="time"
                                                    format="hh:mm"
                                                    name="recordingDepartureTime"
                                                    placeholder="Start Time"
                                                />
                                            </div>
                                            </Form.Group>
                                        </div>
										
                                        
                                        <div className="col-md-2 mt-5">
                                        <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>Add</button>
                                        </div>
																				
                                    </div>

                                    {/* ========================================================== */}
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                        <nav aria-label="breadcrumb">
                          <Form.Group className="row mt-2 ml-1">
                              <label className="col-sm-1 col-form-label">Select Class</label>
                              <div className="col-sm-5">
                                <select className="form-control">
                                  <option>1-A</option>
                                  <option>1-B</option>
                                  <option>2-A</option>
                                </select>
                              </div>
                            </Form.Group>           
                          </nav>                     
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

            {/* ================================= */}
            </div>
        )
    }
}

export default TimeTable;