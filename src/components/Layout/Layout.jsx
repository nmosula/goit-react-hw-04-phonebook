import { Container } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <Container>
      <main>
        <h1>Phonebook</h1>
        {children}
      </main>
    </Container>
  );
};

export default Layout;
