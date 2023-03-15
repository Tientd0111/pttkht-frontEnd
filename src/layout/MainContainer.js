
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;  

const MainContainer = ({children}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const clickMenu = (e)=>{
    console.log("dmm",e)
  }
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} i/>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      > 
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
          }}
        >
          <Sider
         
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              onClick={clickMenu}
              style={{
                height: '100%',
              }}
              items={
                [
                  {
                    label:'Giáo viên',
                    value:'/marks'
                  },
                  {
                    label:'Học sinh ',
                    value:'/student'
                  }
                ]
               
              }
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
           {children}
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
      
      </Footer>
    </Layout>
  );
};
export default MainContainer;