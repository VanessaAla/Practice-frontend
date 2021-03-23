import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Space(props) {
  // The spaces have a backgroundColor and color as specified by their users
  return (
    <Jumbotron
      style={{
        color: props.color,
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      {props.showLink ? (
        <Link to={`/spaces/${props.id}`}>
          {/*Each space has a Visit space button, it links to a space's details */}
          <Button>Visit space</Button>
        </Link>
      ) : null}
    </Jumbotron>
  );
}
