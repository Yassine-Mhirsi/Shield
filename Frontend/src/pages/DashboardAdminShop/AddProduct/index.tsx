import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, SelectBox, Img, Text, Input } from ".../../components/cmp";
import Header from ".../../components/cmp/Header";
import { useAuth0 } from "@auth0/auth0-react";
import SidebarShop from "components/cmp/SidebarShop";

// const dropDownOptions = [
//   { label: "Laptop", value: "Laptop" },
//   { label: "Smartphone", value: "Smartphone" },
//   { label: "Home Apliance", value: "Home-Apliance" },
// ];

export default function AddTablePage() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    category: "",
    price: 0,
    photo: "",
    quantity: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSelectChange = (selectedOption: any) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     category: selectedOption,
  //   }));
  // };
  const { user } = useAuth0();
  const [shopInfo, setShopInfo] = useState(null);

  useEffect(() => {
    const fetchShopInfo = async () => {
      try {
        const response = await fetch('http://localhost:7800/shop/fetchAll');
        const allShops = await response.json();
        const currentShop = allShops.find((u: {
          user: any; email: string;
        }) => u.user.email === user.email);
        if (currentShop) {
          setShopInfo({
            id: currentShop._id,
            name: currentShop.companyName, // Assuming 'companyName' is the property containing the shop name
            picture: currentShop.picture // Assuming 'picture' is the property containing the shop picture URL
          });
        } else {
          setShopInfo('Shop info not found');
        }
      } catch (error) {
        console.error('Error fetching Shop info:', error);
        setShopInfo('Error fetching shop info');
      }
    };

    if (user) {
      fetchShopInfo();
    }
  }, [user]);

  // console.log(user.email);
  // console.log(shopInfo.id);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:7800/api/products/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand: formData.brand,
          model: formData.model,
          category: formData.category,
          price: formData.price,
          photo: formData.photo,
          shop: {
            id: shopInfo.id,
            name: shopInfo.name,
            picture: shopInfo.picture
          },
          quantity: formData.quantity
        }),
      });
      if (response.ok) {
        alert("Product created successfully");
        // Optionally, you can reset the form fields here
      } else {
        const data = await response.json();
        alert(data.error || data.message || "Failed to create product");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to create product");
    }
  };


  return (
    <>
      <Helmet>
        <title>Dasboard | Add Product</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full items-start justify-center bg-white-A700 md:flex-col">
        <SidebarShop />
        <div className="flex flex-1 flex-col items-center gap-[35px] md:self-stretch md:p-5">
          <Header />
          <div className="flex w-[93%] flex-col items-start gap-[37px] md:w-full">
            <div className="flex flex-col items-start gap-1.5">
              <Text size="xl" as="p">
                Add Table
              </Text>
              <Text size="lg" as="p" className="!text-blue_gray-400">
                Table /Add Product
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center gap-[25px] self-stretch rounded-[15px] bg-white-A700 p-5 shadow-xs">
              <div className="flex items-start gap-[30px] self-stretch md:flex-col">
                <div className="flex w-full flex-col gap-[18px]">
                  <div className="flex flex-col items-start gap-2">
                    <Text size="lg" as="p">
                      Brand
                    </Text>
                    <input
                      // size="sm"
                      type="text"
                      name="brand"
                      placeholder={`Apple `}
                      className="self-stretch rounded-[5px] border-gray-200 sm:pr-5"
                      value={formData.brand}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1.5">
                    <Text size="lg" as="p">
                      Image URL
                    </Text>
                    <div className="flex justify-center self-stretch rounded-[5px] border border-dashed border-gray-200 bg-gray-50_01 p-[38px] sm:p-5">
                      <div className="flex flex-col items-center gap-2.5">
                        <Img src="../../../../public/images/img_bookmark.svg" alt="bookmark" className="h-[32px] w-[32px]" />
                        <input
                          // size="sm"
                          type="text"
                          name="photo"
                          placeholder={`https://`}
                          className="self-stretch rounded-[5px] border-gray-200 sm:pr-5"
                          value={formData.photo}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[18px]">
                  <div className="flex flex-col items-start gap-2">
                    <Text size="lg" as="p">
                      Model
                    </Text>
                    <input
                      // size="sm"
                      name="model"
                      placeholder={`Iphone 15`}
                      className="self-stretch rounded-[5px] border-gray-200 sm:pr-5"
                      value={formData.model}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1.5">
                    <Text size="lg" as="p" className="!text-blue_gray-400">
                      Categories
                    </Text>
                    <input
                      // size="sm"
                      // variant="fill"
                      // indicator={<Img src="../../../../public/images/img_arrowdown.svg" alt="arrow_down" className="h-[6px] w-[12px]" />}
                      name="category"
                      placeholder={`Select`}
                      // options={dropDownOptions}
                      className="gap-px self-stretch rounded-[5px] border border-solid border-gray-200 sm:pr-5"
                      value={formData.category}
                      onChange={handleInputChange}
                    />

                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Text size="lg" as="p">
                      Price
                    </Text>
                    <input
                      // size="sm"
                      type="number"
                      name="price"
                      placeholder={`TND`}
                      className="self-stretch rounded-[5px] border-gray-200 sm:pr-5"
                      value={formData.price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Text size="lg" as="p">
                      Quantity
                    </Text>
                    <input
                      // size="sm"
                      type="number"
                      name="quantity"
                      placeholder={`Quantity`}
                      className="self-stretch rounded-[5px] border-gray-200 sm:pr-5"
                      value={formData.quantity}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-[5px] flex gap-[21px]">
                <Button
                  size="lg"
                  shape="round"
                  className="min-w-[112px] bg-blue-A200 font-medium sm:px-5"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  shape="round"
                  color="undefined_undefined"
                  className="min-w-[112px] font-medium sm:px-5"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
