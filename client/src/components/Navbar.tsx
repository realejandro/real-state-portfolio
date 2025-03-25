import { Box, Button, Container, Separator, Text } from '@chakra-ui/react';
import { ModalLogin } from './ModalLogin';
import { ModalSignUp } from './ModalSignUp';
import Auth from '../utils/auth';

const AppNavbar = () => {

  return (
    <Container fluid display="flex" justifyContent="space-between" css={{backgroundColor:"rgba(0,0,0,0.7)", padding:"5"}}>
       <Box display="flex" flexDirection="column" justifyContent="center">
        <Text margin="0">Prop<span style={{color: "gold"}}>folio</span>
        </Text>
       </Box>
       <Box display="flex" flexDirection="row" justifyContent="end">
        { Auth.loggedIn() ? (
           <>
              <Button 
                size="sm" 
                css={{ backgroundColor: "rgba(0,0,0,0)", color: 'white'}}
                onClick={ Auth.logout }
              >
              Logout
              </Button>
            </> 
            ) : (
            <>
              <ModalLogin />
              <ModalSignUp/>
            </> 
          )
        }
        
       </Box>
    </Container>
  );
};

export default AppNavbar;
