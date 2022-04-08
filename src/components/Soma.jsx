import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const Soma = (props) => {
  const { min, max } = props;
  return (
    <Card title="Soma" two>
      <span>
        <strong>Resultado:</strong>
        <span>{max + min}</span>
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

export default connect(mapStateToProps)(Soma);