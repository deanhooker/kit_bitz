import React, { Component, Fragment } from 'react';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import SvgIcon from 'react-icons-kit';
import FontAwesome from "react-fontawesome";
import styles from './SideNav.css';

import { LinkContainer } from 'react-router-bootstrap';
import { withRouter,  } from 'react-router-dom';
import { circuitBoard } from 'react-icons-kit/oct/circuitBoard';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_view_list } from 'react-icons-kit/md/ic_view_list';
import { ic_search } from 'react-icons-kit/md/ic_search';
import { plusCircle } from 'react-icons-kit/fa/plusCircle';

//specify the base color/background of the parent container if needed
class SideNav extends Component{

itemSelected = id =>{

  // if(id == 1){
  //   this.props.history.push('/parts');
  // }else if(id == 2){
  //   this.props.history.push('/inventory');
  // }else if (id == 3) {
  //   this.props.history.push('/kits');
  // }else if(id == 4){
  //   this.props.history.push('/createkits');
  // }
  //console.log("selected " + id);
  //  this.props.history.push('/'+id);

}

render () {

    return (

        <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.itemSelected}>
            <LinkContainer to="/parts">
            <NavItem eventKey={1} id='parts'>
            <SvgIcon style={{ verticalAlign: 'middle' }} size={30} icon={ic_search}/>&nbsp;&nbsp;Parts
            </NavItem>
            </LinkContainer>
            <LinkContainer to="/inventory">
            <NavItem eventKey={2} id='inventory' title="Item">
            <SvgIcon style={{ verticalAlign: 'middle' }} size={30} icon={ic_view_list}/>&nbsp;&nbsp;Inventory
            </NavItem>
            </LinkContainer>
            <LinkContainer to="/kits">
            <NavItem eventKey={3} id='kits' title="Item">
            <SvgIcon style={{ verticalAlign: 'middle' }} size={30} icon={circuitBoard}/>&nbsp;&nbsp;Kits
            </NavItem>
            </LinkContainer>
            <LinkContainer to="/createkit">
            <NavItem eventKey={4} id='createkit' title="Item">
            <SvgIcon style={{ verticalAlign: 'middle' }} size={30} icon={plusCircle}/>&nbsp;&nbsp;Create Kits
            </NavItem>
            </LinkContainer>
        </Nav>


)
}
}

export default withRouter(SideNav);
