import React, { useEffect, useState } from "react";
import { Text, Img, Button } from "../../components";
import AliceCarousel, { Link } from "react-alice-carousel";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "components/UsernameMenu";
import { useNavigate } from 'react-router-dom';


interface Props {
  className?: string;
}

export default function Header() {
  const navigate = useNavigate();
  const home = () => {
    navigate(`/`);
  };

  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  // const [userRole, setUserRole] = useState(null);

  // useEffect(() => {
  //   const fetchUserRole = async () => {
  //     try {
  //       const response = await fetch('http://localhost:7800/api/my/user');
  //       const allUsers = await response.json();
  //       // console.log("All users:", allUsers);
  //       const currentUser = allUsers.find((u: { email: string; }) => u.email === user.email);
  //       // console.log("Current user:", currentUser);
  //       if (currentUser) {
  //         // Assuming currentUser contains role information
  //         setUserRole(currentUser.role);
  //       } else {
  //         setUserRole('Role not found');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user role:', error);
  //       setUserRole('Error fetching role');
  //     }
  //   };

  //   if (user) {
  //     fetchUserRole();
  //   }
  // }, [user]);


  return (
    <header className="flex items-center justify-center self-stretch bg-black py-[17px]">
      <div className="container-sm flex items-center justify-between gap-5 md:flex-col md:p-5">
        <Img
          onClick={home}
          src="images/small-logo.png"
          alt="headerlogo_one"
          className="h-[55px] w-[80px] object-cover md:w-full"
        />
        <div className="flex w-[69%] items-center justify-between gap-5 md:w-full md:flex-col">
          <ul className="flex flex-wrap gap-20 md:gap-5">
            <li>
              <a href="/" className="self-start">
                <Text as="p" className="!font-medium">Home</Text>
              </a>
            </li>
            <li className="relative">
              <a href="#about" className="self-start">
                <Text as="p" className="!font-medium">About Us</Text>
              </a>
            </li>
            <li>
              <a href="/productlist" className="self-start">
                <Text as="p" className="!font-medium">Products</Text>
              </a>
            </li>
            <li>
              <a href="/ourpartners" className="self-start">
                <Text as="p" className="!font-medium">Our Partners</Text>
              </a>
            </li>
            {/* <li
            onMouseLeave={() => setMenuOpen(false)}
            onMouseEnter={() => setMenuOpen(true)}
          >
            <div className="flex cursor-pointer pt-px">
              <Text size="s" as="p" className="cursor-pointer hover:font-medium hover:text-black-900">
                Shop
              </Text>
              <Img
                src="../../../../public/images/img_arrow_down_gray_600_01.svg"
                alt="dropdown icon"
                className="h-[16px] w-[16px]"
              />
            </div>
            {menuOpen ? <MegaMenu1 /> : null}
          </li> */}
          </ul>
          <div className="flex w-[22%] items-center justify-between gap-40 md:w-full">
            <div className="flex w-[33%] justify-between gap-5">
            </div>
            <span className="flex space-x-2 items-center">
              {isAuthenticated ? (
                <>
                  <Link className="font-bold hover:text-orange-500"></Link>
                  <UsernameMenu />
                </>
              ) : (
                <Button
                  shape="square" className="min-w-[150px] font-bold sm:px-5 text-[#ffffff]"
                  onClick={async () => await loginWithRedirect()}>
                  Log In
                </Button>
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
