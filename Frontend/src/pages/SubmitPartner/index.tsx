import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input, SelectBox } from "../../components";
import Header from "../../components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


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

  const [formValues, setFormValues] = useState({
    TRN: '',
    companyName: '',
    phoneNumber: '',
    newRole: null,
    picture: '',
    insurancetypes: [{ type: '', price: '' }]
  });

  const [selectedRole, setSelectedRole] = useState('');

  const handleInputChang = (e) => {
    const { name, value } = e.target;

    // Update formValues for other inputs
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));

    // Update formValues.picture separately
    if (name === "url") {
      setFormValues((prev) => ({
        ...prev,
        picture: value,
      }));
    }
  };


  const handleInputChange = (e, index) => {
    const { name, value } = e.target;

    // Handling updates for insurancetypes array separately
    if (name === 'type' || name === 'price') {
      const updatedinsurancetypes = formValues.insurancetypes.map((contract, contractIndex) =>
        index === contractIndex ? { ...contract, [name]: value } : contract
      );
      setFormValues({ ...formValues, insurancetypes: updatedinsurancetypes });
    } else {
      // Update formValues for other inputs
      setFormValues((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedRole(selectedOption.value);
    setFormValues((prev) => ({
      ...prev,
      newRole: selectedOption
    }));
  };

  const addContract = () => {
    setFormValues(prev => ({
      ...prev,
      insurancetypes: [...prev.insurancetypes, { type: '', price: '' }]
    }));
  };


  const navigate = useNavigate();


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
          picture: formValues.picture,
          insurancetypes: formValues.insurancetypes
        }),
      });
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Nice!!",
          text: "Your request has been successfuly submited",
          confirmButtonText: "Ok",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/');
          }
        });
        // alert("Partner information submitted successfully");
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
        <title>Partner | Shield</title>
      </Helmet>
      <div className="w-full">
        <div className="flex md:flex-col">
          <div className="flex flex-1 flex-col justify-center gap-[25px] md:self-stretch md:p-5 md:pb-5">
            <Header/>
            <div className="flex w-[96%] flex-col items-start gap-[33px] pt-[50px] pb-[170px] md:w-full p-[700px]">
              <Text size="lg" className="text-[#09090b] !font-bold">
                Become One Of Our Partner
              </Text>
              <div className="flex gap-5 self-stretch md:flex-col">
                <div className="flex flex-1 flex-col gap-5 md:self-stretch">
                  <div className="flex flex-col items-center gap-8 rounded bg-white-A700_01 p-8 shadow-sm sm:p-5">
                    <div className="flex flex-col gap-6 self-stretch ">
                      <div className="flex gap-5 md:flex-col">
                        <div className="flex w-full flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="text-[#09090b]">Tax Registration Number</Text>
                          <input
                            name="TRN"
                            placeholder="1234567L"
                            className="self-stretch border-2 border-[#404040] font-semibold !text-blue_gray-800 sm:pr-5"
                            value={formValues.TRN}
                            onChange={handleInputChang}
                          />
                        </div>
                        <div className="flex w-full flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="text-[#09090b]">Company Name</Text>
                          <input
                            name="companyName"
                            placeholder={"Company Name"}
                            className="self-stretch border-2 border-[#404040] font-semibold !text-blue_gray-800 sm:pr-5"
                            value={formValues.companyName}
                            onChange={handleInputChang}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 self-stretch ">
                      <div className="flex gap-5 md:flex-col">
                        <div className="flex w-full flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="text-[#09090b]">Phone Number</Text>
                          <input
                            name="phoneNumber"
                            placeholder={"12345678"}
                            className="self-stretch border-2 border-[#404040] font-semibold !text-blue_gray-800 sm:pr-5"
                            value={formValues.phoneNumber}
                            onChange={handleInputChang}
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
                    <div className="flex w-full flex-col items-start justify-center gap-2.5">
                      <Text as="p" className="text-[#09090b]">Image URL</Text>
                      <input
                        name="url"
                        placeholder={"https://"}
                        className="self-stretch border-2 border-[#404040] font-semibold !text-blue_gray-800 sm:pr-5"
                        value={formValues.picture}
                        onChange={handleInputChang}
                      />
                    </div>
                    {selectedRole === 'insurance' && formValues.insurancetypes.map((contract, index) => (
                      <div key={index} className="flex gap-5 md:flex-col">
                        <div className="flex w-full flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="text-[#09090b]">Contract Type</Text>
                          <input
                            name="type"
                            placeholder="Basic"
                            value={contract.type}
                            onChange={(e) => handleInputChange(e, index)}
                          />
                        </div>
                        <div className="flex w-full flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="text-[#09090b]">Price</Text>
                          <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={contract.price}
                            onChange={(e) => handleInputChange(e, index)}
                          />
                        </div>
                        {index === formValues.insurancetypes.length - 1 && (
                          <div className="flex w-full flex-col items-start justify-center gap-2.5">
                            <Text as="p" className="text-[#09090b]">Add</Text>
                            <div className="flex items-center" onClick={addContract}>
                              <img src="../../../../public/images/add.svg" className="mb-[5px] mr-2.5 h-[30px] w-[30px]" alt="Add more" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
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
