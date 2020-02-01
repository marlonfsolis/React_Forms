import React from 'react';
import { useForm } from 'react-hook-form';

export default function ReactHookFormComp() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmitHandler = data => { console.log(data) };

    return (
        <React.Fragment>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit(onSubmitHandler)} >
                {/* register your input into the hook by invoking the "register" function */}
                <input name="example" defaultValue="test" ref={register} />

                {/* include validation with required or other standard HTML validation rules */}
                < input name="exampleRequired" ref={register({ required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form >
        </React.Fragment>
    )
}
