import { useState, useEffect, useReducer } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "../components/CrudForm";
import CrudTable from "../components/CrudTable";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { crudInitialState, crudReducer } from "../reducers/crudReducer";
import { ACTION_TYPES } from "../actions/crudActions";

const CrudAPI = () => {
  // const [data, setData] = useState(null);
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const { data } = state;

  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/pokemons";

  useEffect(() => {
    setIsLoading(true);
    api.get(url).then((resp) => {
      if (!resp.err) {
        dispatch({
          type: ACTION_TYPES.READ_ALL_DATA,
          data: resp
        });
        setError(null);
      } else {
        dispatch({
          type: ACTION_TYPES.NO_DATA
        });
        setError(resp);
      }
      setIsLoading(false);
    });
  }, []);

  const createData = (newElement) => {
    newElement.id = Date.now();

    const options = {
      body: newElement,
      headers: { "content-type": "application/json" }
    };

    api.post(url, options).then((resp) => {
      if (!resp.err) {
        dispatch({
          type: ACTION_TYPES.CREATE_DATA,
          item: resp
        });
      } else {
        setError(resp);
      }
    });
  };

  const updateData = (newElement) => {
    const options = {
      body: newElement,
      headers: { "content-type": "application/json" }
    };

    api.put(`${url}/${newElement.id}`, options).then((resp) => {
      if (!resp.err) {
        dispatch({
          type: ACTION_TYPES.UPDATE_DATA,
          item: resp
        });
      } else {
        setError(resp);
      }
    });
  };

  const deleteData = (id) => {
    const areYouSure = window.confirm("Are you sure to delete the record?");

    if (!areYouSure) return;

    const options = {
      headers: { "content-type": "application/json" }
    };

    api.del(`${url}/${id}`, options).then((resp) => {
      if (!resp.err) {
        dispatch({
          type: ACTION_TYPES.DELETE_DATA,
          id: id
        });
      } else {
        setError(resp);
      }
    });
  };

  return (
    <>
      <h1>CRUD API</h1>
      <section className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />

        {isLoading && <Loader />}
        {error && (
          <Message
            message={`Error ${error.status}: ${error.statusText}`}
            bgColor={"#dc3545"}
          />
        )}

        {data && (
          <CrudTable
            myData={data}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </section>
    </>
  );
};

export default CrudAPI;
