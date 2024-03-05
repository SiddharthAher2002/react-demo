import React from "react";
import { useForm } from 'react-hook-form';

let rendercount = 0;
const Info = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  rendercount++;
  console.log(errors);
  return (
    <form onSubmit={handleSubmit((data) => {
      console.log(data);
    })}>
      <div className="alert alert-primary d-flex justify-content-center ">
        render : {rendercount}
      </div>
      <div className="form-group">
        <div className="input-group">
          <input
            type="text"
            {...register("email", { required: true })}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <input
            type="text"
            {...register("password", { required: true, minLength: 8 })}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group">
          <button className="btn btn-outline-dark" type="submit">submit</button>
        </div>
      </div>
     
    </form>
  );
};

export default Info;
