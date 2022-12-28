import { useContext } from "react";
import { CrudContext } from "../contexts/CrudContext";
import CrudTableRow from "./CrudTableRow";

const CrudTable = () => {
  const { data } = useContext(CrudContext);

  return (
    <div className="mx-1">
      <h3>Datatable</h3>
      <div className="my-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((element) => (
                <CrudTableRow key={element.id} element={element} />
              ))
            ) : (
              <tr>
                <td colSpan="3">There is no data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudTable;
