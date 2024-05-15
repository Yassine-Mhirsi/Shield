import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Button, CheckBox, Input, Text, Heading } from "../../components/ccmp";
import { Radio, RadioGroup } from "../../components/cccmp";
import Header from "../../components/Header";
import Sidebar3 from "../../components/ccmp/Sidebar3";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAuth0 } from "@auth0/auth0-react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export default function Report() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const { user, logout } = useAuth0();
  const [userr, setUserr] = useState(null);


  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await fetch('http://localhost:7800/api/my/user');
        const allUsers = await response.json();
        const currentUser = allUsers.find(u => u.email === user.email);
        if (currentUser) {
          setUserr(currentUser);
        }
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    };

    if (user) {
      fetchUserId();
    }
  }, [user]);

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']
  ];

  const modules = {
    toolbar: toolbarOptions
  }

  // interface Contract {
  //   _id: string;
  //   user: any;
  //   product: any;
  //   shop: any;
  //   insurance: any;
  //   date: string;
  //   date_f: string;
  //   protVol: boolean;
  //   price: number;
  //   type: string;
  // }

  const [contract, setContract] = useState(null);
  useEffect(() => {
    const fetchContract = async (PID: string) => {
      try {
        const response = await fetch(`http://localhost:7800/contract/fetchContractsById/${PID}`);
        const Contract = await response.json();
        console.log(Contract);
        setContract(Contract);
      } catch (error) {
        console.error('Error fetching contract:', error);
      }
    };

    fetchContract(id);
  }, []);

  const [radioValue, setRadioValue] = useState(""); // State to track the selected radio button value

  // Function to handle radio button change
  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };



  const handleConfirm = async () => {
    const reportData = {
      user: {
        id: userr._id,
        email: userr.email,
      },
      contract: {
        id: id,
      },
      product: {
        id: contract[0].product.id,
        name: contract[0].product.name,
        SN: contract[0].product.SN,
        picture: contract[0].product.picture,
      },
      date: new Date(),
      desc: value,
      type: radioValue
    };

    try {
      const response = await fetch('http://localhost:7800/report/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reportData)
      });

      if (response.ok) {
        const result = await response.json();
        // console.log('Report Creation Success:', result);

        Swal.fire({
          icon: "success",
          title: "Nice!!",
          text: "Report has been add successfully",
          confirmButtonText: "Go see Your Contract",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/manageProfile');
          }
        });

      } else {
        const errorData = await response.json();
        alert(`Failed to create report: ${errorData.message}`);
        console.error('Failed to create report:', errorData);
      }
    } catch (error) {
      alert('An error occurred while creating the report.');
      console.error('Error:', error);
    }
  };



  return (
    <>
      <Helmet>
        <title>Report | Shield</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100_06">
        <Header className="flex items-center justify-center self-stretch bg-white-A700 py-6 sm:py-5" />
        <div className="flex md:flex-col">
          <Sidebar3 />
          <div className="flex flex-1 flex-col gap-8 pb-[90px] md:self-stretch md:p-5 md:pb-5">
            <div className="px-6 sm:px-5">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col items-center gap-12 rounded bg-white-A700_01 p-12 shadow-sm md:p-5">
                  <div className="flex flex-col items-center gap-3">
                    <Heading as="h1" className="!text-blue_gray-900_01">
                      Confirm Information
                    </Heading>
                    <Text as="p" className="!font-normal">
                      Make sure that all your information are precise
                    </Text>
                  </div>
                  <div className="flex w-[66%] flex-col items-center gap-12 md:w-full">
                    <div className="flex flex-col gap-9 self-stretch">
                      <div className="flex flex-col gap-6">
                        <div className="flex flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="!text-blue_gray-800">
                            <span className="text-blue_gray-800">Full name&nbsp;</span>
                            <span className="text-red-600">*</span>
                          </Text>
                          <Input
                            shape="round"
                            name="fullName"
                            placeholder={user?.nickname}
                            className="self-stretch border-indigo-50_03 font-semibold !text-blue_gray-800 sm:pr-5"
                            disabled
                          />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2.5">
                          <Text as="p" className="!text-blue_gray-800">
                            <span className="text-blue_gray-800">Serial number&nbsp;</span>
                            <span className="text-red-600">*</span>
                          </Text>
                          <Input
                            shape="round"
                            type="number"
                            name="frame18249"
                            placeholder={user?.email}
                            className="self-stretch border-indigo-50_03 font-semibold !text-blue_gray-800 sm:pr-5"
                            disabled
                          />
                        </div>
                        <div className="flex flex-col gap-6">
                          {/* <div className="flex gap-5 md:flex-col">
                            <div className="flex w-full flex-col items-start justify-center gap-2.5">
                              <Text as="p" className="!text-blue_gray-800">
                                <span className="text-blue_gray-800">Contract&nbsp;</span>
                                <span className="text-red-600">*</span>
                              </Text>
                              <Input
                                shape="round"
                                name="gender"
                                placeholder={`Female`}
                                className="self-stretch border-indigo-50_03 font-semibold !text-blue_gray-800 sm:pr-5"
                              />
                            </div>
                            <div className="flex w-full flex-col items-start justify-center gap-[9px]">
                              <Text as="p" className="!text-blue_gray-800">
                                <span className="text-blue_gray-800">Nationality&nbsp;</span>
                                <span className="text-red-600">*</span>
                              </Text>
                              <Input
                                shape="round"
                                name="deitsch"
                                placeholder={`Deitsch`}
                                className="self-stretch border-indigo-50_03 font-semibold !text-blue_gray-800 sm:pr-5"
                              />
                            </div>
                          </div> */}
                          <div className="flex gap-5 md:flex-col">
                            <div className="flex w-full flex-col items-start justify-center gap-2.5">
                              <RadioGroup name="addresstyperadiogroup" className="flex self-stretch">
                                <Radio
                                  value="theft"
                                  label="Theft"
                                  className="w-full gap-2 rounded-[24px] border border-gray-200_01 bg-white-A700 py-[15px] text-sm sm:pr-5"
                                  // checked={radioValue === "theft"}
                                  onChangeCapture={handleRadioChange}
                                />
                                <Radio
                                  value="damage"
                                  label="Damage"
                                  className="ml-6 w-full gap-2 rounded-[24px] border border-gray-200_01 bg-white-A700 py-[15px] pr-[35px] text-sm text-gray-600_01 sm:pr-5"
                                  // checked={radioValue === "damage"}
                                  onChangeCapture={handleRadioChange}
                                />
                              </RadioGroup>
                            </div>
                          </div>
                          <div className="flex gap-5 md:flex-col " style={{ marginBottom: '20px' }}>
                            <div className="flex w-full flex-col justify-center gap-2.5">
                              <ReactQuill modules={modules} theme="snow" value={value} onChange={setValue} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <CheckBox
                        name="iconcheck_empty"
                        label="By clicking button ‘Confirm’, I take all responsibility of the information above"
                        id="iconcheckempty"
                        className="gap-2 pb-px pr-[35px] pt-[5px] text-sm text-blue_gray-400 sm:pr-5"
                      />
                    </div>
                    <Button className="min-w-[270px] rounded-[24px] font-bold sm:px-5" onClick={handleConfirm}>Confirm</Button>
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
