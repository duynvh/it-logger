import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as logActions from "../../actions/logActions";

const SearchBar = ({ searchLogs }) => {
    const text = useRef('');

    const onChange = () => {
        searchLogs(text.current.value)
    }

    return (
        <nav style={{ marginBottom: "30px" }} className="blue">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input ref={text} onChange={onChange} id="search" type="search" required placeholder='Search Logs...'/>
                        <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    );
};

SearchBar.propTypes = {
    searchLogs: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
    return {
        searchLogs: (text) => {
            dispatch(logActions.searchLogs(text));
        },
    };
};

export default connect(null, mapDispatchToProps)(SearchBar);
