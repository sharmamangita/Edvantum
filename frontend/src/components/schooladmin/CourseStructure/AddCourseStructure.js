import React, {Component} from 'react';
import MaterialTable from "material-table";
import { Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactTooltip from "react-tooltip";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
    userSelect: "none",
    height: '44px',
    padding: '3px',
    borderBottom:'solid',
//   margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "White",

  // styles we need to apply on draggables
  ...draggableStyle
});


class AddCourseStructure extends Component {
    constructor(props){
        super(props);
        this.state = {
          startstyle: {
            color: 'red',
            fontSize: '14px'
          },
					leftspace: {
						marginLeft:'54px'
					}
        }
    }

    componentDidMount(){
       
    }


    render() {
        return(
            <div>
                <div className="page-header">
                <h3 className="page-title">Master Data </h3>
                </div>
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">    
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample">
																<h4 className="card-title">Add Course Structure</h4>
                                    <div className="row">
																				<div className="col-md-7">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Class<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
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
                                        <div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Term<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control  type="text" />
                                            </div>
                                            </Form.Group>
                                        </div>
																				
                                        <div className="col-md-12">
                                            <Form.Group className="row">
                                            <label className="col-sm-1 col-form-label">Period<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-2" style={this.state.leftspace}>
                                                <select className="form-control">
																										<option>Month</option>
																										<option>January</option>
																										<option>Febuary</option>
																										<option>March</option>
																										<option>April</option>
																										<option>May</option>
																										<option>June</option>
																										<option>July</option>
																										<option>August</option>
																										<option>September</option>
																										<option>October</option>
																										<option>Novemver</option>
																										<option>December</option>
                                                </select>
                                            </div>
																						<div className="col-sm-2">
                                                <select className="form-control">
																										<option value="">Year</option>
																										<option value="2011">2011</option>
																										<option value="2012">2012</option>
																										<option value="2013">2013</option>
																										<option value="2014">2014</option>
																										<option value="2015">2015</option>
																										<option value="2016">2016</option>
																										<option value="2017">2017</option>
																										<option value="2018">2018</option>
																										<option value="2019">2019</option>
																										<option value="2020">2020</option>
																										<option value="2021">2021</option>
                                                </select>
                                            </div>
																						<div className="col-sm-1 mt-3 pl-4"> to </div>
																						<div className="col-sm-2">
                                                <select className="form-control">
																										<option>Month</option>
																										<option>January</option>
																										<option>Febuary</option>
																										<option>March</option>
																										<option>April</option>
																										<option>May</option>
																										<option>June</option>
																										<option>July</option>
																										<option>August</option>
																										<option>September</option>
																										<option>October</option>
																										<option>Novemver</option>
																										<option>December</option>
                                                </select>
                                            </div>
																						<div className="col-sm-2">
                                                <select className="form-control">
																										<option value="">Year</option>
																										<option value="2011">2011</option>
																										<option value="2012">2012</option>
																										<option value="2013">2013</option>
																										<option value="2014">2014</option>
																										<option value="2015">2015</option>
																										<option value="2016">2016</option>
																										<option value="2017">2017</option>
																										<option value="2018">2018</option>
																										<option value="2019">2019</option>
																										<option value="2020">2020</option>
																										<option value="2021">2021</option>
                                                </select>
                                            </div>
																						
                                            </Form.Group>
                                        </div>
																				<div className="col-md-7">
                                            <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Marks<span style={this.state.startstyle}>*</span></label>
                                            <div className="col-sm-9">
                                                <Form.Control  type="text" />
                                            </div>
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-7">
                                            <Form.Group className="row">
                                                <label className="col-sm-3 col-form-label">Subject<span style={this.state.startstyle}>*</span></label>
                                                <div className="col-sm-9">
                                                    <select className="form-control">
                                                        <option>English</option>
                                                        <option>Hindi</option>
                                                        <option>Maths</option>
                                                        <option>Science</option>
                                                        <option>History</option>
                                                    </select>
                                                </div>
                                            </Form.Group>
                                        </div>
																				<div className="col-md-7">
																						<Form.Group className="row">
																								<label className="col-sm-3 col-form-label">Syllabus<span style={this.state.startstyle}>*</span></label>
																								<div className="col-sm-9">
																									<Form.Control  type="text" />
																								</div>
                                            </Form.Group>
                                        </div>
                                        
																		</div>
                                    <div className="row">
																			<div className="col-md-5">
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

export default AddCourseStructure;