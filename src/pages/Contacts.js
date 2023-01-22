import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box';
import { GlobalStyle } from 'components/GlobalStyle';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/operations';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box as="h2" mb="10px">
        Phonebook
      </Box>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </>
  );
}
