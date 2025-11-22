import CustomerOrderDetailsPageWrapper from "@/components/wrappers/CustomerOrderDetailsPageWrapper";
import React from "react";

const page = async ({ params }) => {
  const { code } = await params;

  return <CustomerOrderDetailsPageWrapper code={code} />;
};

export default page;
