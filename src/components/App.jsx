import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <PublicRoute
                  component={RegisterPage}
                  redirectTo={'/contacts'}
                />
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute component={LoginPage} redirectTo={'/contacts'} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={ContactsPage} redirectTo={'/login'} />
              }
            />
          </Route>
        </Routes>
        <GlobalStyle />
      </>
    )
  );
  // return (
  //   <>
  //     <Box as="h2" mb="10px">
  //       Phonebook
  //     </Box>
  //     <ContactForm />
  //     <h2>Contacts</h2>
  //     <Filter />
  //     <ContactList />
  //     <GlobalStyle />
  //   </>
  // );
};
