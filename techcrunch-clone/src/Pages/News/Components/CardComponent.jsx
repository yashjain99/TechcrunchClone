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
export const CardComponent = () =>{
    const classes = useStyles()
    return(
        <Card className={classes.root}>
        <CardHeader
          title="UiPath nabs $568M at a $7B valuation to bring robotic process automation to the front office"
        />
        <CardContent className={classes.CardContent}>
        <CardMedia
            className={classes.media}
          image="https://techcrunch.com/wp-content/uploads/2017/11/gettyimages-149260785.jpg?resize=150,100"
        />
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
          Companies are on the hunt for ways to reduce the time and money it costs their employees to perform repetitive tasks, so today a startup that has built a 
          business to capitalize on this is announcing a huge round of funding to double down on the opportunity. UiPath — a robotic process automation startup
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
    )
}