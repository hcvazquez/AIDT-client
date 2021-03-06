/* eslint-disable linebreak-style */
import './Home.css';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'shared/containers/header/Header';
import SearchBox from 'shared/containers/search-box/SearchBox';

class Home extends Component {
    render() {
        return (
            <div className="page page-home">
                <Header showLogo={ false } />

                <div className="upper-half">
                    <div className="upper-half-wrapper">
                        <div className="logo">AIDTjs</div>
                        <div className="moto">Learning a better <strong>selection tool</strong> for javascript technologies</div>

                        <SearchBox initiallyEmpty initiallyFocused focusOnKeyDown />
                    </div>
                </div>

                <div className="bottom-half">
                    Supported by <a href="http://www.isistan.unicen.edu.ar" target="_blank">ISISTAN Research Institute</a>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(Home);
