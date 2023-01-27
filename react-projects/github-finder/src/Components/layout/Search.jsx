import React, { Fragment } from 'react';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

const Search = () => {
  return (
    <Fragment>
      <MDBCol md="6">
        <MDBFormInline className="md-form mr-auto mb-4">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
            Search
          </MDBBtn>
        </MDBFormInline>
      </MDBCol>
    </Fragment>
  );
}

export default Search;