import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

class ProfileListing extends Component {
  constructor(props) {
    super(props);
    this.state = { userList: [], id: "", searchString: "" };
    this.list = [];
  }
  state = {};
  list = [];
  getUserList() {
    axios.get("https://tutorial4-api.herokuapp.com/api/users/").then((res) => {
      this.setState({ userList: res.data.data });
      console.log(this.state.userList);
      this.list = res.data.data;
    });
  }

  filterUsers() {
    if (this.state.searchString.length > 0) {
      console.log("getting specific user details");
      return this.state.userList.filter(
        (user) =>
          user["firstName"]
            .toLowerCase()
            .includes(this.state.searchString.toLowerCase()) ||
          user["lastName"]
            .toLowerCase()
            .includes(this.state.searchString.toLowerCase())
      );
    } else {
      return this.state.userList;
    }
  }
  handleChange = (event) => {
    this.setState({ searchString: event.target.value });
    console.log(this.state.searchString);
    this.setState({ userList: this.state.userList });
  };

  componentDidMount() {
    this.getUserList();
  }

  gotToUserProfile(id) {
    window.location.href = "/profileDetails/" + id;
  }
  render() {
    return (
      <React.Fragment>
        <div className="container" align="center">
          <input
            id="searchInput"
            type="text"
            className="form-group"
            placeholder="Search Users"
            onChange={this.handleChange}
          />
        <div align="center">
          {this.filterUsers().map((info, id) => (
            <div
              role="button"
              key={id}
              className="card pt-5 mt-5"
              onClick={() => this.gotToUserProfile(info.id)}
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top items-center"
                src={info.picture}
                alt="profile picture"
              />
              <div className="card-body">
                <p className="card-text">
                  {info.title}. {info.firstName} {info.lastName}
                </p>
                {/* <p className="card-text">{info.email}</p> */}
              </div>
            </div>
          ))}
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileListing;
