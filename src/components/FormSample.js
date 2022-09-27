import {useRef} from "react";

function FormSample() {

  const txtLastname = useRef();
  const txtFirstname = useRef();
  const txtEmail = useRef();

  function submit(e) {
    e.preventDefault();

    const data = {
      firstname: txtFirstname.current.value,
      lastname: txtLastname.current.value,
      email: txtEmail.current.value
    }

    validate(data);
    // api call to submit to an endpoint

    /**
     * 1. Check if all the fields have been filled up
     * 2. Check if the email is proper
     *    2.1 Only 1 @ symbol on the email
     *    2.2 Restrict the length to 100 chars
     *
     *    If there are errors,
     *    - Create an error array with the component
     *    - push the error (text)  to the array
     *    - console.log() the contents of all the array
     *
     * */
  }

  function validate(data){
    const errors = [];
    Object.entries(data).forEach(_data => _data[1].length > 1 ? errors.push(`'${_data[0]}' exceed 100 chars`) : '');

    console.log(errors);
  }

  return(
      <form onSubmit={submit}>
        <div className="form-group" >
          <input type="text"
                 ref={txtFirstname}
                 placeholder="First name"
                 className="form-control"/>
          <input type="text"
                 ref={txtLastname}
                 placeholder={"Last name"}
                 className="form-control" />
          <input type="email"
                 ref={txtEmail}
                 placeholder={"Email"}
                 className="form-control"/>
          <button type="submit">Submit</button>
        </div>
      </form>
  )
}

export default FormSample;
