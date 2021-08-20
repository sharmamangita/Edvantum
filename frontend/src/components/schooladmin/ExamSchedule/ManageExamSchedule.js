import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

class ManageExamSchedule extends Component {
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
			date:"19-7-2021",
            day: "monday",
            time: "11:00 to 12:15",
            I:"Eng",
            II:"Maths",
            III:"Hindi",
            IV:"Eng",
            V:"science"				
          },
          {
            _id: 2,
			date:"20-7-2021",
            day: "Tuesday",
            time: "11:00 to 12:15",
            I:"Eng",
            II:"Maths",
            III:"Hindi",
            IV:"-",
            V:"science"				
          },
          {
            _id: 3,
			date:"22-7-2021",
            day: "Thursday",
            time: "11:00 to 12:15",
            I:"-",
            II:"-",
            III:"GK",
            IV:"GK",
            V:"Maths"				
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
                title: "Date",
			    field: "date",
            },
			{
              title: "Day",
              field: "day"
            },
            {
              title: "Time",
              field: "time"
            },
            {
              title: "I",
              field: "I",
            },
            {
              title: "II",
              field: "II",
            },
            {
              title: "III",
              field: "III",
            },
            {
              title: "IV",
              field: "IV"
            },
            {
              title: "V",
              field: "V"
            },
            {
              name: "action",
              title: "Actions ",
              render: this.renderAction,
            },
        ];
        return fields;
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
                <h3 className="page-title"> Exam Schedule </h3>
                    <Link className="nav-link" to="/admin/addexamschedule">
                        <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>Add</button>
                    </Link>
                </div>
																 <div className="row">
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
																				<div className="col-md-3">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Session</label>
                                                <div className="col-sm-9">
                                                    <select className="form-control">
                                                        <option>2021-2022</option>
                                                        <option>2022-2023</option>
																												<option>2023-2024</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
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
            </div>
        )
    }
}

export default ManageExamSchedule;