import { Link } from "react-router-dom";
import { Alert } from "reactstrap";
import { LoggedInUser } from "../interfaces/User";

interface UploadYourKycI {
  user: LoggedInUser;
}
const UploadYourKyc = (props: UploadYourKycI) => {
  const color = props.user.isKycVerified == "NOT_VERIFIED" ? "info" : "danger";
  return (
    <>
      <Alert color={color}>
        {props.user.kycMessage}

        <Link
          className="alert-link text-underline"
          to="/dashboard/user/kyc"
          style={{
            textDecoration: "underline",
            paddingLeft: "10px",
            color: "blue",
          }}
        >
          Click here?
        </Link>
      </Alert>
      <div className="d-flex justify-content-center">
        <img
          src={require("../assets/images/upload-kyc.png")}
          alt=""
          className="img-responsive"
        />
      </div>
    </>
  );
};

export default UploadYourKyc;
