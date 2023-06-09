import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="nav"
      bg="bg-surface"
      boxShadow="sm"
      alignItems="center"
      justify="space-between"
      p={2}
    >
      <span>inAcademy</span>

      <HStack spacing="4">
        {isDesktop && (
          <ButtonGroup variant="ghost" spacing="1">
            <Link to={'/'}>
              <Button>Home</Button>
            </Link>
            <Link to={'/courses'}>
              <Button aria-current="page">Courses</Button>
            </Link>
            <Link to={'/my-courses'}>
              <Button aria-current="page">My Courses</Button>
            </Link>

            {/* <Button>Tasks</Button>
            <Button>Bookmarks</Button>
            <Button>Users</Button> */}
          </ButtonGroup>
        )}
      </HStack>

      {isDesktop ? (
        <HStack spacing="4">
          <ButtonGroup variant="ghost" spacing="1">
            {/* <IconButton
              icon={<FiSearch fontSize="1.25rem" />}
              aria-label="Search"
            /> */}
          </ButtonGroup>

          <Avatar
            boxSize="10"
            name="Christoph Winston"
            src="https://tinyurl.com/yhkm2ek8"
          />
          {/* <ColorModeSwitcher /> */}
        </HStack>
      ) : (
        <IconButton
          variant="ghost"
          icon={<FiMenu fontSize="1.25rem" />}
          aria-label="Open Menu"
        />
      )}
    </Flex>
    //   </Container>
    // </Box>
  );
};

export default Navbar;
