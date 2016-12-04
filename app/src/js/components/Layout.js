import React from "react";
import { connect } from "react-redux";

import * as firebase from "firebase";

import { sendFormData } from "../actions/formActions";

@connect((store) => {
    console.log('@@@ store',store);
    return {
        form_data: null
    }
})
export default class Layout extends React.Component {

    constructor(props) {
        super(props)

        this.handleSaveFormData=this.handleSaveFormData.bind(this);

    }

    componentDidMount() {
        // const rootRef = firebase.database().ref().child('speed');
        // rootRef.on('value', snap => {
        //    console.log('@@@ snap',snap.val())
        //    this.setState({
        //        speed: snap.val()
        //    });
        // });
    }

    handleSaveFormData() {
        console.log('@@@ handleSaveFormData', this.props)
        console.log('@@@ editor ', $('.note-codable').val());
        let data = $('.note-codable').val()
        console.log('@@@ handleSaveform data typeof',typeof data)
        this.props.dispatch(sendFormData(data));
    }

    render() {
        const { form_data } = this.props;

        return (
            <div>
                <header id="header" className="clearfix" data-ma-theme="blue">
                    <ul className="h-inner">
                        <li className="hi-trigger ma-trigger" data-ma-action="sidebar-open" data-ma-target="#sidebar">
                            <div className="line-wrap">
                                <div className="line top"></div>
                                <div className="line center"></div>
                                <div className="line bottom"></div>
                            </div>
                        </li>

                        <li className="hi-logo hidden-xs">
                            <a href="index.html">DEMO</a>
                        </li>

                    </ul>

                    <div className="h-search-wrap">
                        <div className="hsw-inner">
                            <i className="hsw-close zmdi zmdi-arrow-left" data-ma-action="search-close"></i>
                            <input type="text" />
                        </div>
                    </div>
                </header>

                <section id="main">
                    <aside id="sidebar" className="sidebar c-overflow">
                        <div className="s-profile">
                            <a href="" data-ma-action="profile-menu-toggle">
                                <div className="sp-pic">
                                    <img src="../assets/img/demo/profile-pics/1.jpg" alt="" />
                                </div>

                                <div className="sp-info">
                                    Tamaki Yataki

                                    <i className="zmdi zmdi-caret-down"></i>
                                </div>
                            </a>

                        </div>
                        
                    </aside>


                    <section id="content">

                        <div className="card">
                            <div className="card-header">
                                <h2>Editor</h2>
                            </div>

                            <div className="card-body card-padding">

                                <div className="html-editor" id="editor"></div>

                                <br/>

                                <div className="m-b-10">
                                    <button className="btn btn-success btn-sm hec-save" onClick={this.handleSaveFormData}>Save</button>
                                </div>
                            </div>

                        </div>

                    </section>
                </section>

                <div className="page-loader">
                    <div className="preloader pls-blue">
                        <svg className="pl-circular" viewBox="25 25 50 50">
                            <circle className="plc-path" cx="50" cy="50" r="20" />
                        </svg>

                        <p>Please wait...</p>
                    </div>
                </div>
            </div>
        )
    }
}