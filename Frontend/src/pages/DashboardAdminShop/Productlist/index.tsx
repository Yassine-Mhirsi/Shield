import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Button, Img, Text } from ".../../components/cmp";
import Header from ".../../components/cmp/Header";
import { Link, useNavigate } from "react-router-dom";
import SidebarShop from "components/cmp/SidebarShop";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2'


export default function TableListPage() {

  const { user } = useAuth0();
  const [shopInfo, setShopInfo] = useState(null);
  const [products, setProducts] = useState(null);
  const [totalProductsCount, setTotalProductsCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShopInfo = async () => {
      try {
        const response = await fetch('http://localhost:7800/shop/fetchAll');
        const allShops = await response.json();
        const currentShop = allShops.find((u) => u.user.email === user.email);
        if (currentShop) {
          setShopInfo({ id: currentShop._id });
          fetchProducts(currentShop._id); // Fetch products once shop is found
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

  const fetchProducts = async (shopId) => {
    try {
      const response = await fetch(`http://localhost:7800/api/products/fetchByShopId/${shopId}`);
      const productsData = await response.json();
      setProducts(productsData);
      setTotalProductsCount(productsData.length); // Update total count
      const productIds = productsData.map(product => product._id);
      console.log('Product IDs:', productIds);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };


  const handleDelete = async (productId: string) => {
    Swal.fire({
      allowOutsideClick: false,
      title: "You want to delete this Product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:7800/api/products/delete/${productId}`, {
            method: 'DELETE'
          });
          if (response.ok) {
            Swal.fire({
              allowOutsideClick: false,
              title: "Deleted!",
              text: "the user has been deleted.",
              icon: "success",
            });
            setTimeout(() => {
              window.location.reload();
            }, 1500);
            setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
          } else {
            console.error('Failed to delete product');
          }
        } catch (error) {
          console.error('Error deleting product', error);
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the product.",
            icon: "error"
          });
        }
      }
    });
  }

  const handleProductClick = (productId: any) => {
    navigate(`/dashboardadminshop/updateproduct/${productId}`);
  };


  return (
    <>
      <Helmet>
        <title>Dashboard | Products</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start md:flex-col">
          <SidebarShop />
          <div className="flex flex-1 flex-col items-center gap-[35px] md:self-stretch md:p-5">
            <Header />
            <div className="flex w-[93%] flex-col items-start md:w-full">
              <div className="flex flex-row justify-between items-center gap-[1500px]">
                <div>
                  <Text size="xl" as="p">
                    Product List
                  </Text>
                </div>
                <div>
                  <Link to="/dashboardadminshop/addproduct" className="flex items-center">
                    <Button className="rounded-lg bg-blue-500 text-white px-[40px] py-6">Add Product</Button>
                  </Link>
                </div>
              </div>
              {products && products.length > 0 && (
                <table className="w-full mt-8">
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Brand</th>
                      <th>Model</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products &&
                      products.map((product, index) => (
                        <tr key={index}>
                          <td>
                            <img src={product.photo} alt={product.model} style={{ marginLeft: '60px', height: '150px', width: 'auto', maxWidth: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                          </td>
                          <td><Text as="p" style={{ marginLeft: '100px' }}>{product.brand}</Text></td>
                          <td><Text as="p" style={{ marginLeft: '100px' }}>{product.model}</Text></td>
                          <td><Text as="p" style={{ marginLeft: '100px' }}>{product.category}</Text></td>
                          <td><Text as="p" style={{ marginLeft: '100px' }}>${Number(product.price).toFixed(2)}</Text></td>
                          <td><Text as="p" style={{ marginLeft: '100px' }}>{product.quantity}</Text></td>
                          <td>
                            <div className="flex items-center" onClick={() => handleProductClick(product._id)}>
                              <Img src="../../../../public/images/edit.svg" className="mb-[5px] mr-2.5 h-[20px] w-[20px]" />
                            </div>

                          </td>
                          <td>
                            <Link to="" className="flex items-center" onClick={() => handleDelete(product._id)}>
                              <Img src="../../../../public/images/delete.svg" className="mb-[5px] mr-2.5 h-[20px] w-[20px]" />
                            </Link>

                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
              {(!products || products.length === 0) && (
                <p>No products found</p>
              )}
              <div className="mt-[30px] flex items-center justify-between gap-5 self-stretch">
                <div className="flex items-center gap-[18px]">
                  {products && products.length > 0 && (
                    <Text as="p" className="self-end !font-poppins">
                      Displaying {products.length} Out of {totalProductsCount}
                    </Text>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
