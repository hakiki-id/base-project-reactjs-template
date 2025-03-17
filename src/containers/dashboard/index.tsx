import React from 'react';
import FooterComponent from '@/components/footer';
import SideMenuComponent from "@/components/sidebar"
import HeaderComponent from '@/components/header';
import { Breadcrumb, Row, Col, Layout, theme , Card} from 'antd';
import ChartComponent from '@/components/chart';

const { Header, Content } = Layout;


const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenuComponent/>
      <Layout>
        <HeaderComponent/>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>

        
          <div> 
            <Row>
               <Col span={6}>
               <Card><ChartComponent/></Card></Col>  
               <Col span={6}>
               <Card><ChartComponent/></Card></Col>  
               <Col span={6}>
               <Card><ChartComponent/></Card></Col>  
               <Col span={6}>
               <Card><ChartComponent/></Card></Col>  
            </Row>  
          </div>
          
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default App;