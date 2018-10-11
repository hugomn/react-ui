import React from "react";

const PropTypesTable = ({ propDefinitions }) => {
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      return (
        <tr key={property}>
          <td>
            <span className="propName">
              {property}
              {required ? <span style={{ color: "red" }}>*</span> : null}
            </span>
          </td>
          <td>{defaultValue}</td>
          <td>{propType.name}</td>
          <td>{description}</td>
        </tr>
      );
    }
  );

  return (
    <table className="proptypesTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Default</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  );
};

export default PropTypesTable;
