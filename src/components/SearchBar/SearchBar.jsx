import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";

const SearchBar = ({ handleSetSearchQuery, plchldr }) => {
  const initialValues = {
    searchQuery: "",
  };

  const handleSubmit = (values, options) => {
    handleSetSearchQuery(values.searchQuery);
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            type="text"
            name="searchQuery"
            autoComplete="off"
            placeholder={plchldr || `Type something...`}
            className={s.input}
          />
          <button type="submit" className={s.btn}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
