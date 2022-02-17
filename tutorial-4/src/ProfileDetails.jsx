import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

function ProfileDetails() {
  const params = useParams();
  const [userDetail, serUserDetail] = useState([]);
  useEffect(() => {
    function returnUserDetails() {
      axios
        .get(
          "https://tutorial4-api.herokuapp.com/api/users/" + params.profileId
        )
        .then((response) => {
          console.log(response);
          serUserDetail(response.data["data"]);
        });
    }

    returnUserDetails();
  }, []);
  return (
    <React.Fragment>
      <div align="center" className="container mt-5">
        <div className="row">
          <img
            className="col-md-6"
            style={{ width: "18rem" }}
            src={userDetail.picture}
            alt="profile picture"
          />
          <div className="col-md-6 mt-5">
            <p className="w-100">
              <b>Full Name: </b>
              {userDetail.title}. {userDetail.firstName} {userDetail.lastName}
            </p>
            <p className="w-100">
              <b>Email Id: </b>
              {userDetail.email}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProfileDetails;
