import React, { useState } from "react";
import "../../../scss/ReportIssue.scss";

const ReportIssue = ({ toggleReport }) => {
  const [closeReport, setCloseReport] = useState(true);

  const handleReportClose = () => {
    setCloseReport(false);
    toggleReport();
  };

  const reportData = [
    {id: 1, label: "It's not responding" },
    {id: 2, label: "Another issue" },
    {id: 3, label: "Delayed loading"},
    {id: 4, label:"Game not responding"},
    {id: 5, label:"Instruction not clear"},
    {id: 6, label: "Other"}
    
  ];

  return (
    <div>
      {closeReport && (
        <div className="report_inner">
          <div className="report_wrapper">
            <div className="report_close" onClick={handleReportClose}></div>
            <h1 style={{ fontSize: "18px", color: "#fff" }}>Report an Issue</h1>
            <p style={{ color: "hsla(0,0%,100%,.64", fontSize: "14px" }}>
              What kind of problem have you encountered?
            </p>
            <div className="report_list">
              {reportData.map((item) => (
                <ReportItem key={item.id} item={item} />
              ))}
              <div className="report_btn" style={{ marginTop: "16px" }}>
                <button className="rep_btn">Send Feedback</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ReportItem = ({ item }) => (
  <div className="repost_listCheck">
    <div className="listt1">
      <div>
        <input
          id={item.id}
          className="custmCheck"
          type="radio"
          value={item.id}
          name="issue"
        ></input>
        <label
          htmlFor={item.id}
          className="custmcheck1"
          style={{ color: "#fff" }}
        >
          {item.label}
        </label>
      </div>
    </div>
  </div>
);

export default ReportIssue;
