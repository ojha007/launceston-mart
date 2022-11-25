import { Spinner } from "reactstrap";

export default function CustomSpinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",
      }}
    >
      <Spinner size={"lg"} />
    </div>
  );
}
