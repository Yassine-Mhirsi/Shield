import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text, RatingBar } from "../../components/ccccmp";
import AgentProfileTwo from "../../components/ccccmp/AgentProfileTwo";
// import Footer from "../../components/ccccmp/Footer";
import Header from "../../components/Header";
import LandingPageCard from "../../components/ccccmp/LandingPageCard";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import { useAuth0 } from "@auth0/auth0-react";

const data = [
  {
    descriptiontext:
      "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. ",
    reviewcountertext: "4.5 review",
    datetext: "02 June 2022",
    usernametext: "Taylor Wilson",
    userroletext: "Product Manager - Static Mania",
  },
  {
    descriptiontext:
      "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. ",
    reviewcountertext: "4.5 review",
    datetext: "02 June 2022",
    usernametext: "Taylor Wilson",
    userroletext: "Product Manager - Static Mania",
  },
  {
    descriptiontext:
      "Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last. ",
    reviewcountertext: "4.5 review",
    datetext: "02 June 2022",
    usernametext: "Taylor Wilson",
    userroletext: "Product Manager - Static Mania",
  },
];
const data1 = [
  {
    imageone: "images/img_image_260x384.png",
    locationtext: "2861 62nd Ave, Oakland, CA 94605",
    bedroomtext: "3 Bed Room",
    bathroomtext: "1 Bath",
    sqfttext: "1,032 sqft",
    familytext: "Family",
    viewdetailsbutton: "View Details",
    pricetext: "$649,900",
  },
  {
    imageone: "images/img_image_1.png",
    locationtext: "2861 62nd Ave, Oakland, CA 94605",
    bedroomtext: "3 Bed Room",
    bathroomtext: "1 Bath",
    sqfttext: "1,032 sqft",
    familytext: "Family",
    viewdetailsbutton: "View Details",
    pricetext: "$649,900",
  },
  {
    imageone: "images/img_image_2.png",
    locationtext: "2861 62nd Ave, Oakland, CA 94605",
    bedroomtext: "3 Bed Room",
    bathroomtext: "1 Bath",
    sqfttext: "1,032 sqft",
    familytext: "Family",
    viewdetailsbutton: "View Details",
    pricetext: "$649,900",
  },
  {
    imageone: "images/img_image_3.png",
    locationtext: "2861 62nd Ave, Oakland, CA 94605",
    bedroomtext: "3 Bed Room",
    bathroomtext: "1 Bath",
    sqfttext: "1,032 sqft",
    familytext: "Family",
    viewdetailsbutton: "View Details",
    pricetext: "$649,900",
  },
  {
    imageone: "images/img_image_4.png",
    locationtext: "2861 62nd Ave, Oakland, CA 94605",
    bedroomtext: "3 Bed Room",
    bathroomtext: "1 Bath",
    sqfttext: "1,032 sqft",
    familytext: "Family",
    viewdetailsbutton: "View Details",
    pricetext: "$649,900",
  },
  {
    imageone: "images/img_image_5.png",
    locationtext: "2861 62nd Ave, Oakland, CA 94605",
    bedroomtext: "3 Bed Room",
    bathroomtext: "1 Bath",
    sqfttext: "1,032 sqft",
    familytext: "Family",
    viewdetailsbutton: "View Details",
    pricetext: "$649,900",
  },
];

export default function ManageProfil() {
  const { user } = useAuth0();

  




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
                    {[...Array(4)].map((_, index) => (
                      <TabPanel key={`tab-panel${index}`} className="absolute justify-center">
                        <div className="w-full">
                          <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
                            {data1.map((d, index) => (
                              <LandingPageCard {...d} key={"grid286162Ndave" + index} />
                            ))}
                          </div>
                        </div>
                      </TabPanel>
                    ))}
                    <div className="flex justify-between gap-5 sm:flex-col">
                      <div className="flex gap-[5px]">
                        <Button
                          variant="outline"
                          shape="round"
                          color="undefined_undefined"
                          className="min-w-[48px] font-semibold"
                        >
                          1
                        </Button>
                        <Button
                          variant="outline"
                          shape="round"
                          color="undefined_undefined"
                          className="min-w-[48px] font-semibold"
                        >
                          2
                        </Button>
                        <Button
                          variant="outline"
                          shape="round"
                          color="undefined_undefined"
                          className="min-w-[48px] font-semibold"
                        >
                          3
                        </Button>
                        <Button
                          variant="outline"
                          shape="round"
                          color="undefined_undefined"
                          className="min-w-[48px] font-semibold"
                        >
                          4
                        </Button>
                        <Button
                          variant="outline"
                          shape="round"
                          color="undefined_undefined"
                          className="min-w-[48px] font-semibold"
                        >
                          5
                        </Button>
                      </div>
                      <Button
                        variant="outline"
                        shape="round"
                        color="undefined_undefined"
                        rightIcon={
                          <Img src="images/img_arrowright.svg" alt="arrow_right" className="h-[16px] w-[16px]" />
                        }
                        className="min-w-[134px] gap-1 font-semibold"
                      >
                        Next Page
                      </Button>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
          <div className="container-xs flex items-start justify-between gap-5 rounded-[10px] border border-solid border-blue_gray-100_01 bg-white-A700 p-[42px] md:flex-col md:p-5">
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
          </div>
          <div className="container-xs flex flex-col gap-[39px] rounded-[10px]  bg-white-A700 py-[30px] md:p-5 sm:py-5">
          </div>
        </div>
      </div>
    </>
  );
}
