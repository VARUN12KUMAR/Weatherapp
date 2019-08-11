import React from 'react';
import './form.style.css';

const Form= props =>{
    return(
      <form onSubmit={props.loadweather}>
            <div className="container">
            <div>{props.error?error():null}</div>
        <div className="row">
        <div className="col-mid-3 offset-md-2 ">
        <input type="text" className="form-control" name="city" placeholder="city" autoComplete="off"/>


        </div>
        <div className="col-mid-3 px-5">
        <input type="text" className="form-control" name="country"  placeholder="country" autoComplete="off"/>

        </div>
        <div className="col-mid-3 mt-md-0 text-md-left px-4">
        <button className="btn btn-warning">Get Weather</button>
        </div>
        </div>

        </div>
      </form>

    )

};
function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
        Please enter city and country !!!!
        </div>
    )
}
export default Form;