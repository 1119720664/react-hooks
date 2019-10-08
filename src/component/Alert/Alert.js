import React, { useContext } from 'react';
import AlertContent from "../../content/alert/alertContent"

function Alert() {
    const alertContent = useContext(AlertContent)
    const {alert} = alertContent
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fa fa-info-circle"/>
                {alert.msg}
            </div>
        )
    );
}

export default Alert;