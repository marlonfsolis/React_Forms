import React, { Component } from 'react'

import ReactHookFormComp from "../../components/ReactHookForm/ReactHookForm.component";

export default class ReactHookForm extends Component {
    render() {
        return (
            <div>
                <p>React Hook Form!</p>
                <ReactHookFormComp></ReactHookFormComp>
            </div>
        )
    }
}
