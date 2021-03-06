import React from "react";
import { professors } from "./dataProfessor";
import ProfessorTableRow from "./ProfessorTableRow";

const ListProfessor = () => {
  function generateTable() {
    if (!professors) return;
    return professors.map((professor, i) => {
      return <ProfessorTableRow professor={professor} key={i} />;
    });
  }

  return (
    <div>
      <h2>List Professor</h2>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>University</th>
          <th>Degree</th>
          <th colSpan="2"></th>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default ListProfessor;
