import { useContext } from "react";
import { CrudContext } from "../contexts/CrudContext";

const CrudTableRow = ({ element }) => {
  const { name, type, id } = element;
  const { setDataToEdit, deleteData } = useContext(CrudContext);

  return (
    <tr>
      <td>{name}</td>
      <td>{type}</td>
      <td>
        <button type="button" onClick={() => setDataToEdit(element)}>
          Edit
        </button>
        <button type="button" onClick={() => deleteData(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
