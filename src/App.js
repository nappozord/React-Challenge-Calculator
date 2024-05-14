import React from "react";
import { Layout, notification } from "antd";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import background from "./assets/waves.svg";
import FooterComponent from "./components/FooterComponent";
const { Header, Content, Footer } = Layout;

const backgroundStyle = {
  backgroundImage: `url(${background})`,
  fontSize: "50px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

function App() {
  const [api, contextHolder] = notification.useNotification({
    placement: "topRight",
    stack: { threshold: 1 },
  });

  const openNotification = (message, description, status) => {
    if (status === "warning")
      api.warning({
        message,
        description,
        duration: 6,
      });
    else
      api.success({
        message,
        description,
        duration: 6,
      });
  };

  return (
    <div>
      {contextHolder}
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <HeaderComponent />
        </Header>
        <Content style={backgroundStyle}>
          <MainComponent openNotification={openNotification} />
        </Content>
        <Footer
          style={{
            backgroundColor: "#001529",
          }}
        >
          <FooterComponent />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
