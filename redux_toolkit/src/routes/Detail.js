import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ toDos }) {
  const id = parseInt(useParams().id);
  const toDo = toDos.find((todo) => todo.id === id);

  return (
    <>
      <h1>Detail</h1>
      <h2>{toDo?.text}</h2>
      <h3>Created at: {toDo?.id}</h3>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
