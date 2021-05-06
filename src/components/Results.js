
import React from "react";
import {Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Results = props => {
    const { firstName, lastName, email, password, confirmPassword} = props.data;
    return (
        <div className="d-flex justify-content-center m-3">
            <Card style={{ width: '26rem', height: '17rem', borderColor: "#777" }}>
                <CardBody className="p-0">
                    <CardTitle className="d-flex flex-row align-items-center justify-content-center"style={{ width: '100%', height: '3rem', backgroundColor: "#999", borderColor: "#000" }}><h4>Name: {firstName} {lastName}</h4></CardTitle>
                    <CardSubtitle className="mb-2 text-muted d-flex flex-row justify-content-center p-2" style={{ width: '100%', height: '2rem'}}>Email:</CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted d-flex flex-row justify-content-center p-2" style={{ width: '100%', height: '2rem'}}>{email}</CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted d-flex flex-row justify-content-center p-2" style={{ width: '100%', height: '2rem'}}>Password:</CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted d-flex flex-row justify-content-center p-2" style={{ width: '100%', height: '2rem'}}>{password}</CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted d-flex flex-row justify-content-center p-2" style={{ width: '100%', height: '2rem'}}>Confirmed Password:</CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted d-flex flex-row justify-content-center p-2" style={{ width: '100%', height: '2rem'}}>{confirmPassword}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
}

export default Results;