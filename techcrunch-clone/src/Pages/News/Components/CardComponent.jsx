import React from 'react';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';
import {Card, CardHeader, CardMedia,CardContent,Typography, CardActions,IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    root:{
        margin: "20px 0"
    },
    media:{
        height:100,
        width: 100
    },
    CardContent:{
        display: "flex",
        width:"100%"
    },
    description:{
        width: "80%"
    },
    footer:{
        display:"flex",
        width: "80%"
       
    }
}))
export const CardComponent = ({cardData}) =>{
  console.log(cardData);
    const classes = useStyles()
    return(
      <>
      {
        cardData.title &&
        <Card className={classes.root}>
        <CardHeader
          title={cardData.title}
        />
        <CardContent className={classes.CardContent}>
        <CardMedia
            className={classes.media}
          image={cardData.urlToImage}
        />
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            {cardData.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <div className={classes.footer}>
                <img src="https://techcrunch.com/wp-content/uploads/2015/02/cropped-cropped-favicon-gradient.png?w=32" alt="TechCrunch"/>
                <p>TechCrunch</p>
            </div>
        
          <IconButton aria-label="comment">
            <ChatBubbleIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          
        </CardActions>
       
      </Card>
      }
      </>
    )
}