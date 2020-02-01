import React, { Component } from 'react'
import ReactHookFormComp from '../../components/BsForm/BsForm.component';

export default class BsForm extends Component {
    render() {
        return (
            <div>
                <p>Bootstrap form page!</p>
                <ReactHookFormComp></ReactHookFormComp>
            </div>
        )
    }
}
