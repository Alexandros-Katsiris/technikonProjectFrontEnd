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
    <div class="container">
      <form class="form-horizontal" onSubmit={handleSubmit}>
        <div class="form-group">
          <label class="control-label col-sm-2" for="Tax ID Number">
            Tax ID Number:
            <div class="col-sm-10">
              <input
                class="form-control"
                type="number"
                name="tin"
                onChange={handleChange}
              />
            </div>
          </label>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-2" for="Name">
            Name:
            <input
              class="form-control"
              type="text"
              name="firstName"
              onChange={handleChange}
            />
          </label>
        </div>

        <div class="form-group">
          <label>
            Surname:
            <input
              class="form-control"
              type="text"
              name="surname"
              onChange={handleChange}
            />
          </label>
        </div>

        <div class="form-group">
          <label>
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
          <label>
            Phone Number:
            <input
              class="form-control"
              type="number"
              name="phoneNumber"
              onChange={handleChange}
            />
          </label>
        </div>

        <div class="form-group">
          <label>
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
          <label>
            Password:
            <input
              class="form-control"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </label>
        </div>

        <div class="form-group">
          <label>
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
          <label>
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
          <label>
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
          <label>
            Zip Code:
            <input
              class="form-control"
              type="number"
              name="zipcode"
              onChange={handleChange}
            />
          </label>
        </div>

        <button class="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
