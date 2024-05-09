import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Input } from ".../../components/cmp";
import Header from ".../../components/cmp/Header";
import SidebarShop from "components/cmp/SidebarShop";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'


export default function UpdateTablePage() {
  const { productId } = useParams();
  // console.log(productId);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    category: "",
    price: 0,
    photo: "",
    quantity: 0
  });
  
  const [product, SetProduct] = useState(null);
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await fetch(`http://localhost:7800/api/products/fetchById/${productId}`);
        const productData = await response.json();
        setFormData(productData);
        SetProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProductById();
  }, [productId]);

  // console.log(product.brand);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:7800/api/products/update/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Nice!!",
          text: "Product Updated!",
        });
        setTimeout(() => {
          navigate(`/dashboardadminshop/productlist`);
        }, 1500);
        // Product updated successfully, handle the response as needed
      } else {
        console.error('Failed to Update Product');
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to Update Product",
        });
      }
    } catch (error) {
      console.error('Error updating product:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to Update Product",
      });
    }
  };


  return (
    <>
      <Helmet>
        <title>Dasboard | Update Product</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full items-start justify-center bg-white-A700 md:flex-col">
        <SidebarShop />
        <div className="flex flex-1 flex-col items-center gap-[35px] md:self-stretch md:p-5">
          <Header />
          <div className="flex w-[93%] flex-col items-start gap-[37px] md:w-full">
            <div className="flex flex-col items-start gap-1.5">
              <Text size="xl" as="p">
                Update Table
              </Text>
              <Text size="lg" as="p" className="!text-blue_gray-400">
                Table /Update Product
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
                      type="text"
                      name="brand"
                      placeholder={`Apple`}
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
                  onClick={handleUpdate}
                >
                  Update
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
