import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getLoading, getError } from "redux/selectors";

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { BeatLoader } from "react-spinners";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      
      <h2>Contacts</h2>
      <p>{isLoading && !error && <BeatLoader color="#4F2EE8"/>}</p>
      <Filter/>
      <ContactList/>
    </>
  );
};