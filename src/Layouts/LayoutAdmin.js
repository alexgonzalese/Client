import React, {useState} from "react";
//import { Route } from "react-router-dom";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import MenuTop from "../components/Admin/MenuTop/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import AdminSignIn from "../pages/Admin/SignIn/SingnIn";

import "./LayoutAdmin.scss";


export default function LayoutAdmin(props) {
  const { routes } = props;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;

  const user = null;

  if(!user){
    return(
      <>
        <Route path="/admin/login" component={AdminSignIn}/>
        <Redirect to="/admin/login"/>
      </>
    )
  }




  return (
    <Layout>
      <MenuSider menuCollapsed = {menuCollapsed}/>
      <Layout className="layout-admin" style={{marginLeft:menuCollapsed? "80px": "200px"}}>
        <Header className="layout-admin__header">
            <MenuTop menuCollapsed = {menuCollapsed} setMenuCollapsed={setMenuCollapsed}/>
        </Header>

        <Content className="layout-admin__content">
          <LoadRouters routes={routes} />
        </Content>

        <Footer className="layout-admin__footer">Alexander Espinoza 2021..</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRouters({ routes }) {
  return (
    <Switch>
      {routes.map((routes, index) => (
        <Route
          Key={index}
          path={routes.path}
          exact={routes.exact}
          component={routes.component}
        />
      ))}
    </Switch>
  );
}