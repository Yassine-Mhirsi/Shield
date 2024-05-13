import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react"
import { Img } from "../Img";

function ContractTable() {

  const calculateDaysBetween = (endDate: string): number => {
    const today = new Date();
    const end = new Date(endDate);

    if (isNaN(today.getTime()) || isNaN(end.getTime())) {
      console.error("Invalid date provided");
      return 0;
    }

    const difference = end.getTime() - today.getTime();
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };

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

  const [contracts, setContracts] = useState([]);
  useEffect(() => {
    if (userId) {
      const fetchContractByUserId = async () => {
        try {
          const response = await fetch(`http://localhost:7800/contract/fetchContractsByInsuranceId/${InsuranceId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch contract data');
          }
          const contractData = await response.json();
          setContracts(contractData);
        } catch (error) {
          console.error('Error fetching Contract:', error);
          setContracts([]);
        }
      };
      fetchContractByUserId();
    } else {
      setContracts([]);
    }
  }, [InsuranceId]);
  // console.log(contracts);

  // ---------------------------------------------------------------------------------------


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Contracts List</h1>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-700 font-bold">
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Shop</th>
              <th className="px-4 py-3">Insurance</th>
              <th className="px-4 py-3">Info</th>
            </tr>
          </thead>
          <tbody>
            {contracts.map((contract, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <Avatar className="mr-3">
                      <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
                    </Avatar>
                      <div className="text-gray-500 ">{contract.user.email}</div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium flex items-center justify-center">{contract.product.name}</div>
                  <div className="text-gray-500 flex items-center justify-center">Serial Number: {contract.product.SN}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium flex items-center justify-center">
                    <Img className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full" src={contract.shop.picture} alt="User" />
                  </div>
                  <div className="font-medium flex items-center justify-center">{contract.shop.name}</div>
                  <div className="text-gray-500 flex items-center justify-center">{contract.shop.email}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium flex items-center justify-center">{contract.insurance.companyName} {contract.type}</div>
                  <div className="text-gray-500 flex items-center justify-center">Ends In {calculateDaysBetween(contract.date_f)} Days</div>
                </td>
                <td className="px-4 py-3">
                  <div className="font-medium flex items-center justify-center">{contract.price}TND</div>
                  <div className="text-gray-500 flex items-center justify-center">{contract.protVol ? "Theft Included" : "Theft Not Included"}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export { ContractTable };