import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";
import * as actions from '../../redux/actions/concessions';
import SimpleReactValidator from 'simple-react-validator';
import { ToastContainer, toast } from "react-toastify";
import { connect } from 'react-redux';


class ManageCategoryData extends Component {
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
          concessionType:"",
          concessionPercent:true,
          concessionAmount:""
        }
        this.validator = new SimpleReactValidator({autoForceUpdate: this})
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
    }

    componentDidMount(){
        this.props.getConcessionList()
    }

    componentWillReceiveProps(nextProps){
        this.setState({ records: nextProps.list})

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
                <button onClick={ ()=> this.editConcession(props)} data-tip data-for="Edit" type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
                    <i className="mdi mdi-border-color" style={{fontSize:'17px'}}></i>
                </button>
                
              <ReactTooltip id='Delete' type='error' effect='solid'>
                <span>Delete</span>
              </ReactTooltip>
              
                <button onClick={() => this.props.deleteConcession(props._id)} data-tip data-for="Delete" type="button" className="btn btn-outline-danger" style={{padding:'8px'}}>
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

    editConcession = (props) => {
        let {
            _id,
            concessionType,
            concessionPercent,
            concessionAmount
        } = props
        this.setState({
            _id,
            concessionType,
            concessionPercent,
            concessionAmount
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

    PercentOrNot = (props) => {
        return(
            props.concessionPercent? props.concessionAmount +"%": props.concessionAmount
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
              title: "Concession Type",
              field: "concessionType",
            },
            {
              title: "Concession Id",
              field: "_id",
            },
						{
              title: "Concession",
              render: this.PercentOrNot
            },
						{
              title: "Students",
              field: "students",
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

// ======================================= coding part =======================================
    handleChanges = (event) => {
        const { name, value } = event.target;
        if(name == "concessionPercent"){
            this.setState({
                concessionPercent: value == "amount"?false:true
            })
        } else {
            this.setState({
                [name]: value
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let {
            _id,
            concessionType,
            concessionPercent,
            concessionAmount
        } = this.state
        if(this.validator.allValid()){
            this.validator.hideMessages();
            if(this.state._id){
                this.props.editConcession({
                    _id,
                    concessionType,
                    concessionPercent,
                    concessionAmount
                })
            } else {
                this.props.createConcession({
                    concessionType,
                    concessionPercent,
                    concessionAmount
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
            concessionType:"",
            concessionPercent:true,
            concessionAmount:""
        })
    }
// ======================================= /coding part/ =====================================

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
                                <form onSubmit={this.handleSubmit} className="forms-sample">
								{/* =================================== create concession============================== */}
									<h4 className="card-title">Create Concession</h4>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <Form.Group className="row">
                                            <label className="col-sm-12 col-form-label">Concession Type<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-12">
                                                <Form.Control  type="text" name="concessionType" onChange={this.handleChanges} value={this.state.concessionType} />
                                            </div>
                                            {this.validator.message('concessionType', this.state.concessionType, 'required', {className:"text-danger"})}
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-4">
                                            <Form.Group className="row">
                                                <label className="col-sm-12 col-form-label">Concession Type<span style={this.state.startstyle}>*</span></label>
                                                <label className="col-sm-6 col-form-label">
                                                <input type="radio" className="form-check-input mt-0 col-sm-10" onChange={this.handleChanges} name="concessionPercent" value="percentage" checked={this.state.concessionPercent}/>
                                                <i className="input-helper"></i>
                                                Percent
                                                </label><label className="col-sm-6 col-form-label">
                                                <input type="radio" className="form-check-input  mt-0 col-sm-10" onChange={this.handleChanges} name="concessionPercent" value="amount" checked={!this.state.concessionPercent}/>
                                                <i className="input-helper"></i>
                                                Amount
                                                </label>
                                            </Form.Group>
                                        </div>
										
                                        <div className="col-md-3">
                                            <Form.Group className="row">
                                            <label className="col-sm-12 col-form-label">Concession Amount<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-12">
                                                <Form.Control name="concessionAmount" onChange={this.handleChanges} value={this.state.concessionAmount} type="text" />
                                            </div>
                                            {this.validator.message('concessionAmount', this.state.concessionAmount, 'required', {className:"text-danger"})}
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
        error: state.concessions.error,
        success: state.concessions.success,
        msg: state.concessions.msg,
        list: state.concessions.concessionList,
        selectedConcession: state.concessions.selectedConcession
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getConcessionList: () => dispatch(actions.getConcession()),
        createConcession: (data) => dispatch(actions.createConcession(data)),
        editConcession: (data) => dispatch(actions.editConcession(data)),
        deleteConcession: (id) => dispatch(actions.deleteConcession(id)),
        eraseMsg: () => dispatch(actions.eraseMsg())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCategoryData);