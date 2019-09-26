import React, { Fragment } from 'react';
import spinner from "../../common/image/spinner.gif"

const Spinner = (props) => (
    <Fragment>
        <img src={spinner}
             alt="loading..."
             style={{display: 'block', width: '200px', margin: 'auto'}}
        />
    </Fragment>
);

export default Spinner;