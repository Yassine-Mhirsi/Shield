import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Input, Img, Heading, Button, RatingBar, CheckBox } from "../../components";
import Header from "../../components/Header";


export default function ProductListPage() {
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

  return (
    <>
      <Helmet>
        <title>react</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <Header className="flex items-center justify-center self-stretch bg-white-A700 py-6 sm:py-5" />
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
            <Heading size="md" as="h1" className="self-end !text-gray-800">
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
                    <Text as="p">Jacket</Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_tshirt.svg" alt="tshirt_one" className="h-[32px] w-[32px]" />
                    <Text as="p" className="!text-gray-800">
                      Shirt
                    </Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_pants_gray_500.svg" alt="pants_one" className="h-[32px] w-[32px]" />
                    <Text as="p">Pants</Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_boot_gray_500.svg" alt="boot_one" className="h-[32px] w-[32px]" />
                    <Text as="p">Shoes</Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_dress_gray_500.svg" alt="dress_one" className="h-[32px] w-[32px]" />
                    <Text as="p">Dress</Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_belt_gray_500.svg" alt="belt_one" className="h-[32px] w-[32px]" />
                    <Text as="p">Accesories</Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_skirt_gray_500.svg" alt="skirt_one" className="h-[32px] w-[32px]" />
                    <Text as="p">Skirt</Text>
                  </div>
                  <div className="flex items-center gap-4">
                    <Img src="images/img_arrow_down_gray_500.svg" alt="arrowdown_one" className="h-[24px] w-[24px]" />
                    <a href="#">
                      <Text as="p">View more</Text>
                    </a>
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
                    label="$100 - $250"
                    id="close"
                    className="gap-4 text-left text-lg text-gray-800"
                  />
                  <CheckBox
                    name="square"
                    label="$250 - $500"
                    id="square"
                    className="gap-4 text-left text-lg text-gray-500"
                  />
                  <CheckBox
                    name="square_one"
                    label="$750 - $1.000"
                    id="squareone"
                    className="gap-4 text-left text-lg text-gray-500"
                  />
                  <CheckBox
                    name="square_two"
                    label="$1000 - $1.500"
                    id="squaretwo"
                    className="gap-4 text-left text-lg text-gray-500"
                  />
                </div>
              </div>
              <div className="h-px w-full self-stretch bg-blue_gray-100" />
              <div className="flex w-[78%] flex-col items-start gap-[29px] md:w-full">
                <Text as="p" className="!font-medium !text-gray-800">
                  Filter by Rating
                </Text>
                <div className="flex flex-col gap-4 self-stretch">
                  <div className="flex w-[33%] gap-4 md:w-full">
                    <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100" />
                    <Img src="images/img_star_1_3.svg" alt="image" className="h-[24px] w-[24px]" />
                  </div>
                  <div className="flex w-[50%] gap-4 md:w-full">
                    <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100" />
                    <div className="flex flex-1 gap-2">
                      <Img src="images/img_star_1_4.svg" alt="image_one" className="h-[24px] w-[24px]" />
                      <Img src="images/img_star_2_2.svg" alt="image_two" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                  <div className="flex w-[67%] gap-4 md:w-full">
                    <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100" />
                    <div className="flex flex-1 gap-2">
                      <Img src="images/img_star_1_5.svg" alt="image_three" className="h-[24px] w-[24px]" />
                      <Img src="images/img_star_2_3.svg" alt="image_four" className="h-[24px] w-[24px]" />
                      <Img src="images/img_star_3_1.svg" alt="image_five" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                  <div className="flex w-[83%] gap-4 md:w-full">
                    <Button size="xs" shape="square" className="w-[24px]">
                      <Img src="images/img_close.svg" />
                    </Button>
                    <div className="flex flex-1 gap-2">
                      <Img src="images/img_star_1_6.svg" alt="image_six" className="h-[24px] w-[24px]" />
                      <Img src="images/img_star_2_4.svg" alt="image_seven" className="h-[24px] w-[24px]" />
                      <Img src="images/img_star_3_2.svg" alt="image_eight" className="h-[24px] w-[24px]" />
                      <Img src="images/img_star_5_24x24.svg" alt="image_nine" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100" />
                    <RatingBar value={5} isEditable={true} size={24} className="flex flex-1 justify-between" />
                  </div>
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
              <a href="/productdetails" target="">
                <div className="flex flex-col items-center gap-[55px] sm:gap-[27px]">
                  <div className="grid grid-cols-5 justify-center gap-8 self-stretch md:grid-cols-3 sm:grid-cols-1">
                    {products.map((product, index) => (
                      <div key={"product" + index} className="flex w-full flex-col items-center gap-4">
                        <Img src={product.photo} alt={product.brand} className="h-[245px] w-full object-cover md:h-auto" />
                        <div className="flex w-[66%] flex-col items-center gap-2 md:w-full">
                          <Text size="md" as="p" className="text-center !text-gray-800">
                          {product.brand} {product.model}
                          </Text>
                          <Text as="p" className="!font-medium !text-gray-800">
                            ${product.price}
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Pagination or navigation controls can be added here */}
                </div>
              </a>
            </div>
            {/* <div className="flex flex-1 flex-col gap-[29px] md:self-stretch">
              <div className="flex justify-between gap-5 sm:flex-col">
                <Text as="p" className="!font-medium">
                  <span className="text-gray-500">Viewing&nbsp;</span>
                  <span className="text-gray-800">20</span>
                  <span className="text-gray-500">&nbsp;of&nbsp;</span>
                  <span className="text-gray-800">160 product</span>
                </Text>
                <div className="flex items-center gap-4">
                  <Text as="p">
                    <span className="text-gray-500">Sort by:&nbsp;</span>
                    <span className="text-gray-800">Newest Items</span>
                  </Text>
                  <Img src="images/img_arrow_down.svg" alt="arrowdown_three" className="h-[24px] w-[24px] self-start" />
                </div>
              </div>
              <a href="/productdetails" target="">
                <div className="flex flex-col items-center gap-[55px] sm:gap-[27px]">
                  <div className="grid grid-cols-5 justify-center gap-8 self-stretch md:grid-cols-3 sm:grid-cols-1">
                    {data.map((d, index) => (
                      <div key={"list" + index} className="flex w-full flex-col items-center gap-4">
                        <Img src={d.greenwarm} alt="green_warm" className="h-[245px] w-full object-cover md:h-auto" />
                        <div className="flex w-[66%] flex-col items-center gap-2 md:w-full">
                          <Text size="md" as="p" className="text-center !text-gray-800">
                            {d.greenwarm1}
                          </Text>
                          <Text as="p" className="!font-medium">
                            $299
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex w-[22%] items-center justify-between gap-5 md:w-full">
                    <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[24px] w-[24px]" />
                    <Button shape="square" className="min-w-[50px] sm:px-5">
                      1
                    </Button>
                    <Button variant="outline" shape="square" color="undefined_undefined" className="min-w-[51px]">
                      2
                    </Button>
                    <Button variant="outline" shape="square" color="undefined_undefined" className="min-w-[51px]">
                      3
                    </Button>
                    <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px]" />
                  </div>
                </div>
              </a>
            </div> */}
          </div>
        </div>
        <footer className="mt-[100px] flex flex-col items-center gap-[97px] self-stretch bg-gray-800 py-[30px] md:gap-[72px] sm:gap-12 sm:py-5">
          <div className="container-sm mt-[31px] flex items-start md:flex-col md:p-5">
            <div className="flex flex-1 flex-col gap-[31px] md:self-stretch">
              <Img src="images/img_footer_logo.png" alt="footerlogo_one" className="h-[36px] w-[27%] object-cover" />
              <Text as="p" className="w-[92%] leading-8 md:w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .
              </Text>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 self-start">
                  <Img src="images/img_call.svg" alt="call_one" className="h-[24px] w-[24px]" />
                  <Text as="p" className="self-start !text-white-A700">
                    +1234567890
                  </Text>
                </div>
                <div className="flex items-center gap-2 self-start">
                  <Img src="images/img_email_white_a700.svg" alt="email_three" className="h-[24px] w-[24px]" />
                  <Text as="p" className="self-end !text-white-A700">
                    elliye@support.com
                  </Text>
                </div>
              </div>
            </div>
            <div className="ml-[278px] flex flex-1 items-start justify-between gap-5 md:ml-0 md:self-stretch">
              <div className="flex flex-col items-start gap-[29px]">
                <Heading as="h4">Product Links</Heading>
                <ul className="flex flex-col items-start gap-[15px]">
                  <li>
                    <a href="#">
                      <Text as="p">Categories</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">New Arrival</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">Features</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p">Collections</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-[29px]">
                <Heading as="h4">Company</Heading>
                <ul className="flex flex-col items-start">
                  <li>
                    <a href="#">
                      <Text as="p">About</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-3">
                      <Text as="p">Blog</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-[7px]">
                      <Text as="p">Careers</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-[9px]">
                      <Text as="p">Services</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-3">
                      <Text as="p">Privacy Policy</Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mt-[7px]">
                      <Text as="p">Terms of service</Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ml-[130px] flex w-[31%] flex-col items-start gap-[30px] md:ml-0 md:w-full">
              <Heading as="h4">Join our Newsletter</Heading>
              <Text as="p">Drop your email below to get update, promotions, coupons, and more!</Text>
              <Input
                size="md"
                variant="fill"
                shape="square"
                type="email"
                name="email"
                placeholder={`Enter your email`}
                suffix={
                  <div className="flex h-[60px] w-[60px] items-center justify-center">
                    <Img src="images/img_submit_white_a700.svg" alt="submit" className="h-[60px] w-[60px]" />
                  </div>
                }
                className="gap-3 self-stretch border border-solid border-white-A700 tracking-[0.36px] sm:pl-5"
              />
            </div>
          </div>
          <div className="container-xs flex flex-col items-center px-[673px] md:p-5 md:px-5">
            <Text size="xs" as="p" className="!text-blue_gray-100">
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
}
