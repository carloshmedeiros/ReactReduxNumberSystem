import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const Sorteio = (props) => {
  const { min, max } = props;
  const random = parseInt(Math.random() * (max - min)) + min;
  return (
    <Card title="Random" four>
      <span>
        <strong>Resultado:</strong>
        <span>{random}</span>
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

export default connect(mapStateToProps)(Sorteio);
