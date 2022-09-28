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

  }

  function validate(data){
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
    const errors = [];
    const keys = [];
    Object.entries(data).forEach(_data => keys.push(_data[0]));

    if([...data.email].filter(v => v === '@').length !== 1)
      errors.push(`'email' must contain 1 @ symbol`);

    keys.forEach(key => {
      const value = data[key];
      const CHAR_LIMIT = 100;

      if(value.length === 0)
        errors.push(`'${key}' is empty`);

      if(value.length > CHAR_LIMIT)
        errors.push(`'${key}' exceed ${CHAR_LIMIT} chars`);
    })

    console.log(errors);
  }

  return(
      <>
      <h1>Form Sample</h1>
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
          <input type="text"
            ref={txtEmail}
            placeholder={"Email"}
            className="form-control"/>
          <button type="submit">Submit</button>
        </div>
      </form>
      </>
  )
}

export default FormSample;
