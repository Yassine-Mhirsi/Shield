import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Input, Heading } from "../../components";
import Header from "../../components/Header";
import { useNavigate, useParams } from "react-router-dom";

const data = [
  { placeholderone: "images/img_placeholder_137x139.png" },
  { placeholderone: "images/img_placeholder_26.png" },
  { placeholderone: "images/img_placeholder_27.png" },
];
const data1 = [
  { placeholderone: "images/img_travel_8v7cnke.png", graytshirt: "Gray T-shirt" },
  { placeholderone: "images/img_placeholder_2.png", graytshirt: "Red Flannel" },
];

export default function ProductDetailsPage() {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async (PID) => {
      try {
        const response = await fetch(`http://localhost:7800/api/products/fetchById/${PID}`);
        const Products = await response.json();
        // Update state with fetched products
        setProduct(Products);
        // console.log("products:", allProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error condition if needed
      }
    };

    fetchProducts(id);
  }, []);


  const navigate = useNavigate();
  const handleProductClick = (productId: any) => {
    navigate(`/contract/${productId}`);
  };

  // useEffect(() => {
  //   // Only make the fetch request if product.category is available
  //   if (product.category !== undefined) {
  //     const fetchProductsByCategory = async (catego) => {
  //       try {
  //         const response = await fetch(`http://localhost:7800/api/products?category=${catego}`);
  //         if (!response.ok) {
  //           throw new Error('Failed to fetch products');
  //         }
  //         const Products = await response.json();
  //         setProducts(Products);
  //       } catch (error) {
  //         console.error('Error fetching products:', error);
  //         // Handle error condition if needed
  //       }
  //     };

  //     fetchProductsByCategory(product.category);
  //   }
  // }, [product]); // Include product as a dependency


  return (
    <>
      <Helmet>
        <title>Product Details | Shield</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <Header className="flex items-center justify-center self-stretch bg-white-A700 py-6 sm:py-5" />
        <div className="container-sm mt-[31px] flex flex-col gap-[181px] md:gap-[135px] md:p-5 sm:gap-[90px]">
          <div className="flex items-center gap-8 md:flex-col">
            <div className="flex w-full flex-col items-center gap-8">
              <Img
                src={product.photo}
                alt={product.model}
                className="h-[523px] w-full object-cover md:h-auto"
              />
            </div>
            <div className="flex w-full flex-col items-start gap-14 sm:gap-7">
              <div className="flex flex-col gap-[29px] self-stretch">
                <div className="flex flex-wrap gap-4">
                  <Text as="p" className="self-start !font-medium">
                    Featured
                  </Text>
                  <Text as="p" className="self-start !font-medium !text-blue_gray-100">
                    &gt;
                  </Text>
                  <Text as="p" className="self-end !font-medium">
                    {product.model}
                  </Text>
                </div>
                <div className="flex flex-col items-start gap-[31px]">
                  <Heading size="lg" as="h1" className="w-[49%] !text-gray-800 md:w-full">

                    {product.brand}  {product.model}

                  </Heading>
                  <Text size="lg" as="p" className="!text-gray-800">
                    {product.price} TND
                  </Text>
                  {/* <div className="h-px w-full self-stretch bg-blue_gray-100" /> */}

                </div>
              </div>
              <div style={{ backgroundColor: 'black', padding: '8px', borderRadius: '20px', display: 'inline-block' }}>
                <a href="" target="">
                  <Button
                    size="4xl" // Adjusted size to be smaller
                    className="min-w-[40px] gap-2 font-bold sm:px-3" // Adjusted padding
                    style={{ color: 'white', borderRadius: '20px' }} // Set text color to white and rounded corners
                    onClick={()=>handleProductClick(id)}
                  >
                    Buy now
                  </Button>
                </a>
              </div>

            </div>
          </div>
          <div className="flex flex-col gap-[33px]">
            <div className="flex items-center justify-between gap-5 sm:flex-col">
              <div className="flex w-[24%] flex-wrap items-center justify-between gap-5 sm:w-full">
                <Heading size="md" as="h2" className="!text-gray-800">
                  Similiar Product
                </Heading>
                <a href="#">
                  <Text as="p" className="!font-medium">
                    View all
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5 px-[67px] md:flex-col md:px-5" >
              {products.map((product) => (
                <a href={`/productdetails/${product._id}`}>
                  <div className="flex w-[17%] flex-col items-center gap-3.5 md:w-full" >
                    <Img
                      src={product.photo}
                      alt="placeholder"
                      className="h-[250px] w-full object-cover md:h-auto"
                    />
                    <div className="flex flex-col items-center gap-[9px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        {product.brand}
                      </Text>
                      <Text as="p" className="!font-medium">
                        {product.price}
                      </Text>
                    </div>
                  </div>
                </a>
              ))}
              {/* <div className="flex w-[26%] flex-col items-center justify-center gap-3.5 px-14 py-[67px] md:w-full md:p-5">
                <Img
                  src="images/img_placeholder_24.png"
                  alt="placeholder"
                  className="mt-3.5 h-[250px] w-[250px] object-cover"
                />
                <div className="mb-3.5 flex flex-col items-center gap-[9px]">
                  <Text size="md" as="p" className="!text-gray-800">
                    Pink Shirt
                  </Text>
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div> */}
              {/* <div className="flex w-[44%] gap-[166px] md:w-full md:flex-row sm:flex-col">
                {data1.map((d, index) => (
                  <div key={"listplaceholder1" + index} className="flex w-full flex-col items-center gap-4 sm:w-full">
                    <Img
                      src={d.placeholderone}
                      alt="placeholder_one"
                      className="h-[250px] w-full object-cover md:h-auto"
                    />
                    <div className="flex flex-col items-center gap-1.5">
                      <Text size="md" as="p" className="!text-gray-800">
                        {d.graytshirt}
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
        <footer className="mt-[100px] flex flex-col items-center gap-[97px] self-stretch bg-gray-800 py-[30px] md:gap-[72px] sm:gap-12 sm:py-5">
          <div className="container-sm mt-[31px] flex items-start md:flex-col md:p-5">
            <div className="flex flex-1 flex-col gap-[31px] md:self-stretch">
              <Img src="../../../../public/images/img_footer_logo.png" alt="footerlogo_one" className="h-[36px] w-[27%] object-cover" />
              <Text as="p" className="w-[92%] leading-8 md:w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .
              </Text>
              <div className="flex flex-col items-start gap-[18px]">
                <div className="flex items-center gap-2">
                  <Img src="../../../../public/images/img_call.svg" alt="call_one" className="h-[24px] w-[24px]" />
                  <Text as="p" className="!text-white-A700">
                    +1234567890
                  </Text>
                </div>
                <div className="flex items-center gap-2">
                  <Img src="../../../../public/images/img_email_white_a700.svg" alt="email_three" className="h-[24px] w-[24px]" />
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
              <div className="flex items-center justify-center self-stretch border border-solid border-white-A700 bg-gray-800 pl-6 sm:pl-5">
                <Input
                  size="xs"
                  shape="square"
                  type="email"
                  name="email"
                  placeholder={`Enter your email`}
                  className="flex-grow tracking-[0.36px] text-blue_gray-100_7f"
                />
                <Button size="4xl" shape="square" className="relative ml-[-9px] w-[60px]">
                  <Img src="../../../../public/images/img_submit.svg" />
                </Button>
              </div>
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
