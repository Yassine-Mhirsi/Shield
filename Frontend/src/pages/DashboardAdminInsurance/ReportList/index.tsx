import React from "react";
import { Helmet } from "react-helmet";
import { Text } from ".../../components/cmp";
import Header from ".../../components/cmp/Header";
import { Link } from "react-router-dom";
import SidebarInsurance from "components/cmp/SidebarInsurance";

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react"

import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import ReactQuill from "react-quill";
import Swal from "sweetalert2";


export default function TableListPage() {


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

  // ---------------------------------------------------------------------------------------

  const [InsuranceId, setInsuranceId] = useState(null);

  useEffect(() => {
    const fetchInsuranceId = async () => {
      try {
        const response = await fetch('http://localhost:7800/insurance/fetchAll');
        const allInsurances = await response.json();
        const currentInsurance = allInsurances.find(u => u.user.id === userId);
        if (currentInsurance) {
          setInsuranceId(currentInsurance._id);
        } else {
          setInsuranceId('Insurance ID not found');
        }
      } catch (error) {
        console.error('Error fetching Insurance ID:', error);
        setInsuranceId('Error fetching Insurance ID');
      }
    };
    fetchInsuranceId();
  }, [userId]);
  // console.log(InsuranceId);

  // ---------------------------------------------------------------------------------------

  const [reports, setReports] = useState([]);

  useEffect(() => {
    if (InsuranceId) {
      const fetchReportByInsuranceId = async () => {
        try {
          const response = await fetch(`http://localhost:7800/report/fetchReportsByInsuranceId/${InsuranceId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch Report data');
          }
          const ReportData = await response.json();
          setReports(ReportData);
        } catch (error) {
          console.error('Error fetching Report:', error);
          setReports([]);
        }
      };
      fetchReportByInsuranceId();
    } else {
      setReports([]);
    }
  }, [InsuranceId]);
  // console.log(Reports);


  // --------------------------------------------------------------------------------------------------------------------------

  const handleAccept = async (id, type) => {
    // Determine the status based on the type of the report
    const status = type === "theft" ? "refunded" : "repairshop";

    try {
      await fetch(`http://localhost:7800/report/updateReport/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: status,
        })
      });
      Swal.fire("Report Accepted!", `The report has been set to ${status}.`, "success");
      // Filter out the processed report from the state
      setReports(reports.filter(report => report._id !== id));

    } catch (error) {
      console.error('Error updating report:', error);
      Swal.fire("Error!", "Failed to update the report status.", "error");
    }
  };

  const handleDecline = async (id) => {
    const result = await Swal.fire({
      input: "textarea",
      inputLabel: "Please enter the reason for declining:",
      inputPlaceholder: "Type your reason here...",
      inputAttributes: {
        "aria-label": "Type your reason here",
        'rows': "5"
      },
      showCancelButton: true
    });

    // Check if text was entered and OK was pressed
    if (result.isConfirmed && result.value) {
      try {
        await fetch(`http://localhost:7800/report/updateReport/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            status: "refused",
            reason: result.value
          })
        });
        Swal.fire("Report Declined!", "Your feedback has been recorded.", "success");
        // Filter out the declined report from the state
        setReports(reports.filter(report => report._id !== id));
      } catch (error) {
        console.error('Error updating report:', error);
        Swal.fire("Error!", "Failed to decline the report.", "error");
      }
    } else if (result.isDismissed) {
      // User clicked cancel or closed the prompt
      Swal.fire("Cancelled", "No changes were made.", "info");
    }
  };







  return (
    <>
      <Helmet>
        <title>Dashboard | Reports</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start md:flex-col">
          <SidebarInsurance />
          <div className="flex flex-1 flex-col items-center gap-[35px] md:self-stretch md:p-5">
            <Header />
            <div className="flex w-[93%] flex-wrap items-start justify-start md:w-full gap-4">
              {reports.filter(report => report.status === "waiting").map((report, index) => (
                <Card key={index} className="w-full max-w-md">
                  <CardHeader className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CardTitle>{report.product && report.product.name}</CardTitle>
                    </div>
                    <div className={`rounded-full px-3 py-1 text-xs font-medium ${report.type === 'damage' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' : 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400'}`}>
                      {report.type}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage alt="User Avatar" src={"/placeholder-user.jpg"} />
                        </Avatar>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{report.user.email}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(report.date).toLocaleDateString()}</p>
                    </div>
                    <div className="space-y-2">
                      <ReactQuill
                        theme="snow"
                        value={report.desc}
                        readOnly={true}
                        modules={{ toolbar: false }}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center gap-2">
                    <Button onClick={() => handleDecline(report._id)} variant="outline">Decline</Button>
                    <Button onClick={() => handleAccept(report._id, report.type)}>Accept</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}