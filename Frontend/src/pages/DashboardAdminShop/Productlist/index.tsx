import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text } from ".../../components/cmp";
import Header from ".../../components/cmp/Header";
import { ReactTable } from ".../../components/cmp/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import SidebarShop from "components/cmp/SidebarShop";
import { useAuth0 } from "@auth0/auth0-react";


type Table1RowType = {
  id: string;
  photo: string;
  brand: string;
  model: string;
  category: string;
  price: string;
  SN: string;
};

export default function TableListPage() {

  const { user } = useAuth0();
  const [shopInfo, setShopInfo] = useState(null);
  const [products, setProducts] = useState<Table1RowType[]>([]);

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
      const response = await fetch(`http://localhost:7800/api/products/fetchByShopId/${shopId}`); // Ensure the URL matches your server configuration
      const productsData = await response.json();
      setProducts(productsData);
      const productIds = productsData.map(product => product._id);
      console.log('Product IDs:', productIds);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };


  // console.log(id);
  // console.log(products);



  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper<Table1RowType>();
    return [
      table1ColumnHelper.accessor("photo", {
        cell: (info) => <img src={info.row.original.photo} alt="Product" style={{ width: '60px', marginLeft: '85px' }} />,
        header: () => <Text size="q" as="p" className="py-px pl-[26px] sm:pl-5 text-[#438ffe]">Photo</Text>,
        meta: { width: "137px" },
      }),
      table1ColumnHelper.accessor("brand", {
        cell: (info) => <Text as="p" style={{ marginLeft: '130px' }}>{info.row.original.brand} </Text>,
        header: () => <Text size="q" as="p" className="p-px text-[#438ffe]">Brand</Text>,
        meta: { width: "213px" },
      }),
      table1ColumnHelper.accessor("model", {
        cell: (info) => <Text as="p" style={{ marginLeft: '110px' }}>{info.row.original.model}</Text>,
        header: () => <Text size="q" as="p" className="p-px text-[#438ffe]">Model</Text>,
        meta: { width: "196px" },
      }),
      table1ColumnHelper.accessor("category", {
        cell: (info) => <Text as="p" style={{ marginLeft: '100px' }}>{info.row.original.category}</Text>,
        header: () => <Text size="q" as="p" className="p-px text-[#438ffe]">Category</Text>,
        meta: { width: "191px" },
      }),
      table1ColumnHelper.accessor("price", {
        cell: (info) => <Text as="p" style={{ marginLeft: '140px' }}>${Number(info.row.original.price).toFixed(2)}</Text>,
        header: () => <Text size="q" as="p" className="p-px text-[#438ffe]">Price</Text>,
        meta: { width: "137px" },
      }),
      table1ColumnHelper.accessor("SN", {
        cell: (info) => (
          <div className="flex flex-1 items-end justify-between gap-5 md:self-stretch">
            <Text as="p" style={{ marginLeft: '150px' }}>{info.row.original.SN}</Text>
            <Link to="/" className="flex items-center">
            <Img src="../../../../public/images/edit.svg" alt="settings" className="mb-[5px] mr-2.5 h-[20px] w-[20px] " />
            </Link>
            <Link to="/" className="flex items-center">
            <Img src="../../../../public/images/delete.svg" alt="settings" className="mb-[5px] mr-2.5 h-[20px] w-[20px] " />
            </Link>
          </div>
        ),
        header: () => <Text size="q" as="p" className="p-px text-[#438ffe]" >Serial Number</Text>,
        meta: { width: "236px" },
      }),
    ];
  }, []);


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
                  <Text size="lg" as="p" className="!text-blue_gray-400">
                    Add Product / Product List
                  </Text>
                </div>
                <div>
                  <Link to="/dashboardadminshop/addproduct" className="flex items-center">
                    <Button className="rounded-lg bg-blue-500 text-white px-[40px] py-6">Add Product</Button>
                  </Link>
                </div>
              </div>

              <ReactTable
                size="xs"
                bodyProps={{ className: "" }}
                headerProps={{ className: "flex-wrap" }}
                rowDataProps={{ className: "md:flex-col" }}
                className="mt-16 self-stretch rounded-[15px] bg-white-A700 shadow-xs"
                columns={table1Columns} data={products}
              />
              <div className="mt-[30px] flex items-center justify-between gap-5 self-stretch">
                <Text as="p" className="self-end !font-poppins">
                  Dispalying 10 Out of 250
                </Text>
                <div className="flex items-center gap-[18px]">
                  <Text as="p">10-250</Text>
                  <div className="flex">
                    <Button
                      size="sm"
                      className="relative z-[1] w-[30px] rotate-[180deg] rounded-br-[5px] rounded-tr-[5px] bg-blue-A200"
                    >
                      <Img src="../../../../public/images/img_arrow_right_white_a700.svg" />
                    </Button>
                    <Button size="sm" className="relative ml-[-1px] w-[30px] rounded-br-[5px] rounded-tr-[5px]">
                      <Img src="../../../../public/images/img_arrow_right_blue_a200.svg" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
