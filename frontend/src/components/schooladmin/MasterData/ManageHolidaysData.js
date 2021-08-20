import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

import * as actions from '../../redux/actions/holidays';
import SimpleReactValidator from 'simple-react-validator';
import { ToastContainer, toast } from "react-toastify";
import { connect } from 'react-redux';

class ManageHolidaysData extends Component {
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

          _id:"",
          festival:"",
          dateFrom:"",
          dateTo:""

        }
        this.validator = new SimpleReactValidator({autoForceUpdate: this})
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
    }

    componentDidMount(){
      this.props.getHolidayList()
    }
		
    componentWillReceiveProps(nextProps){
      this.setState({records: nextProps.list})
      console.log(nextProps.list)
      if(nextProps.error){
        toast.error(nextProps.msg.toString(), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      } else if(nextProps.success && nextProps.msg){
        toast.success(nextProps.msg.toString(), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }
      nextProps.eraseMsg()
    }
    

    renderAction = (props) => {
    
        return(
            <span>
              <ReactTooltip id='Edit' type='warning' effect='solid'>
                <span>Edit</span>
              </ReactTooltip>
                <button data-tip data-for="Edit" onClick={()=> this.editHoliday(props)} type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
                    <i className="mdi mdi-border-color" style={{fontSize:'17px'}}></i>
                </button>
                
              <ReactTooltip id='Delete' type='error' effect='solid'>
                <span>Delete</span>
              </ReactTooltip>
              
                <button data-tip data-for="Delete" onClick={()=> this.props.deleteHoliday(props._id)} type="button" className="btn btn-outline-danger" style={{padding:'8px'}}>
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
								<input type="checkbox" className="form-check-input" checked={props.active} onClick={()=> this.props.activateHoliday({_id: props._id, activate: !props.active})} />
								<i className="input-helper"></i>
							</label>
						</span>
					</span>
				)
		}

    editHoliday = (props) => {
      let {
        _id,
        festival,
        dateFrom,
        dateTo
      } = props;
      this.setState({
        _id,
        festival,
        dateFrom,
        dateTo
      })
    }

    ShowSubjects = (props) => {
        console.log(props)
        return(
            <span>
                <button onClick={() => this.setState({selectedClass:props.classes, isModalVisible: !this.state.isModalVisible})} type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
                    <i className="mdi mdi-link-variant" style={{fontSize:'17px'}}></i>
                </button>    
            </span>
        )
    }

    field = () => {
        const fields = [
						{
							// name: "",
							// field: "Deactive",
							name: "action",
							title: "",
							width: "0%",
							align:"center",
							render: this.DeactiveAction,
						},
            {
              title: "Festivals",
              field: "festival",
            },
						{
              title: "Start Date(s)",
              field: "dateFrom",
            },
						{
              title: "End Date(s)",
              field: "dateTo",
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

    // ================================================== coding part =========================================

    handleChanges = (event) =>{
      const { name, value } =  event.target;
      this.setState({
        [name]: value
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      let {
        _id,
        festival,
        dateFrom,
        dateTo
      } = this.state;
      if(this.validator.allValid()){
        this.validator.hideMessages();
        if(this.state._id){
          this.props.editHoliday({
            _id,
            festival,
            dateFrom,
            dateTo
          })
        } else {
          this.props.createHoliday({
            festival,
            dateFrom,
            dateTo
          })
        }
        this.cleanFields()
      } else {
        this.validator.showMessages();
      }
    }

    cleanFields = () => {
      this.setState({
        _id:"",
          festival:"",
          dateFrom:"",
          dateTo:""
      })
    }

    // =================================================/ coding part /========================================

    render() {
        return(
            <div>
                <div className="page-header">
                <h3 className="page-title"> Master Data </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample" onSubmit={this.handleSubmit}>
								{/* =================================== Add holiday============================== */}
									<h4 className="card-title">Add Holiday</h4>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Form.Group className="row">
                                            <label className="col-sm-12 col-form-label">Festival<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-12">
                                                <Form.Control name="festival" value={this.state.festival} onChange={this.handleChanges} type="text" />
                                                {this.validator.message('festival', this.state.festival, 'required', {className:"text-danger"})}
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-12 col-form-label">Date<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-5">
                                                <Form.Control name="dateFrom" value={this.state.dateFrom} onChange={this.handleChanges} type="date" />
                                                {this.validator.message('startDate', this.state.dateFrom,'required',{className:"text-danger"})}
                                            </div>
																						<div className="col-sm-1 mt-3"> to </div>
																						<div className="col-sm-5">
                                                <Form.Control name="dateTo" value={this.state.dateTo} onChange={this.handleChanges} type="date" />
                                                {this.validator.message("endDate", this.state.dateTo, 'required', {className:"text-danger"})}
                                            </div>
                                            </Form.Group>
                                        </div>
										
                                        
                                        <div className="col-md-2 mt-5">
                                        <button type="submit" className="btn btn-primary ml-2 btn-fw" style={{lineHeight:1.5}}>{this.state._id?"Update":"Add"}</button>
                                        </div>
                                    </div>

                                    {/* ========================================================== */}
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                        {/*<nav aria-label="breadcrumb">
                            <div className="row">
                                <div className="col">
                                <button type="button" className="btn mr-0 pr-0">
                                    <i className="mdi mdi-import" style={{fontSize: "24px"}}></i>
                                </button>Import Bulk Data (<code><a href="" className="sm-text">Download &amp; View File Format</a></code>)
                                </div>
                            </div>            
                        </nav> */ }                     
                            <MaterialTable
                            title=""
                            data={this.state.records}
                            columns={this.field()}
                            options={{ search: true, paging: true, exportButton: true }}
                            />
                        </div>
                    </div>
								</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      error: state.holiday.error,
      success: state.holiday.success,
      msg: state.holiday.msg,
      list: state.holiday.holidaysList,
      selectedHoliday: state.holiday.selectedHoliday
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getHolidayList: () => dispatch(actions.getHoliday()),
      createHoliday: (data) => dispatch(actions.createHoliday(data)),
      editHoliday: (data) => dispatch(actions.editHoliday(data)),
      deleteHoliday: (id) => dispatch(actions.deleteHoliday(id)),
      activateHoliday: (data) => dispatch(actions.activateHoliday(data)),
      eraseMsg: () => dispatch(actions.eraseMsg())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageHolidaysData);