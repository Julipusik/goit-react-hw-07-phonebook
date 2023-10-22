import { Formik } from "formik";
import { FormEl, FormField, FormBtn } from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { addContact } from "redux/operations";
import { Report } from 'notiflix/build/notiflix-report-aio';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const addNewContact = contact => {
    if (contactExists(contact)) {
      Report.failure('Oops', 'This contact already exists in your phonebook');
      return;
    }
    dispatch(addContact(contact));
  }

  function contactExists(contact) {
    return contacts.some(element => contact.name.toLowerCase() === element.name.toLowerCase());
  }
  
    return (
       <Formik
        initialValues={{ name: '', number: '', }}
        onSubmit={(values, {resetForm}) => {
          addNewContact(values);
          resetForm();
        }}
      >

        <FormEl>
          <FormField name="name" type="text"
            placeholder="Enter a name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required/>
          <FormField name="number" type="tel"
            placeholder="Enter a phone number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required/>
          <FormBtn type="submit">Add contact</FormBtn>
          </FormEl>

        </Formik>
    )
}
