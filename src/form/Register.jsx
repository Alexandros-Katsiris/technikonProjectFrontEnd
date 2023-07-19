import { useState } from "react";
import { createUserApi } from "../api/UserApiService";

const Register = () => {
  const [user, setUser] = useState({
    tin: "",
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    address: {
      streetName: "",
      streetNumber: "",
      zipcode: "",
      floorNumber: "",
    },
  });

  const handleChange = (event) => {
    const { name: name, value } = event.target;

    if (
      ["streetNumber", "streetName", "zipcode", "floorNumber"].includes(
        name
      )
    ) {
      setUser((prevState) => ({
        ...prevState,

        address: {
          ...prevState.address,

          [name]: value,
        },
      }));
    } else {
      setUser((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserApi(user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
    <container>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="container p-3 my-3 border">
          <div className="row">
            <div className="col p-3">
              
              <div className="control-group form-inline ">
                <label className="control-label col-xs-3" for="Name">
                  Name:
                </label>
              
              <input
                className="form-control"
                type="text"
                name="firstName"
                onChange={handleChange}
              />
              </div>
            </div>

            <div className="col p-3">
              <label className="control-label col-xs-3">
                Surname:
                <input
                  className="form-control"
                  type="text"
                  name="surname"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col p-3">
              <label className="control-label col-xs-3">
                Phone Number:
                <input
                  className="form-control"
                  type="number"
                  name="phoneNumber"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="col p-3">
              <label className="control-label col-xs-3" for="Tax ID Number">
                Tax ID Number:
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name="tin"
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="container p-3 my-3 border">
          <div className="form-group">
            <label className="control-label col-sm-2">
              Email:
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2">
              Username:
              <input
                className="form-control"
                type="text"
                name="username"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2">
              Password:
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="container p-3 my-3 border">
          <div className="form-group">
            <label className="control-label col-sm-2">
              StreetName:
              <input
                className="form-control"
                type="text"
                name="streetName"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2">
              StreetNumber:
              <input
                className="form-control"
                type="number"
                name="streetNumber"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2">
              FloorNumber:
              <input
                className="form-control"
                type="number"
                name="floorNumber"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2">
              Zip Code:
              <input
                className="form-control"
                type="number"
                name="zipcode"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </container>
  );
};

export default Register;
