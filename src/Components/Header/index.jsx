import { AppBar, Box, Toolbar, Typography, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import * as React from "react";
import { StyledBadge } from "./style";
import Cart from "../Cart";
import { useState } from "react";

const Header = () => {

  const [showCart, setShowCart] = useState(false)

  const isShowCart = () => {
    setShowCart(!showCart)
  }

    return (
        <Box>
          <AppBar position="static" sx={{fontWeight:"bold",  color: "var(--black)", backgroundColor: "var(--white)"}}>
            <Toolbar sx={{justifyContent:"space-around"}}>
              <Typography variant="h6" component="div" sx={{fontWeight:"bold", flexGrow: 0 }}>
                JuveCommerce
              </Typography>
              <IconButton aria-label="cart" onClick={isShowCart} >
                  <StyledBadge /*badgeContent={tamanhoLeng}*/ color="secondary">
                    <ShoppingCart />
                    <Cart showcart={showCart}/>
                  </StyledBadge>
                </IconButton>
            </Toolbar>
            
          </AppBar>
        </Box>
      );
    };
    
    export default Header;