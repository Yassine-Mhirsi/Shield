import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import { CardContent, Card } from "@/components/ui/card"


export default function OurPartner() {

  const [partners, setPartners] = useState([]);
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch('http://localhost:7800/partner/fetchAllPartner');
        const allPartners = await response.json();
        setPartners(allPartners);
      } catch (error) {
        console.log('Error fetching partners:', error);
      }
    };

    fetchPartners();
  }, []);


  return (
    <>
      <Helmet>
        <title>Partners | Shield</title>
      </Helmet>
      <div className="w-full ">
        <div className="flex md:flex-col">
          <div className="flex flex-1 flex-col justify-center gap-[25px] md:self-stretch md:p-5 md:pb-5">
            <Header/>
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4F46E5]">Our Partners</h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    We work with a network of trusted partners to provide the best experience for our customers.
                  </p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {partners.filter(partner => partner.status === 'accepted').length > 0 ? (
                    partners.filter(partner => partner.status === 'accepted').map(partner => (
                      <Card key={partner._id} className="bg-[#F3F4F6] dark:bg-[#1F2937]">
                        <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                          <img
                            alt="Partner Logo"
                            className="aspect-square rounded-lg object-contain object-center"
                            height="80"
                            src={partner.picture}
                            width="80"
                          />
                          <h3 className="text-lg font-semibold text-[#4F46E5]">{partner.companyName}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{partner.newRole || 'Trusted partner for all your needs.'}</p>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <p>No accepted partners found.</p>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
