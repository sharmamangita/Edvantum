import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

import * as actions from '../../redux/actions/classInformation';
import * as subject from '../../redux/actions/subject';
import SimpleReactValidator from 'simple-react-validator';
import { ToastContainer, toast } from "react-toastify";
import { connect } from 'react-redux';

class ClassInformation extends Component {
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

            _id:"",
            className:"",
            section:"",

            selectedClass:"",
            selectedSubjectList:[]
        }

        this.validator = new SimpleReactValidator({autoForceUpdate: this})
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChanges = this.handleChanges.bind(this);

    }

    componentDidMount(){
        this.props.getClassInfo();
        this.props.getSubjectList();
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
                <button data-tip data-for="Edit" onClick={()=> this.editClass(props)} type="button" className="btn btn-outline-warning" style={{padding:'8px'}}>
                    <i className="mdi mdi-border-color" style={{fontSize:'17px'}}></i>
                </button>
                
              <ReactTooltip id='Delete' type='error' effect='solid'>
                <span>Delete</span>
              </ReactTooltip>
              
                <button onClick={()=> this.props.deleteClassInfo(props._id)} data-tip data-for="Delete" type="button" className="btn btn-outline-danger" style={{padding:'8px'}}>
                    <i className="mdi mdi-delete"style={{fontSize:'17px'}}></i>
                </button>
            </span>
        )
    }

    ShowSubjects = (props) => {
        return props.subjectName.map(data => 
            <span onClick={()=> this.deleteOneByOne(props.subjectName, data._id, props.className)} >
            <Link style={{
                border: 'solid 1px #ff8800',
                borderRadius: '12px',
                padding: '2px 5px'
            }}><i className="mdi mdi-close-circle" style={{fontSize:'17px', color:'red'}}></i>{data.subjectName}</Link>,
        </span>    
        )
    }

    ShowClass = (props) => {
        return(
            <span>{props.className} - {props.section}</span>
        )
    }

    field = () => {
        const fields = [
            {
              title: "Classes",
              render:this.ShowClass,
              width: "0%",
            },
            {
              title: "Subjects",
              render: this.ShowSubjects,
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
        this.setState({selectedClass:"", selectedSubjectList:[], isModalVisible: false})
    }

    deleteOneByOne = (data, selectedId, className) => {
        let list = []
        data.map(data => data._id != selectedId? list.push(data._id):null );
        console.log(list);
        console.log(selectedId);
        console.log(className);
        this.props.updateSubjectList({className: className, subjectId: list})
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
          className,
          section
        } = this.state;
        if(this.validator.allValid()){
          this.validator.hideMessages();
          if(this.state._id){
            this.props.editClassInfo({
                _id,
                className,
                section
            })
          } else {
            this.props.createClassInfo({
                className,
                section
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
            className:"",
            section:""
        })
      }
  
      editClass = (props) => {
        let {
            _id,
            className,
            section
        } = props;
        this.setState({
            _id,
            className,
            section
        })
      }

      ShowsubjectList = () => {
          let list  = this.props.subjectList
          return list.map((data)=> <>
                <div className="col-sm-6">
                    <Form.Group>
                    <div className="form-check form-check-success">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" onClick={() => this.addorRemove(data)} /> {data.subjectName}
                            <i className="input-helper"></i>
                        </label>
                    </div>
                    </Form.Group>
                </div>
          </>)
      }

      addorRemove = (data) => {
        let list = this.state.selectedSubjectList
        list.push(data._id);
        this.setState({selectedSubjectList: list})
      }

      updateSubjectList = () => {
        
        if(this.state.selectedClass && this.state.selectedSubjectList){
            this.props.updateSubjectList({className: this.state.selectedClass, subjectId: this.state.selectedSubjectList})
            this.handleClose();
        }
          
      }

      // =================================================/ coding part /========================================
  

    render() {
        return(
            <div>
                <div className="page-header">
                <h3 className="page-title"> Classes </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample" onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Class Name<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control name="className" value={this.state.className} onChange={this.handleChanges} type="text" />
                                                {this.validator.message('className', this.state.className, 'required', {className:"text-danger"})}
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-4">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Section<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
                                                    <select className="form-control" name="section" value={this.state.section} onChange={this.handleChanges}>
                                                        <option value="">----</option>
                                                        <option value="A">A</option>
                                                        <option value="B">B</option>
                                                        <option value="C">C</option>
                                                        <option value="D">D</option>
                                                    </select>
                                                    {this.validator.message('section', this.state.section, 'required', {className:"text-danger"})}
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-2">
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
                        <nav aria-label="breadcrumb">
                              <div className="row">
                                <div class="col">
                                    <button 
                                    onClick={() => this.setState({ isModalVisible: !this.state.isModalVisible})}
                                    type="button"
                                    className="btn btn-outline-success float-right"
                                    style={{padding:'8px', margin:"5px"}}
                                    >
                                        Add Subject
                                    </button> 
                                </div>
                              </div>            
                          </nav>                     
                            <MaterialTable
                            title=""
                            data={this.state.records}
                            columns={this.field()}
                            options={{ search: true, paging: false, exportButton: true }}
                            />
                        </div>
                    </div>
                </div>
            {/* ================================= */}
            <Modal show={this.state.isModalVisible} onHide={() => this.handleClose()}>
        <Modal.Header closeButton>
        <h3 className="page-title"> Subjects </h3>
        </Modal.Header>
        <div className="card">
            <div className="card-body">
                <Form.Group className="row">
                    <label className="col-sm-3 col-form-label">Select Class<span style={this.state.startstyle}>*</span></label>
                    <div className="col-sm-9">
                        <select className="form-control" name="selectedClass" onChange={this.handleChanges}>
                            <option value="">-----</option>
                            {
                                this.state.records.map((data)=><option value={data.className}>{data.className} - {data.section}</option>)
                            }    
                            
                        </select>
                    </div>
                </Form.Group>
                <form>
                    <div className="row">
                        
                        {this.ShowsubjectList()}

                    </div>
                </form>
            </div>
        </div>
        <Modal.Footer style={{backgroundColor: '#ffffff'}}>
          <Button variant="secondary" onClick={() => this.handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => this.updateSubjectList()} disabled={!this.state.selectedClass?true:false}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            {/* ================================= */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.classInfo.error,
        success: state.classInfo.success,
        msg: state.classInfo.msg,
        list: state.classInfo.classInfoList,
        selectedclassInfo: state.classInfo.selectedclassInfo,
        subjectList: state.subject.SubjectList
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getSubjectList: () => dispatch(subject.getSubject()),
        getClassInfo: () => dispatch(actions.getClassInfo()),
        createClassInfo: (data) => dispatch(actions.createClassInfo(data)),
        editClassInfo: (data) => dispatch(actions.editClassInfo(data)),
        deleteClassInfo: (id) => dispatch(actions.deleteClassInfo(id)),
        updateSubjectList: (data) => dispatch(actions.updateSubjectList(data)),
        eraseMsg: () => dispatch(actions.eraseMsg())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ClassInformation);