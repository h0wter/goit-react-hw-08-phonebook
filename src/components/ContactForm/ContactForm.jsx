import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';
import { Box } from 'components/Box';
import { StyledForm } from './ContactForm.styled';
import { Button } from 'components/Button/Button';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, phone: number }));
  };

  const onInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.log('error');
        break;
    }
  };

  return (
    <>
      <Formik
        initialValues={(name, number)}
        onSubmit={() => {
          onSubmit(name, number);
          setName('');
          setNumber('');
        }}
      >
        <StyledForm autoComplete="off">
          <label htmlFor="name">Name</label>
          <Box mt="10px" mb="15px">
            <Field
              name="name"
              type="text"
              onChange={onInputChange}
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Box>
          <label htmlFor="number">Number</label>
          <Box mb="15px">
            <Field
              name="number"
              type="tel"
              onChange={onInputChange}
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Box>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </>
  );
};
