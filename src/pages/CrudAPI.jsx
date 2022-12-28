import { useContext } from "react";
import CrudForm from "../components/CrudForm";
import CrudTable from "../components/CrudTable";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { CrudContext } from "../contexts/CrudContext";

const CrudAPI = () => {
  const { data, isLoading, error } = useContext(CrudContext);

  return (
    <>
      <h1>CRUD API</h1>
      <section className="grid-1-2">
        <CrudForm />

        {isLoading && <Loader />}
        {error && (
          <Message
            message={`Error ${error.status}: ${error.statusText}`}
            bgColor={"#dc3545"}
          />
        )}

        {data && <CrudTable />}
      </section>
    </>
  );
};

export default CrudAPI;
