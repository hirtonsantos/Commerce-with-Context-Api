import * as React from 'react';
import { Typography, IconButton, Avatar, Card ,CardActions , CardContent ,CardMedia, CardHeader} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Favorite, Share, MoreVert } from '@material-ui/icons';
import { StyledBadge } from '../Header/style';
import { AddShoppingCartTwoTone } from '@material-ui/icons';
import { useCart } from "../../Providers/Cart";
import "./style.css"


export default function ProductCard({id, description, name, price, image, item}) {

  const {addToCart} = useCart()

  return (
    <Card sx={{ maxWidth: 305, marginBottom: "20px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor: "black"}} aria-label="recipe">
            J
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={name} // NOME DA COMIDA
        subheader={price.toFixed(2)}    // ANO DA COMIDA
      />
      <CardMedia
        sx={{objectFit:"contain"}}
        component="img"
        height="194"
        image={image} // IMAGEM DA COMIDA 
        alt={name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>

        <IconButton aria-label="cart" onClick={() => addToCart(item)}>
              <StyledBadge color="secondary">
                <AddShoppingCartTwoTone />
              </StyledBadge>
            </IconButton>
      </CardActions>
    </Card>
  );
}