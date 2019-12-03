import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../Global/styled";
import { Table as BS_Table } from "reactstrap";

const TimeLog = ({ dailyLog }) => {
  return (
    <div>
      {dailyLog && dailyLog.map((interval, i) =>
        <Row key={i}>
          <Col>
            <Table>
              <tbody>
                {interval.map((log, i) =>
                  <tr key={i}>
                    {log.firstGroupLog 
                      ? log.hasTimeZoneDifference
                      ? <TimeHeader twoTimeZones>
                          {log.intervalStartHere}<br/>
                          <span>{log.intervalStartThere}</span>
                        </TimeHeader>
                      : <TimeHeader>
                          {log.intervalStart}
                        </TimeHeader>
                      : <TimeHeader />  
                    }
                    <FoodName className="food-name">
                      {log.foodName}
                    </FoodName>
                    <ServingName className="serving">
                      {log.servingDescription}
                    </ServingName>
                    <Quantity className="quantity">
                      {Math.trunc(log.quantity)}
                    </Quantity>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </div>
  );
};

const Table = styled(BS_Table)`
  font-size: 1.2rem;
  margin:0;

  tr {
    &:hover {
      background-color: lightgray;
    }
  }
  th {
    border: none;
  }
  td {
    vertical-align: middle;
  }
`;

const TimeHeader = styled.th`
  font-size: 1.4rem;
  text-align: right;
  border: none;
  width: 25%;

  white-space: nowrap;

  span {
    font-weight: lighter;
    font-style: italic;
    font-size: 1.2rem;
  }
`;

const FoodName = styled.td`
  text-align: left;
`;

const ServingName = styled.td`
  text-align: right;
`;

const Quantity = styled.td`
  text-align: right;
  width: 10%;
`;

export default TimeLog;
