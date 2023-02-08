import React from "react";
import AppbarWithoutSub from "./AppbarWithoutSub";
import FeaturesPage from "./FeaturesPage";
import SubscriptionPlans from "./SubscriptionPlans";
import Footer from "../Components/Footer";

const Home = () => {
  const featuresData = [
    {
      image: "./images/ManageFees.png",
      title: "Fees Management",
      btnName: "Take Subscription",
    },
    {
      image: "./images/Notice2.png",
      title: "Add Notice",
      btnName: "Take Subscription",
    },
    {
      image: "./images/QnA.png",
      title: "QnA Chat Area",
      btnName: "Take Subscription",
    },
    {
      image: "./images/materialAdd.png",
      title: "Upload Materials",
      btnName: "Take Subscription",
    },
  ];

  const SubscriptionDetails = [
    {
      id: 0,
      name: "Silver",
      duration: "1",
      price: "4999",
      btnName: "Purchase Plan",
      bgColor: "lightblue",
    },
    {
      id: 1,
      name: "Gold",
      duration: "2",
      price: "9999",
      btnName: "Purchase Plan",
      bgColor: "#d8d8d8",
    },
    {
      id: 2,
      name: "Platinum",
      duration: "3",
      price: "11999",
      btnName: "Purchase Plan",
      bgColor:"#146d78",
    },
  ];

  const SubscriptionFeatures = [
    {
      fName: "Manage Fees ",
    },
    {
      fName: "Add Notice",
    },
    { fName: "QnA Chat Area" },
  ];

  return (
    <>
      <AppbarWithoutSub />

      {/* FeaturesPage mapping */}
      <FeaturesPage featuresData={featuresData} />
      {/*FeaturesPage mapping Complete*/}

      {/*SubscriptionPlans mapping*/}
      <SubscriptionPlans
        subscriptionDetails={SubscriptionDetails}
        subscriptionFeatures={SubscriptionFeatures}
      />
      {/*SubscriptionPlans mapping Complete*/}

      <Footer /> 
    </>
  );
};

export default Home;
