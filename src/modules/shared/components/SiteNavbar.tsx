import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
} from '@nextui-org/navbar';

import { Link } from '@nextui-org/link';
import { Avatar } from '@nextui-org/avatar';

export function StoreNavbar() {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <Avatar name="M" />
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="/store">
            Store
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/cart">
            Cart
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about-me">
            About Me
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
