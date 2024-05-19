import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import ReactiveButton from 'reactive-button';
import Header from "../../components/Header";

const data3 = [
  { truckone: "images/img_truck.svg", freedelivery: "Computers" },
  { truckone: "images/img_card.svg", freedelivery: "SmartPhones" },
  { truckone: "images/img_broken.svg", freedelivery: "Home Appliances" },
  // { truckone: "", freedelivery: " " },
];

export default function HomepageVOnePage() {


  const navigate = useNavigate();
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const [userRole, setUserRole] = useState(null);



  const [userStatus, setUserStatus] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const response = await fetch('http://localhost:7800/api/my/user');
        const allUsers = await response.json();
        const currentUser = allUsers.find(u => u.email === user.email);
        if (currentUser) {
          setUserRole(currentUser.role);
        } else {
          setUserRole('Role not found');
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
        setUserRole('Error fetching role');
      }
    };

    const fetchUserStatus = async () => {
      try {
        const response = await fetch('http://localhost:7800/partner/fetchAllPartner');
        const allUsers = await response.json();
        const currentUser = allUsers.find(u => u.user.email === user.email);
        if (currentUser) {
          setUserStatus(currentUser.status);
        } else {
          console.log('Status not found');
        }
      } catch (error) {
        console.error('Error fetching user status:', error);
        // setUserStatus('Error fetching status');
      }
    };

    if (user) {
      fetchUserRole();
      fetchUserStatus();
    }
  }, [user]);


  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:7800/api/products/fetchAll');
        const allProducts = await response.json();
        // Update state with fetched products
        setProducts(allProducts);
        // console.log("products:", allProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error condition if needed
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (productId: any) => {
    navigate(`/productdetails/${productId}`);
  };

  const handleButtonClick = () => {
    if (isAuthenticated) {
      if (userStatus === 'accepted') {
        navigate(`/dashboardadmin${userRole}`);
      } else if (userStatus === 'waiting') {
        alert('Your request is still being processed');
      } else if (userStatus === 'refused') {
        alert('Your request was refused');
      } else {
        navigate(`/submitPartner`);
      }
    } else {
      loginWithRedirect();
    }
  };

  const getButtonIdleText = (role) => {
    switch (role) {
      case 'client':
        return 'Become a Partner';
      case 'shop':
        return 'Dashboard Shop';
      case 'insurance':
        return 'Dashboard Insurance';
      case 'repairshop':
        return 'Dashboard Repair Shop';
      default:
        return 'Become a Partner';
    }
  };

  const home = () => {
    navigate(`/`);
  };



  return (
    <>
      <Helmet>
        <title>Shield</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700" id="top">
        <Header />
        <div className="relative flex items-center justify-end self-stretch md:flex-col w-full">
          <img src="../../../public/images/shieldd.png" alt="" className="w-full h-auto" />
          <div className="absolute top-[700px] left-[0px] right-[0px] bottom-0 flex items-center justify-center">
            {/* <div>
              <Text>Protect your electronics with our comprehensive insurance plans.</Text>
            </div> */}
            <ReactiveButton
              color="violet"
              size="large"
              rounded
              width="300px"
              height="70px"
              idleText={getButtonIdleText(userRole)}
              style={{ fontSize: '22px' }}
              onClick={handleButtonClick}
            />
          </div>
        </div>
        <div className="mt-[104px] flex flex-col items-center gap-[27px] self-stretch" id="about">
          <div className="container-xs flex flex-col items-center md:p-5">
            <Heading size="md" as="h2" className="!text-gray-800">
              About
            </Heading>
          </div>
          <div className="flex flex-col items-center self-stretch bg-gray-50 pl-10 pr-14 md:px-5">
            <Text style={{ fontSize: '22px' }} className="text-center mt-4 max-w-2xl mx-auto text-lg text-black font">
              At SHIELD Insurance, Our mission is to offer our clients the security and protection they need to face life's
              unexpected events with confidence.
            </Text>
            <div className="flex w-full md:flex-col gap-8">
              {data3.map((d, index) => (
                <div
                  key={"content" + index}
                  className="flex w-full flex-col items-center justify-center gap-8 px-14 py-[63px] md:w-full md:px-5 md:py-10"
                >
                  <div className="w-full rounded-[60px] border-2 border-solid border-gray-500 p-[27px] md:p-5">
                    <Img src={d.truckone} alt="truck_one" className="mx-auto h-[65px] w-[65px]" />
                  </div>
                  <div className="flex w-full flex-col items-center gap-3.5">
                    <Heading as="h2" className="!text-gray-800">
                      {d.freedelivery}
                    </Heading>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
        <div className="container-sm mt-[99px] flex flex-col gap-8 md:p-5">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <Heading size="md" as="h2" className="!text-gray-800">
              Products
            </Heading>
            <a href="#">
              <Text as="p" className="!font-medium !text-gray-800">
                View all
              </Text>
            </a>
          </div>
          <div className="grid grid-cols-3 justify-center gap-8 pb-[67px] pr-[67px] md:grid-cols-2 md:pb-5 md:pr-5 sm:grid-cols-1">
            {products.map((product) => (
              <div key={product._id} className="flex w-full flex-col items-center gap-[15px] border-0 border-solid border-gray-800 p-[43px] md:p-5">
                <Img
                  src={product.photo || 'images/img_placeholder_250x250.png'}
                  alt={product.brand}
                  className="h-[250px] w-[250px] object-cover"
                />
                <div className="flex flex-col items-center gap-[9px]">
                  <Text size="md" as="p" className="!text-gray-800">
                    {product.brand} {product.model}
                  </Text>
                  <Text as="p" className="!font-medium">
                    {product.price}TND
                  </Text>
                </div>
                <Button onClick={() => handleProductClick(product._id)} size="5xl" shape="square" className="min-w-[200px] font-bold sm:px-5">
                  Buy Now
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[100px] flex flex-col items-center gap-[100px] self-stretch md:gap-[75px] sm:gap-[50px]">
          <footer className="flex items-end justify-center self-stretch bg-black py-[30px] sm:py-5">
            <div className="container-xs mt-[31px] flex justify-center pr-[90px] md:p-5 md:pr-5">
              <div className="flex w-full flex-col items-center gap-[82px] md:gap-[61px] sm:gap-[41px]">
                <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                  <div className="flex w-[28%] flex-col items-start gap-[30px] md:w-full">
                    <a href="#top">
                      <img src="/public/images/small-logo.png" alt="" height={'200px'} width={'200px'} />
                    </a>
                    {/* <Text as="p" className="!text-white-A700">
                      <>
                        Drop your email below to get update about us, <br />
                        lastest news, tips, and more!
                      </>
                    </Text>
                    <Input
                      size="md"
                      variant="fill"
                      shape="square"
                      type="email"
                      name="email"
                      placeholder={`Enter your email`}
                      suffix={<Img src="images/img_arrow_gray_800.svg" alt="Arrow" className="h-[31px] w-[32px]" />}
                      className="w-[91%] gap-[35px] tracking-[0.36px] text-gray-500_7f sm:pl-5"
                    /> */}
                  </div>
                  <div className="flex items-start md:flex-col">
                    {/* <div className="flex flex-col items-start gap-[21px]">
                      <Heading as="h4">Shops</Heading>
                      <ul className="flex flex-col items-start gap-[9px]">
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              Visit Shop
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              New Arrival
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              Features
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              Collections
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                    <div className="ml-28 flex flex-col items-start gap-[21px] md:ml-0">
                      <Heading as="h4">Company</Heading>
                      <ul className="flex flex-col items-start">
                        <li>
                          <a href="#about">
                            <Text as="p" className="!text-white-A700">
                              About
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="/productlist" className="mt-3">
                            <Text as="p" className="!text-white-A700">
                              Visit Shop
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="/submitPartner" className="mt-[7px]">
                            <Text as="p" className="!text-white-A700">
                              Become a partner
                            </Text>
                          </a>
                        </li>
                        {/* <li>
                          <a href="#" className="mt-2.5">
                            <Text as="p" className="!text-white-A700">
                              Contact{" "}
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="mt-[9px]">
                            <Text as="p" className="!text-white-A700">
                              Services
                            </Text>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                    <div className="ml-[154px] flex flex-col items-start gap-[21px] md:ml-0">
                      <Heading as="h4">Support</Heading>
                      <ul className="flex flex-col items-start gap-[9px]">
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              Support Center
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              FAQ
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              Privacy Policy
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-white-A700">
                              Terms of service
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex w-[10%] flex-col items-start gap-6 md:w-full">
                    <Heading as="h4">Get In Touch</Heading>
                    <div className="flex w-[78%] justify-between gap-5 md:w-full">
                      <a href="https://www.instagram.com/polytechinternationale/">
                        <Img src="images/img_instagram.svg" alt="instagram_one" className="h-[24px] w-[24px]" />
                      </a>
                      <a href="https://www.linkedin.com/school/polytechnique-internationale/">
                        <Img src="images/img_trash.svg" alt="trash_one" className="h-[24px] w-[24px]" />
                      </a>
                      <a href="https://www.facebook.com/polytechinternationale">
                        <Img src="images/img_facebook.svg" alt="facebook_one" className="h-[24px] w-[24px]" />
                      </a>
                    </div>
                  </div>
                </div>
                <Text size="xs" as="p" className="!text-white-A700">
                  Copyright © 2024 Shield. All Right Reseved
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
