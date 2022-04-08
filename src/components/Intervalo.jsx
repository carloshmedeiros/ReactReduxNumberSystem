import "./Intervalo.css";
import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { changeMin, changeMax } from "../store/actions/numeros";

const Intervalo = (props) => {
  const { min, max } = props;
  return (
    <Card title="Intervalo" one>
      <span>
        <h2>MINIMO</h2>
        <input
          className="Entrada"
          type="number"
          value={min}
          onChange={(e) => props.changeTheMin(+e.target.value)}
        />
      </span>
      <span>
        <h2>MAXIMO</h2>
        <input
          className="Entrada"
          type="number"
          value={max}
          onChange={(e) => props.changeTheMax(+e.target.value)}
        />
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

function mapActionCreatorsToProps(dispatch) {
  return {
    changeTheMin(newnumber) {
      const action = changeMin(newnumber);
      dispatch(action);
    },
    changeTheMax(newnumber) {
      const action = changeMax(newnumber);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Intervalo);
