import React, { useState, useEffect, Component } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Delay } from './Delay';


import {
  Container,
  Content,
  CollapseBtn,
  Sidebar,
  SidebarVariants,
  Menu,
  MenuItem,
  MenuLabel,
  MenuLabelVariants
} from "./styles";


const defaultItems = [
  { label: 'Our story', url: '/' },
  { label: 'Cocktails', url: '/db' },
  { label: 'Find your Empress', url: '/db' },
  { label: 'Buy Online', url: '/db' },
  { label: 'Social', url: '/db' },
  { label: 'FAQ', url: '/msg' },
  { label: 'Victoria Distillers', url: '/db' },
  { label: 'Media', url: '/db' },
  { label: 'Contact us', url: '/db' },
  { label: 'Home', url: '/db' },
];

const motionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    type: "tween",
    duration: 1
  }
};

class App extends Component {
  state = {
    sidebarCollapsed: true,
    items: defaultItems
  };

  toggleSidebar = () => {
    this.setState({ sidebarCollapsed: !this.state.sidebarCollapsed });
  };
  render() {
    const { sidebarCollapsed } = this.state;
    return (
      <div className="App">
        <Container>
          <Sidebar
            initial={sidebarCollapsed ? "collapsed" : "expanded"}
            animate={sidebarCollapsed ? "collapsed" : "expanded"}
            variants={SidebarVariants}
          >
            <span>Sidebar</span>
            {sidebarCollapsed ? null :
              <Menu>
                {this.state.items.map((item, index) => (
                  <Item key={index} index={index}>
                    <MenuItem>
                      {/* <MenuLabel variants={MenuLabelVariants}>{item.label}</MenuLabel> */}
                      {item.label.toUpperCase()}
                    </MenuItem>
                  </Item>
                ))}
              </Menu>}
            <CollapseBtn onClick={this.toggleSidebar}>
              {sidebarCollapsed ? "show" : "hide"}
            </CollapseBtn>
          </Sidebar>
          <Content>Content</Content>
        </Container>
      </div>
    );
  }
}

const Item = ({ index, children }) => (
  <Delay delay={index * 150}>
    <motion.div key={index} {...motionProps}>
      {children}
    </motion.div>
  </Delay>
);

export default App;
