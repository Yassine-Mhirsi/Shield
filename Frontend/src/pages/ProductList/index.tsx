import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, CheckBox } from "../../components";
import Header from "../../components/Header";


export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  return (
    <>
      <Helmet>
        <title>Products | Shield</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <Header/>
        <div className="container-sm mt-[31px] flex flex-col gap-[63px] md:p-5 sm:gap-[31px]">
          <div className="flex flex-col items-start gap-[39px]">
            <div className="flex flex-wrap gap-4">
              <Text as="p" className="!font-medium">
                Home
              </Text>
              <Text as="p" className="!font-medium !text-blue_gray-100">
                &gt;
              </Text>
              <Text as="p" className="!font-medium !text-gray-800">
                Product List
              </Text>
            </div>
            <Heading size="md" as="h1" className="self-start !text-gray-800">
              Product List
            </Heading>
          </div>
          <div className="flex items-start gap-8 md:flex-col">
            <div className="flex w-[15%] flex-col items-start gap-8 md:w-full">
              <div className="flex flex-col gap-[31px] self-stretch">
                <div className="flex flex-col items-start gap-[29px]">
                  <Text as="p" className="!font-medium !text-gray-800">
                    Categories
                  </Text>
                  <div className="h-px w-full self-stretch bg-blue_gray-100" />
                </div>
                <div className="flex flex-col items-start gap-[23px]">
                  <div className="flex items-center gap-4">
                    <Img src="images/img_sweater_gray_500.svg" alt="sweater_one" className="h-[32px] w-[32px]" />
                    <Text className="!text-gray-800" as="p">Computers</Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_tshirt.svg" alt="tshirt_one" className="h-[32px] w-[32px]" />
                    <Text as="p" className="!text-gray-800">
                      SmartPhones
                    </Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_pants_gray_500.svg" alt="pants_one" className="h-[32px] w-[32px]" />
                    <Text className="!text-gray-800" as="p">Home Appliances</Text>
                  </div>
                </div>
              </div>
              <div className="h-px w-full self-stretch bg-blue_gray-100" />
              <div className="flex w-[68%] flex-col items-start gap-[29px] md:w-full">
                <Text as="p" className="!font-medium !text-gray-800">
                  Filter by Price
                </Text>
                <div className="flex flex-col gap-6 self-stretch">
                  <CheckBox
                    name="allprice"
                    label="All Price"
                    id="allprice"
                    className="gap-4 text-left text-lg text-gray-500"
                  />
                  <CheckBox
                    name="close"
                    label=">100TND"
                    id="close"
                    className="gap-4 text-left text-lg text-gray-800"
                  />
                  <CheckBox
                    name="square"
                    label=">250TND"
                    id="square"
                    className="gap-4 text-left text-lg text-gray-500"
                  />
                  <CheckBox
                    name="square_one"
                    label=">750TND"
                    id="squareone"
                    className="gap-4 text-left text-lg text-gray-500"
                  />
                  <CheckBox
                    name="square_two"
                    label=">1000TND"
                    id="squaretwo"
                    className="gap-4 text-left text-lg text-gray-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[29px] md:self-stretch">
              <div className="flex justify-between gap-5 sm:flex-col">
                <Text as="p" className="!font-medium">
                  <span className="text-gray-500">Viewing&nbsp;</span>
                  <span className="text-gray-800">{products.length}</span>
                  <span className="text-gray-500">&nbsp;of&nbsp;</span>
                  <span className="text-gray-800">{products.length} product</span>
                </Text>
                <div className="flex items-center gap-4">
                  <Text as="p">
                    <span className="text-gray-500">Sort by:&nbsp;</span>
                    <span className="text-gray-800">Newest Items</span>
                  </Text>
                  <Img src="images/img_arrow_down.svg" alt="arrowdown_three" className="h-[24px] w-[24px] self-start" />
                </div>
              </div>
              {/* <a href="/productdetails" target=""> */}
              <div className="flex flex-col items-center gap-[30px] sm:gap-[27px]">
                <div className="grid grid-cols-3 justify-center gap-4 self-stretch md:grid-cols-2 sm:grid-cols-1">
                  {products.map((product, index) => (
                    <div key={"product" + index} className="flex w-full flex-col items-center gap-4 relative" onClick={() => handleProductClick(product._id)} style={{ border: '1px solid #ccc', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', width: '350px', margin: '15px' }}>
                      <Img src={product.photo} alt={product.brand} className="h-[245px] w-full object-cover md:h-auto" />
                      <div className="flex w-[66%] flex-col items-center gap-2 md:w-full">
                        <Text size="md" as="p" className="text-center !text-gray-800">
                          {product.brand} {product.model}
                        </Text>
                        <Text as="p" className="!font-medium !text-gray-800">
                          {product.price}TND
                        </Text>
                      </div>
                      <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', position: 'absolute', bottom: '10px', left: '10px', border: '2px solid #fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                        <Img src={product.shop.picture} alt={product.shop.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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
                        <a href="/#about">
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
    </>
  );
}
