import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input, SelectBox } from "../../components";
import Header from "../../components/Header";
import { useAuth0 } from "@auth0/auth0-react";





const options = [
  { value: 'repair-shop', label: 'Repair Shop' },
  { value: 'insurance', label: 'Insurance' },
  { value: 'shop', label: 'Shop' },
];

export default function SubmitPartner() {
  
  const { user } = useAuth0();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await fetch('http://localhost:7800/api/my/user');
        const allUsers = await response.json();
        const currentUser = allUsers.find((u: { email: string; }) => u.email === user.email);
        if (currentUser) {
          setUserId(currentUser._id); // Assuming 'id' is the property containing the user ID
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


  const [formValues, setFormValues] = useState({
    TRN: "",
    companyName: "",
    phoneNumber: "",
    newRole: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };


  const handleSelectChange = (selectedOption: any) => {
    setFormValues((prev) => ({
      ...prev,
      newRole: selectedOption,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:7800/partner/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          email: user?.email,
          TRN: formValues.TRN,
          companyName: formValues.companyName,
          phoneNumber: formValues.phoneNumber,
          newRole: formValues.newRole?.value,
        }),
      });
      if (response.ok) {
        alert("Partner information submitted successfully");
        // Reset form values if needed
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("Error submitting partner information:", error);
      alert("Failed to submit partner information");
    }
  };

  return (
    <>
      <Helmet>
        <title>Shield | Partners</title>
      </Helmet>
      <div className="w-full bg-gray-50">
        <div className="flex md:flex-col">
          <div className="flex flex-1 flex-col justify-center gap-[25px] md:self-stretch md:p-5 md:pb-5">
            <Header className="flex items-center bg-white-A700_01 p-2.5" />
            <div className="flex w-[96%] flex-col items-start gap-[33px] pt-[50px] pb-[170px] md:w-full p-[700px]">
              <Text size="lg" className="text-[#09090b] !font-bold">
                Become One Of Our Partner
              </Text>
              <div className="flex gap-5 self-stretch md:flex-col">
                <div className="flex flex-1 flex-col gap-5 md:self-stretch">
                  <div className="flex flex-col items-center gap-8 rounded bg-white-A700_01 p-8 shadow-sm sm:p-5">
                    <div className="flex flex-col items-start justify-start gap-3.5">
                    </div>
                    <div className="flex flex-col gap-6 self-stretch ">
                      <div className="flex gap-5 md:flex-col">
                        <div className="flex w-full flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="text-[#09090b]">Tax Registration Number</Text>
                          <input
                            // shape="round"
                            name="TRN"
                            placeholder="1234567L"
                            className="self-stretch border-2 border-[#404040] font-semibold !text-blue_gray-800 sm:pr-5"
                            value={formValues.TRN}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="flex w-full flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="text-[#09090b]">Company Name</Text>
                          <input
                            // shape="round"
                            name="companyName"
                            placeholder={"Company Name"}
                            className="self-stretch border-2 border-[#404040] font-semibold !text-blue_gray-800 sm:pr-5"
                            value={formValues.companyName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 self-stretch ">
                      <div className="flex gap-5 md:flex-col">
                        <div className="flex w-full flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="text-[#09090b]">Phone Number</Text>
                          <input
                            // shape="round"
                            name="phoneNumber"
                            placeholder={"12345678"}
                            className="self-stretch border-2 border-[#404040] font-semibold !text-blue_gray-800 sm:pr-5"
                            value={formValues.phoneNumber}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="flex w-full flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="text-[#09090b]">Role</Text>
                          <SelectBox
                            options={options}
                            onChange={handleSelectChange}
                            placeholder="Select Role"
                            isMulti={false}
                            shape="square"
                            variant="outline"
                            size="xs"
                            color="blue_gray_100"
                            defaultValue={formValues.newRole}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full rounded-[24px] font-bold sm:px-5 bg-blue-200 hover:bg-blue-300" onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
