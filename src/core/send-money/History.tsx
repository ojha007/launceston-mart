import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dispatchEvent } from "../../actions";
import CustomSpinner from "../../components/CustomSpinner";
import { HistoryList } from "./HistoryList";

const History = () => {
  const [transactions, setTransactions] = useState({});
  const [isLoading, setLoading] = useState(true);
  const fetchAllTransaction = async () => {
    setLoading(true);
    let response = await dispatchEvent("TRANSACTION_HISTORY", {});
    setTransactions(response.data);
    setLoading(false);
  };
  useEffect(() => {
    (async () => await fetchAllTransaction())();
  }, []);

  return (
    <div className="box">
      <div className="box-body p-0">
        {isLoading ? (
          <CustomSpinner />
        ) : Object.keys(transactions).length > 0 ? (
          <HistoryList transactions={transactions} />
        ) : (
          <p className="text-center text-bold">
            No Record Found. <br />
            <Link to="/dashboard/send-money">Start Sending Money</Link>
          </p>
        )}
      </div>
      <div className="box-footer"></div>
    </div>
  );
};
export default History;
