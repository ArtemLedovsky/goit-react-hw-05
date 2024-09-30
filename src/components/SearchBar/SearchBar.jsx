import { Field, Form, Formik } from "formik";

const SearchBar = ({ handleSetSearchQuery, plchldr }) => {
  const initialValues = {
    searchQuery: "",
  };

  const handleSubmit = (values) => {
    handleSetSearchQuery(values.searchQuery);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="searchQuery"
            autoComplete="off"
            placeholder={plchldr}
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
