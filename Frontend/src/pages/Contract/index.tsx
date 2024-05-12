import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Text, Input, Img, TextArea, SelectBox, Radio, RadioGroup } from "../../components/cccmp";
import AddressColumnjack from "../../components/cccmp/AddressColumnjack";
import CartElements from "../../components/cccmp/CartElements";
import Footer from "../../components/cccmp/Footer";
import Header from "components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useParams } from "react-router-dom";
import { CheckBox } from "components/ccmp";
import Swal from "sweetalert2";


const data = [
  { selectedvariant: "../../../../public/images/img_frame_lime_900.svg", labeltext: "Free shipping", pricetext: "$0.00" },
  { selectedvariant: "../../../../public/images/img_frame_gray_600_01.svg", labeltext: "Express shipping", pricetext: "+$15.00" },
  { selectedvariant: "../../../../public/images/img_frame_gray_600_01.svg", labeltext: "Pick Up", pricetext: "+$5.00" },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

interface InsuranceType {
  type: string;
  price: number;
}

interface Insurance {
  id: string;
  user: any;
  companyName?: string;
  phoneNumber?: string;
  email?: string;
  picture?: string;
  insurancetypes?: InsuranceType[];
}

export default function Contract() {
  const navigate = useNavigate();
  const [insurances, setInsurances] = useState<Insurance[]>([]);
  const [selectedInsurance, setSelectedInsurance] = useState<string>("");
  const [selectedType, setSelectedType] = useState<InsuranceType | null>(null);
  const [insuranceId, setinsuranceId] = useState("");
  const [insuranceTRN, setinsuranceTRN] = useState("");

  useEffect(() => {
    const fetchInsurance = async () => {
      try {
        const response = await fetch('http://localhost:7800/insurance/fetchAll');
        const allInsurances = await response.json();
        const currentInsurance = allInsurances.find(u => u.companyName === selectedInsurance);
        setInsurances(allInsurances);
        if (currentInsurance) {
          setinsuranceId(currentInsurance._id); // Assuming 'id' is available on currentInsurance
          setinsuranceTRN(currentInsurance.TRN); // Assuming 'TRN' is available on currentInsurance
        } else {
          setinsuranceId('');
          setinsuranceTRN('');
        }
      } catch (error) {
        console.error('Error fetching insurances:', error);
      }
    };

    fetchInsurance();
  }, [selectedInsurance]);

  const handleSelectInsurance = (companyName: string) => {
    setSelectedInsurance(companyName);
    setSelectedType(null);
    setIsChecked(false);
  };

  const handleSelectType = (type: InsuranceType) => {
    setSelectedType(type);
  };


  // ---------------------------------------------------------------------

  const { user } = useAuth0();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await fetch('http://localhost:7800/api/my/user');
        const allUsers = await response.json();
        const currentUser = allUsers.find(u => u.email === user.email);
        if (currentUser) {
          setUserId(currentUser._id);
        } else {
          setUserId('User ID not found');
        }
      } catch (error) {
        console.error('Error fetching user ID:', error);
        setUserId('Error fetching user ID');
      }
    };
    if (user) {
      fetchUserId();
    }
  }, [user]);
  // console.log(userId);

  // ---------------------------------------------------------------------

  const { id } = useParams();
  const [product, SetProduct] = useState(null);
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await fetch(`http://localhost:7800/api/products/fetchById/${id}`);
        const productData = await response.json();
        SetProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProductById();
  }, [id]);


  // -------------------------------------------------------------------------
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  // -------------------------------------------------------------------------

  const [userIdClient, setUserIdClient] = useState(null);
  const [clientData, setclientData] = useState(null);

  useEffect(() => {
    const fetchUserIdinClient = async () => {
      try {
        const response = await fetch('http://localhost:7800/client/fetchAll');
        const allUsers = await response.json();
        const currentUser = allUsers.find(u => u.user.id === userId);
        if (currentUser) {
          setclientData(currentUser);
          setUserIdClient(currentUser._id);
        } else {
          setUserIdClient(false);
        }
      } catch (error) {
        console.error('Error fetching user client ID:', error);
        setUserIdClient(false);
      }
    };
    fetchUserIdinClient();
  }, [userId]); // Ensure userId is included in the dependency array if it's not static  
  // console.log(userIdClient);
  // console.log(clientData);


  // -------------------------------------------------------------------------

  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const handleStateChange = (value) => {
    setState(value);
  };

  const handleZipCodeChange = (value) => {
    setZipCode(value);
  };

  const handleCityChange = (value) => {
    setCity(value);
  };


  function generateSerialNumber(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleConfirm = async () => {
    let success = false;  // Use a local variable to determine success of client update/create
    // console.log("Product ID to add:", id); // Debug: Check what ID is being added
    if (userIdClient && clientData && id) {
      try {
        const updatedListProducts = [...clientData.listProducts, id];
        // console.log("Updated List of Products:", updatedListProducts); // Debug: Verify the new array

        const updatedClientData = {
          ...clientData,
          phone: phone,
          state: state,
          zip_code: parseInt(zipCode, 10),
          city: city,
          listProducts: updatedListProducts
        };

        const updateResponse = await fetch(`http://localhost:7800/client/update/${userIdClient}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedClientData)
        });

        if (updateResponse.ok) {
          // alert('Client information updated successfully!');
          const updateResult = await updateResponse.json();
          // console.log('Update Success:', updateResult);
          setclientData(updatedClientData);
          success = true;
        } else {
          const errorData = await updateResponse.json();
          alert(`Failed to update client information: ${errorData.message}`);
          console.error('Failed to update client information:', errorData);
        }
      } catch (error) {
        alert('An error occurred while updating client information.');
        console.error('Error:', error);
      }
    } else {
      try {
        const response = await fetch('http://localhost:7800/client/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: { id: userId },
            phone: phone,
            state: state,
            zip_code: parseInt(zipCode, 10),
            city: city,
            listProducts: [id]
          })
        });
        if (response.ok) {
          // alert('Client information saved successfully!');
          const result = await response.json();
          console.log('Success:', result);
          success = true;
        } else {
          alert('Failed to save client information');
          const errorData = await response.json();
          console.error('Failed to save client information:', errorData);
        }
      } catch (error) {
        alert('An error occurred while saving the client information.');
        console.error('Error:', error);
      }
    }
    if (success) {
      const serialNumber = generateSerialNumber(10);

      const contractData = {
        // Example data structure, fill with actual data
        user: {
          id: userId,
          email: user?.email // Assuming you have userEmail available
        },
        product: {
          id: id, // Product ID
          SN: serialNumber // Product Serial Number
        },
        shop: {
          id: product.shop.id,
          name: product.shop.name,
          picture: product.shop.picture
        },
        insurance: {
          id: insuranceId,
          TRN: insuranceTRN,
          companyName: selectedInsurance
        },
        date: new Date(), // Current date or another specified date
        date_f: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // For example, one year from now
        protVol: isChecked, // Example value
        price: (selectedType && selectedType.price * 365) + (product ? product.price : 0) + (isChecked ? 50 : 0), // Example price
        type: selectedType.type // Example type
      };

      try {
        const response = await fetch('http://localhost:7800/contract/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(contractData)
        });

        if (response.ok) {
          const result = await response.json();
          // alert('Contract created successfully!');
          console.log('Contract Creation Success:', result);

          Swal.fire({
            icon: "success",
            title: "Nice!!",
            text: "Payment has been Successful",
            confirmButtonText: "Go see Your Contract",
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/manageProfile');
            }
          });

        } else {
          const errorData = await response.json();
          alert(`Failed to create contract: ${errorData.message}`);
          console.error('Failed to create contract:', errorData);
        }
      } catch (error) {
        alert('An error occurred while creating the contract.');
        console.error('Error:', error);
      }
    }
    else {
      alert('Failed to proceed with contract creation due to earlier errors');
    }
  };



  return (
    <>
      <Helmet>
        <title>Shipping Address - Update Your Delivery Details</title>
        <meta
          name="description"
          content="Easily update your shipping address to ensure a smooth delivery experience. Add new addresses for home or office, and select your preferred delivery option."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-10 bg-white-A700">
        <div>
          <Header />
          {/* <div className="flex justify-center bg-black-900 py-4">
            <div className="container-xs flex items-center justify-between gap-5 pl-[371px] md:p-5 md:pl-5 sm:flex-col">
              <div className="flex items-center gap-2 sm:flex-col">
                <Text size="s" as="p" className="flex self-end !font-satoshi !font-medium !text-white-A700">
                  <span className="font-rubik font-normal text-white-A700">
                    Sign up and get 10% off to your first order.&nbsp;
                  </span>
                  <a href="#" className="font-rubik font-normal text-white-A700 underline">
                    Sign Up Now
                  </a>
                </Text>
              </div>
              <a href="#">
                <Img src="../../../../public/images/img_close.svg" alt="close button" className="h-[20px] w-[20px] sm:w-full" />
              </a>
            </div>
          </div> */}
          {/* ------------------------------------------------------------------------------------------------------------------------------ */}
          {/* navigation menu section */}
          {/* <div className="flex justify-center border-b border-solid border-gray-200_01 bg-white-A700 py-3">
              <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
                <Img src="../../../../public/images/img_header_logo.png" alt="header logo" className="h-[19px] w-[129px] object-contain" />
                <ul className="flex items-center gap-11 sm:flex-col">
                  <li>
                    <a href="#">
                      <Text size="s" as="p" className="!font-medium !text-black-900">
                        Home
                      </Text>
                    </a>
                  </li>
                  <li
                    onMouseLeave={() => {
                      setMenuOpen(false);
                    }}
                    onMouseEnter={() => {
                      setMenuOpen(true);
                    }}
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
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Text size="s" as="p" className="hover:font-medium hover:text-black-900">
                        Offers
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Text size="s" as="p" className="hover:font-medium hover:text-black-900">
                        Contact us
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer">
                      <Text size="s" as="p" className="hover:font-medium hover:text-black-900">
                        Blog
                      </Text>
                    </a>
                  </li>
                </ul>
                <div className="flex items-center gap-5">
                  <ul className="flex">
                    <li
                      onMouseLeave={() => {
                        setMenuOpen1(false);
                      }}
                      onMouseEnter={() => {
                        setMenuOpen1(true);
                      }}
                    >
                      <div className="flex cursor-pointer items-center gap-1 rounded-[18px] bg-gray-200_03 p-2">
                        <Img src="../../../../public/images/img_contrast.svg" alt="search icon" className="h-[20px] w-[20px]" />
                        <Text size="xs" as="p">
                          Search for products
                        </Text>
                      </div>
                      {menuOpen1 ? <MegaMenu1 /> : null}
                    </li>
                  </ul>
                  <a href="#">
                    <Img src="../../../../public/images/img_thumbs_up.svg" alt="thumbs up icon" className="h-[20px] w-[20px]" />
                  </a>
                  <a href="#">
                    <Img src="../../../../public/images/img_lock.svg" alt="lock icon" className="h-[20px] w-[20px]" />
                  </a>
                </div>
              </div>
            </div> */}
          {/* breadcrumb navigation section */}
          <div className="flex justify-center bg-gray-200_03 pb-6 pt-[23px] sm:py-5">
            <div className="container-xs flex flex-wrap items-center gap-1 md:p-5">
              <Text as="p" className="!text-black-900">
                Home
              </Text>
              <Img src="../../../../public/images/img_arrow_right_black_900.svg" alt="arrow icon" className="h-[16px] w-[16px]" />
              <Text as="p">Contract/Checkout</Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-24 md:gap-[72px] sm:gap-12">
          {/* checkout steps section */}
          <div className="flex flex-col items-center gap-[38px]">
            {/* shipping address section */}
            <div className="container-xs flex items-start gap-6 md:flex-col md:p-5">
              <div className="flex flex-1 flex-col gap-[47px] md:self-stretch">
                <div className="flex flex-col items-start gap-5">
                  <Text size="3xl" as="p" className="!text-black-900">
                    Choose Insuracne
                  </Text>
                  <div className="flex gap-6 self-stretch md:flex-col">
                    {insurances.map((insurance, index) => (
                      <div
                        key={insurance.id || index}  // Prefer unique id over index if available
                        className="border-2 border-lime-900 px-5 flex flex-col w-full pt-5 pb-[19px] gap-[19px] border-solid rounded-[16px]"
                      >
                        <div className="flex justify-between gap-5 self-stretch">
                          <div className="flex items-center gap-3">
                            <label className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="insurance"
                                value={insurance.companyName}
                                checked={selectedInsurance === insurance.companyName}
                                onChange={() => handleSelectInsurance(insurance.companyName)}
                              />
                              <span className="bg-white-A700 rounded-[24px] py-[15px] pr-[35px] text-sm text-lime-900 sm:pr-5">
                                {insurance.companyName}
                              </span>
                            </label>
                          </div>
                          <div className="flex items-center gap-3">
                            <Img src={insurance.picture} alt="menuicon" className="h-[35px] w-[35px]" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[11px] self-stretch">
                          <div className="flex flex-col items-start gap-1">
                            <Text size="s" as="p">
                              Email : {insurance.user.email}
                            </Text>
                          </div>
                          <div className="flex flex-col items-start gap-1">
                            <Text size="s" as="p">
                              Phone : {insurance.phoneNumber}
                            </Text>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
                <div className="flex flex-col items-start gap-[19px]">
                  <Text size="3xl" as="p" className="!text-black-900">
                    {/* {selectedOption} */}
                  </Text>
                  <div className="flex flex-col gap-[15px] self-stretch">
                    <div className="flex flex-col items-start gap-[7px]">
                      <Text size="s" as="p" className="ml-4 md:ml-0">
                        Contract Type*
                      </Text>
                      <div className="flex self-stretch">
                        {insurances.filter(ins => ins.companyName === selectedInsurance).flatMap(ins => ins.insurancetypes).map((type, index) => (
                          <label key={index} className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="insuranceType"
                              value={type.type}
                              checked={selectedType?.type === type.type}
                              onChange={() => handleSelectType(type)}
                            />
                            <span className="bg-white rounded-full py-2 px-4 text-sm text-green-900">
                              {type.type} - {type.price}TND
                            </span>
                          </label>
                        ))}
                      </div>
                      {selectedType && (
                        <CheckBox
                          name="iconcheck_empt"
                          label="Theft Protection +50TND"
                          id="iconcheckempt"
                          className="gap-2 pb-px pr-[35px] pt-[5px] text-sm text-blue_gray-400 sm:pr-5"
                          onChange={handleCheckboxChange}
                          checked={isChecked}
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <div className="flex gap-6 md:flex-col">
                        <div className="flex w-full flex-col items-start gap-[7px]">
                          <Text size="s" as="p" className="ml-4 md:ml-0">
                            Name*
                          </Text>
                          <Input
                            disabled
                            shape="round"
                            type="text"
                            name="name"
                            placeholder={user?.nickname}
                            prefix={<Img src="../../../../public/images/img_lock_gray_500.svg" alt="lock" className="h-[24px] w-[24px]" />}
                            className="gap-2 self-stretch sm:pr-5 border"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-[7px]">
                          <Text size="s" as="p" className="ml-4 md:ml-0">
                            Email*
                          </Text>
                          <Input
                            disabled
                            shape="round"
                            type="email"
                            name="email"
                            placeholder={user?.email}
                            prefix={
                              <Img src="../../../../public/images/img_checkmark.svg" alt="checkmark" className="h-[24px] w-[24px]" />
                            }
                            className="gap-2 self-stretch sm:pr-5 border"
                          />
                        </div>
                      </div>
                      <div className="flex gap-6 md:flex-col">
                        <div className="flex w-full flex-col items-start gap-[7px]">
                          <Text size="s" as="p" className="ml-4 md:ml-0">
                            Phone*
                          </Text>
                          <Input
                            shape="round"
                            name="phone"
                            placeholder={clientData && clientData.phone ? clientData.phone : '+216'}
                            prefix={
                              <Img src="../../../../public/images/tunisia.svg" alt="fi_4628635" className="h-[24px] w-[24px]" />
                            }
                            onChange={handlePhoneChange}
                            className="gap-2 self-stretch !text-black-900 sm:pr-5 border"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-[7px]">
                          <Text size="s" as="p" className="ml-4 md:ml-0">
                            Province/State*
                          </Text>
                          <Input
                            shape="round"
                            type="text"
                            name="state"
                            placeholder={clientData && clientData.state ? clientData.state : `State`}
                            className="self-stretch !text-black-900 sm:pr-5 border"
                            onChange={handleStateChange}
                          />
                        </div>
                      </div>
                      <div className="flex gap-6 md:flex-col">
                        <div className="flex w-full flex-col items-start gap-[7px]">
                          <Text size="s" as="p" className="ml-4 md:ml-0">
                            Zip code*
                          </Text>
                          <Input
                            shape="round"
                            type="number"
                            name="zipCode"
                            placeholder={clientData && clientData.zip_code ? clientData.zip_code : '2080'}
                            className="self-stretch !text-black-900 sm:pr-5 border"
                            onChange={handleZipCodeChange}
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-[7px]">
                          <Text size="s" as="p" className="ml-4 md:ml-0">
                            City*
                          </Text>
                          <Input
                            shape="round"
                            name="city"
                            placeholder={clientData && clientData.city ? clientData.city : 'Tunis'}
                            className="self-stretch !text-black-900 sm:pr-5 border"
                            onChange={handleCityChange}
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex flex-col items-start gap-[7px]">
                      <Text size="s" as="p" className="ml-4 md:ml-0">
                        Address*
                      </Text>
                      <Input
                        shape="round"
                        name="address"
                        placeholder={clientData && clientData.address ? clientData.address : `Building name / street name`}
                        className="self-stretch !text-black-900 sm:pr-5 border"
                        onChange={handleAddressChange}
                      />
                    </div> */}
                    <CheckBox
                      name="iconcheck_empty"
                      label="By clicking on this, I take all responsibility of the information above"
                      id="iconcheckempty"
                      className="gap-2 pb-px pr-[35px] pt-[5px] text-sm text-blue_gray-400 sm:pr-5"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-[33%] flex-col gap-[31px] rounded-[16px] border border-solid border-gray-200_01 px-4 pb-5 pt-[19px] md:w-full">
                <div className="flex flex-col items-start gap-3">
                  <Text size="s" as="p" className="uppercase">
                    Product value
                  </Text>
                  <div className="flex flex-col gap-[18px] self-stretch">
                    <div className="h-px bg-gray-200_01" />
                    <div className="flex flex-col gap-[19px]">
                      <div className="flex flex-wrap items-center justify-between gap-5">
                        <Text as="p" className="self-start">
                          {product && product.brand} {product && product.model}
                        </Text>
                        <Text as="p" className="!font-inter !font-medium !text-gray-900_01">
                          +{product && product.price}TND
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-5">
                        <Text as="p" className="self-start">
                          Insurance : ----------------------------------------------
                        </Text>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-5">
                        <Text as="p" className="self-end">
                          {selectedInsurance} {selectedType && selectedType.type}
                        </Text>
                      </div>
                      {selectedType && (
                        <div className="flex flex-wrap items-center justify-between gap-5">
                          <Text as="p" className="self-end">
                            Duration 1 Year
                          </Text>
                          <Text as="p" className="!font-inter !font-medium !text-gray-900_01">
                            +{selectedType && (selectedType.price * 365).toFixed(1)}TND
                          </Text>
                        </div>
                      )}
                      {isChecked ? (
                        <div className="flex flex-wrap items-center justify-between gap-5">
                          <Text as="p" className="self-end">
                            Theft Protection
                          </Text>
                          <Text as="p" className="!font-inter !font-medium !text-gray-900_01">
                            +50.00TND
                          </Text>
                        </div>
                      ) : null}
                      <div className="h-px bg-gray-200_01" />
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-5">
                      <Text as="p" className="self-start !text-gray-900">
                        Total
                      </Text>
                      <Heading size="lg" as="h1" className="!text-gray-900">
                        {(selectedType && selectedType.price * 365) + (product ? product.price : 0) + (isChecked ? 50 : 0)}TND
                      </Heading>
                    </div>
                  </div>
                </div>
                <Button onClick={handleConfirm} className="w-full rounded-[24px] font-semibold sm:px-5">Confirm</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
