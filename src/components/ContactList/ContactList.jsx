import { Contact } from "components/Contact/Contact";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    function filteredContacts() {
        if (!filter) {
            return contacts;
        }
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()));

    };

    return (
        <div>
            {filteredContacts().map(contact => {
                return <Contact
                    key={contact.id}
                    contact={contact} />
            }
            )}
        </div>
    );
};