import React from "react";
// Import Layout and notification components from Ant Design
import { Layout, notification } from "antd";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import background from "./assets/waves.svg";
import FooterComponent from "./components/FooterComponent";
import "./css/App.css";

// Destructure Layout to get Header, Content, and Footer components
const { Header, Content, Footer } = Layout;

export default function App() {
  // Initialize notification API and context holder
  const [api, contextHolder] = notification.useNotification({
    placement: "topRight", // Set notification placement
    stack: { threshold: 1 }, // Set notification stack threshold
  });

  // Function to open a notification
  const openNotification = (message, description, status) => {
    if (status === "warning") {
      // Show a warning notification
      api.warning({
        message,
        description,
        duration: 6, // Duration the notification is visible
      });
    } else {
      // Show a success notification
      api.success({
        message,
        description,
        duration: 6, // Duration the notification is visible
      });
    }
  };

  return (
    <div>
      {contextHolder} {/* Render the context holder for notifications */}
      <Layout className="layout">
        <Header>
          <HeaderComponent /> {/* Render custom Header component */}
        </Header>
        <Content
          className="content"
          style={{ backgroundImage: `url(${background})` }} // Set the svg background image
        >
          {/*
            Render the Main component;
            pass openNotification function as a prop to handle notification 
          */}
          <MainComponent openNotification={openNotification} />
        </Content>
        <Footer className="footer">
          <FooterComponent /> {/* Render custom Footer component */}
        </Footer>
      </Layout>
    </div>
  );
}
