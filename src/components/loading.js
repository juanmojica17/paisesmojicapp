import React from 'react';
import {Spinner} from 'reactstrap';
import "../components/styles/loading.css"

function loading(){
    return (
    <div className="loading">
        <Spinner color="dark"/>
    </div>
    )}

export default loading; 