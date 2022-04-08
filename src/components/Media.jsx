import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const Media = (props) => {
  const { min, max } = props;
  return (
    <Card title="Media" three>
      <span>
        <strong>Resultado:</strong>
        <span>{(max + min) / 2}</span>
      </span>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  };
}

export default connect(mapStateToProps)(Media);
