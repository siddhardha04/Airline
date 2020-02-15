import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import PropTypes from "prop-types";

function FilterPassenger(props) {
  let { passengers } = props;
  return (
    <BootstrapTable data={passengers}>
      <TableHeaderColumn width="70px" dataField="id" isKey>
        Pnr No
      </TableHeaderColumn>
      <TableHeaderColumn
        width="70px"
        filter={{ type: "TextFilter", delay: 1000 }}
        dataField="passportNumber"
      >
        Passport Number
      </TableHeaderColumn>
      <TableHeaderColumn
        filter={{ type: "TextFilter", delay: 1000 }}
        width="70px"
        dataField="address"
      >
        Address
      </TableHeaderColumn>
      <TableHeaderColumn
        filter={{ type: "TextFilter", delay: 1000 }}
        width="70px"
        dataField="dob"
      >
        Date of birth
      </TableHeaderColumn>
    </BootstrapTable>
  );
}

FilterPassenger.propTypes = {
  passengers: PropTypes.array
};

export default FilterPassenger;
