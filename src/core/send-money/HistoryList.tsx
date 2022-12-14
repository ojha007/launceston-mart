import { ListGroup, ListGroupItem } from "reactstrap";
import classNames from "classnames";
import { Person } from "react-bootstrap-icons";

function getBadgeColor(status: string): string {
  switch (status.toLowerCase()) {
    case "pending":
      return "bg-yellow";
    case "cancelled":
      return "bg-danger";
    case "completed":
      return "bg-green";
    default:
      return "bg-primary";
  }
}

export const HistoryList = (props: any) => {
  return (
    <div className="transaction-list">
      {Object.keys(props.transactions).map((group, key) => {
        return (
          <div key={`g_${key}`} className="transaction-list-item  my-2">
            <h4 className="text-muted"> {group}</h4>
            {props.transactions[group].map((tran: any, key: number) => {
              return (
                <ListGroup key={`t_${key}`} className="">
                  <ListGroupItem className="my-1">
                    <div className="list-group-item-heading d-flex justify-content-between align-items-center">
                      <h5># {tran.code}</h5>
                      {/* <p>{tran.beneficiary}</p> */}
                      <span className={"badge " + getBadgeColor(tran.status)}>
                        {tran.status}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{tran.beneficiary}</span>
                      {/* <p className="mb-1">AUD: {tran.amountSent}</p> */}
                      {/* <p className="mb-1">RATE: {tran.rate}</p> */}
                      {/* <p className="mb-1">Charge: {tran.charge}</p> */}
                      <p className="mb-1">NPR: {tran.amountReceived}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="mb-1">{tran.paymentBy}</small>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
