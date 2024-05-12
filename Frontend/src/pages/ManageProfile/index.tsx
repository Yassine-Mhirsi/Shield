import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text, RatingBar } from "../../components/ccccmp";
import Header from "../../components/Header";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import { useAuth0 } from "@auth0/auth0-react";


export default function ManageProfile() {

  const calculateDaysBetween = (endDate: string): number => {
    const today = new Date();
    const end = new Date(endDate);

    // Validate date objects to be valid numbers
    if (isNaN(today.getTime()) || isNaN(end.getTime())) {
      console.error("Invalid date provided");
      return 0; // Return 0 or handle this case appropriately
    }

    const difference = end.getTime() - today.getTime(); // difference in milliseconds
    return Math.ceil(difference / (1000 * 60 * 60 * 24)); // Convert to days
  };


  const { user } = useAuth0();
  const [userId, setUserId] = useState(null);
  const [contracts, setContracts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await fetch('http://localhost:7800/api/my/user');
        const allUsers = await response.json();
        const currentUser = allUsers.find(u => u.email === user.email);
        if (currentUser) {
          setUserId(currentUser._id);
        } else {
          console.error('User ID not found');
          setUserId(null);
        }
      } catch (error) {
        console.error('Error fetching user ID:', error);
        setUserId(null);
      }
    };

    if (user) {
      fetchUserId();
    }
  }, [user]);

  useEffect(() => {
    if (userId) { // Fetch contracts only if userId is not null
      const fetchContractByUserId = async () => {
        try {
          const response = await fetch(`http://localhost:7800/contract/fetchContractByUserId/${userId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch contract data');
          }
          const contractData = await response.json();
          setContracts(contractData); // Make sure this is always an array
        } catch (error) {
          console.error('Error fetching Contract:', error);
          setContracts([]); // Set to empty array on error
        }
      };
      fetchContractByUserId();
    } else {
      setContracts([]); // Clear contracts if no valid userId
    }
  }, [userId]);
  // console.log(contract);




  return (
    <>
      <Helmet>
        <title>Manage Profile | Shield</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50_01">
        <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
          <div className="self-stretch">
            <Header />
            <div>
              <Img
                src="images/img_cover_image.png"
                alt="coverimage"
                className="h-[250px] w-full object-cover md:h-auto"
              />
              <div className="relative mt-[-46px] flex flex-col gap-[58px] sm:gap-[29px]">
                <div className="flex justify-center">
                  <div className="container-xs flex items-center justify-center gap-[30px] px-5 md:flex-col md:p-5">
                    <Img
                      src="images/user.png"
                      alt="image"
                      className="h-[150px] w-[150px] rounded-[10px] object-cover md:w-full"
                    />
                    <div className="flex flex-1 items-center justify-between gap-5 self-end md:flex-col md:self-stretch">
                      <div className="flex w-[82%] items-center justify-center gap-8 md:w-full md:flex-col">
                        <div className="flex w-full flex-col items-start justify-center gap-1.5 self-start">
                          <Heading size="3xl" as="h1" className="tracking-[-0.48px]">
                            {user?.nickname}
                          </Heading>
                        </div>
                        <div className="flex w-full flex-col gap-2">
                          <div className="flex items-center gap-[13px] self-start">
                            <Img
                              src="images/img_call_gray_900.svg"
                              alt="call"
                              className="h-[24px] w-[24px] self-start"
                            />
                            <Heading size="md" as="h3" className="!font-semibold">
                              (123) 456-7890
                            </Heading>
                          </div>
                          <div className="flex items-center gap-3 self-start">
                            <Img
                              src="images/img_lock_gray_900.svg"
                              alt="lock"
                              className="h-[24px] w-[24px] self-start"
                            />
                            <Heading size="md" as="h4" className="!font-semibold">
                              {user?.email}
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Tabs
                    className="container-xs flex flex-col gap-12 md:p-5"
                    selectedTabClassName="!text-white-A700 bg-gray-900 rounded-[10px]"
                    selectedTabPanelClassName="relative tab-panel--selected"
                  >
                    <TabList className="flex justify-between p-2.5 md:gap-5">
                      <Tab className="ml-[680px] text-lg font-semibold text-gray-900 border border-gray-300 rounded-md px-4 py-2">Contracts</Tab>
                      <Tab className="mr-[680px] text-lg font-semibold text-gray-900 border border-gray-300 rounded-md px-4 py-2">Reports</Tab>
                    </TabList>
                    <TabPanel className="absolute justify-center">
                      <div className="w-full">
                        <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
                          {contracts.map((cnts, index) => (
                            <div key={`cnts-${index}`} className="flex flex-col w-full">
                              <Img
                                src={cnts.product.picture}
                                alt="Shop Image"
                                className="h-[260px] w-full rounded-tl-[10px] rounded-tr-[10px] object-cover md:h-auto"
                              />
                              <div className="flex flex-col items-center justify-center gap-[25px] self-stretch rounded-bl-[10px] rounded-br-[10px] border border-solid border-red-100_01 bg-gray-50_01 p-5">
                                <div className="mt-2.5 flex items-center gap-3">
                                  <Img src={cnts.shop.picture} alt="Shop Icon" className="h-[24px] w-[24px] rounded-md" />
                                  <Heading as="h6" className="self-end">
                                    {cnts.shop.name}
                                  </Heading>
                                </div>
                                <div className="flex flex-col gap-[19px] self-stretch">
                                  <div className="flex justify-between gap-5">
                                    <div className="flex items-center gap-3 pr-[31px] sm:pr-5">
                                      <Img src="images/insurance.svg" alt="Product SN" className="h-[20px] w-[20px] self-start" />
                                      <Heading as="h6" className="!text-gray-700">
                                        {cnts.insurance.companyName}
                                      </Heading>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <Img src="images/type.svg" alt="User Email" className="h-[20px] w-[20px] self-start" />
                                      <Heading as="h6" className="!text-gray-700">
                                        {cnts.type}
                                      </Heading>
                                    </div>
                                  </div>
                                  <div className="flex justify-between gap-5">
                                    <div className="flex items-center gap-3">
                                      <Img src="images/theft.svg" alt="Insurance TRN" className="h-[20px] w-[20px] self-start" />
                                      <Heading as="h6" className="!text-gray-700">
                                        {cnts.protVol ? "Included" : "Not Included"}
                                      </Heading>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <Img src="images/sands-of-time.svg" alt="Insurance Company" className="h-[20px] w-[20px] self-start" />
                                      <Heading as="h6" className="!text-gray-700">
                                        Ends In {calculateDaysBetween(cnts.date_f)} Days
                                      </Heading>
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-2.5 flex items-center justify-between gap-5 self-stretch pr-[47px] md:pr-5">
                                  <Button shape="round" className="min-w-[156px] font-semibold sm:px-5">
                                    View Details
                                  </Button>
                                  <Heading size="3xl" as="h4" className="tracking-[-0.48px]">
                                    {cnts.price.toFixed(2)}TND
                                  </Heading>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="container-xs flex items-start justify-between gap-5 rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-A700 p-[42px] md:flex-col md:p-5">
            <div className="flex w-[47%] flex-col gap-[57px] md:w-full sm:gap-7">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-[30px] sm:flex-col">
                  <Img
                    src="images/img_rectangle_5599.png"
                    alt="image"
                    className="h-[182px] w-[182px] rounded-[10px] object-cover sm:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start justify-center gap-1.5 sm:self-stretch">
                    <Heading size="3xl" as="h2" className="tracking-[-0.48px]">
                      Bruno Fernandes
                    </Heading>
                    <div className="flex items-start justify-center gap-3.5 self-stretch">
                      <RatingBar value={1} isEditable={true} size={16} className="flex justify-between" />
                      <Heading as="h3">4.5 review</Heading>
                    </div>
                    <div className="flex items-center gap-[13px] self-center">
                      <Img src="images/img_call_gray_900.svg" alt="call" className="h-[24px] w-[24px] self-start" />
                      <Heading size="md" as="h4" className="!font-semibold">
                        (123) 456-7890
                      </Heading>
                    </div>
                    <div className="flex items-center gap-3 self-center">
                      <Img src="images/img_lock_gray_900.svg" alt="lock" className="h-[24px] w-[24px] self-start" />
                      <Heading size="md" as="h5" className="!font-semibold">
                        bruno@relasto .com
                      </Heading>
                    </div>
                  </div>
                </div>
                <Text size="md" as="p" className="leading-[180%] !text-gray-600_02">
                  <>
                    A slider is great way to display a slideshow featuring images or videos, usually on your
                    homepage.Adding sliders to your site is no longer difficult. You don’t have to know coding anymore.
                    Just use a slider widget and it will automatically insert the slider on your web page.
                    <br />
                    One of the best ways to add beautiful sliders with excellent responsiveness and advanced options.{" "}
                  </>
                </Text>
              </div>
              <Button shape="round" className="w-full font-semibold sm:px-5">
                Contact
              </Button>
            </div>
            <div className="flex w-[47%] flex-col gap-6 md:w-full">
              <div className="flex flex-col items-start gap-1.5">
                <Heading size="xl" as="h6" className="tracking-[-0.40px]">
                  Experiences
                </Heading>
                <Heading size="md" as="h6" className="!font-semibold !text-gray-600_02">
                  15+ years experience
                </Heading>
              </div>
              <div className="flex flex-col items-start gap-1.5">
                <Heading size="xl" as="h5" className="tracking-[-0.40px]">
                  Property Types
                </Heading>
                <Heading size="md" as="h6" className="!font-semibold !text-gray-600_02">
                  Private House, Villa, Townhouse, Apartment
                </Heading>
              </div>
              <div className="flex flex-col items-start gap-2">
                <Heading size="xl" as="h5" className="tracking-[-0.40px]">
                  Area
                </Heading>
                <Heading size="md" as="h6" className="!font-semibold">
                  California, San Jose, Miami
                </Heading>
              </div>
              <div className="flex flex-col items-start gap-2">
                <Heading size="xl" as="h5" className="tracking-[-0.40px]">
                  Address
                </Heading>
                <Heading size="md" as="h6" className="!font-semibold !text-gray-600_02">
                  59 Orchard, NY 5005, US
                </Heading>
              </div>
              <div className="flex justify-between gap-5">
                <div className="flex flex-col items-start gap-[7px]">
                  <Heading size="xl" as="h5" className="tracking-[-0.40px]">
                    License No
                  </Heading>
                  <Heading size="md" as="h6" className="!font-semibold !text-gray-600_02">
                    BF-0535
                  </Heading>
                </div>
                <div className="flex flex-col items-start gap-[7px]">
                  <Heading size="xl" as="h5" className="tracking-[-0.40px]">
                    Website
                  </Heading>
                  <Heading size="md" as="h6" className="!font-semibold !text-gray-600_02 underline">
                    www.abc.com
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-3">
                <Heading size="xl" as="h5" className="tracking-[-0.40px]">
                  Social
                </Heading>
                <div className="flex gap-4">
                  <Img src="images/img_facebook.svg" alt="facebook" className="h-[30px] w-[30px]" />
                  <Img src="images/img_link_gray_600_02.svg" alt="link" className="h-[30px] w-[30px]" />
                  <Img src="images/img_favorite.svg" alt="favorite" className="h-[30px] w-[30px]" />
                  <Img src="images/img_warning_gray_600_02.svg" alt="warning" className="h-[30px] w-[30px]" />
                  <Img src="images/img_settings_gray_600_02.svg" alt="settings" className="h-[30px] w-[30px]" />
                </div>
              </div>
            </div>
          </div> */}
          <div className="container-xs flex flex-col gap-[39px] rounded-[10px]  bg-white-A700 py-[30px] md:p-5 sm:py-5">
          </div>
        </div>
      </div>
    </>
  );
}
