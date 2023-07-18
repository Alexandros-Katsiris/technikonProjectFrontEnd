import { useState } from "react";
import { createUserApi } from "./UserApiService";

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
    const { name: firstName, value } = event.target;

    if (
      ["streetNumber", "streetName", "zipcode", "floorNumber"].includes(
        firstName
      )
    ) {
      setUser((prevState) => ({
        ...prevState,

        address: {
          ...prevState.address,

          [firstName]: value,
        },
      }));
    } else {
      setUser((prevState) => ({ ...prevState, [firstName]: value }));
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
    <container >
      <form class="form-horizontal" onSubmit={handleSubmit}>
        <div class="container p-3 my-3 border">
          <div className="row">
            <div class="col p-3">
              <div class="control-group form-inline ">
                <label class="control-label col-xs-3" for="Name">
                  Name:
                </label>
              </div>
              <div class="controls-xs-9">
                <input
                  class="form-control"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div class="col p-3">
              <label class="control-label col-xs-3">
                Surname:
                <input
                  class="form-control"
                  type="text"
                  name="surname"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div class="col p-3">
              <label class="control-label col-xs-3">
                Phone Number:
                <input
                  class="form-control"
                  type="number"
                  name="phoneNumber"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div class="col p-3">
              <label class="control-label col-xs-3" for="Tax ID Number">
                Tax ID Number:
                <div>
                  <input
                    class="form-control"
                    type="number"
                    name="tin"
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="container p-3 my-3 border">
          <div class="form-group">
            <label class="control-label col-sm-2">
              Email:
              <input
                class="form-control"
                type="email"
                name="email"
                onChange={handleChange}
              />
            </label>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2">
              Username:
              <input
                class="form-control"
                type="text"
                name="username"
                onChange={handleChange}
              />
            </label>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2">
              Password:
              <input
                class="form-control"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div class="container p-3 my-3 border">
          <div class="form-group">
            <label class="control-label col-sm-2">
              StreetName:
              <input
                class="form-control"
                type="text"
                name="streetName"
                onChange={handleChange}
              />
            </label>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2">
              StreetNumber:
              <input
                class="form-control"
                type="number"
                name="streetNumber"
                onChange={handleChange}
              />
            </label>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2">
              FloorNumber:
              <input
                class="form-control"
                type="number"
                name="floorNumber"
                onChange={handleChange}
              />
            </label>
          </div>

          <div class="form-group">
            <label class="control-label col-sm-2">
              Zip Code:
              <input
                class="form-control"
                type="number"
                name="zipcode"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <button class="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </container>
  );
};

export default Register;
