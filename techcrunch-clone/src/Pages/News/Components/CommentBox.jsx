import React, { useEffect, useState } from "react";
import { DialogBox } from "./DialogBox";
import { v4 as uuid } from "uuid";
import PeopleIcon from "@material-ui/icons/People";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import { addComment, deleteComment, editComment } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { EditCommentBox } from "./EditCommentBox";
import { getUserSignup } from "../../Login/Redux/action";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  icon: {
    paddingTop: 14,
  },
  card: {
    margin: "10px 0",
  },
}));
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  & span {
    display: flex;
  }
`;

const Body = styled.div`
  & div {
    width: 95%;
    padding: 5px;
    border: 1px solid grey;
    border-radius: 5px;
    cursor: auto;
    margin: auto;
  }
  & input {
    width: 100%;
    height: 28px;
  }
  & button {
    height: 30px;
    width: 100px;
    background: #008c53;
    color: white;
    border: 0;
    border-radius: 10px;
    margin: 10px 0 10px 80%;
    outline: none;
  }
`;
export const CommentBox = ({ data }) => {
  // console.log(data);
  const [commentText, setCommentText] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openEditComment, setOpenEditComment] = useState(false);
  //will apdate username after merge with login comp.
  useEffect(() => {
    dispatch(getUserSignup());
  }, []);
  const userData = useSelector((state) => state.login.userData);
  const userEmail = useSelector((state) => state.login.email);
  const isAuth = useSelector((state) => state.login.isAuth);
  let user = userData.find((item) => item.email === userEmail);
  console.log(userData);

  const username = isAuth && `${user.firstname} ${user.lastname}`;
  const handleOpenAnchorEl = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl);
  };
  const handleCloseAnchorEl = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddComment = (e) => {
    e.preventDefault();
    if (commentText === "") {
      return;
    }

    let payload = {
      id: uuid(),
      comment: commentText,
      username: username,
    };
    let updatedComments = [...data.comments, payload];
    dispatch(addComment(data.id, updatedComments));
    setCommentText("");
  };

  const openEditBox = (id) => {
    let comment = data.comments.find(
      (comment) => String(comment.id) === String(id)
    );
    setCommentText(comment.comment);
    setOpenEditComment(true);
  };

  const handleChange = (e) => {
    setCommentText(e.target.value);
    console.log(commentText);
  };
  const closeEditBox = () => {
    setOpenEditComment(false);
  };

  const handleEditComment = (commentId) => {
    console.log("edit commit func called");
    console.log(data.comments);
    console.log("commentId", commentId);
    let afterEditComment = data.comments.map((item) =>
      String(item.id) === String(commentId)
        ? { ...item, comment: commentText }
        : item
    );
    console.log(afterEditComment);
    dispatch(editComment(data.id, afterEditComment));
    setOpenEditComment(false);
    handleCloseAnchorEl();
  };
  const handleDeleteComment = (commentId) => {
    console.log("delete commit func called");
    // console.log(data.comments);
    // console.log("commentId",commentId);
    let afterDeleteComment = data.comments.filter(
      (item) => String(item.id) !== String(commentId)
    );
    // console.log(afterDeleteComment);
    dispatch(deleteComment(data.id, afterDeleteComment));
  };
  return (
    <>
      <Header>
        <h2>Conversation</h2>
        <span>
          <PeopleIcon className={classes.icon} />
          <p>3 viewing</p>
        </span>
      </Header>
      <hr />
      <Body>
        {!isAuth ? (
          <div onClick={() => setOpen(true)}>Add a comment... </div>
        ) : (
          <>
            <p>{username}</p>
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
            />

            <button onClick={handleAddComment}>send</button>
          </>
        )}
      </Body>
      <hr />
      <div>
        {data.comments &&
          data.comments.map((item) => (
            <Card key={item.id} className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    <PersonIcon />
                  </Avatar>
                }
                action={
                  <IconButton
                    aria-label="settings"
                    onClick={handleOpenAnchorEl}
                  >
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.username}
                subheader={item.comment}
              />

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseAnchorEl}
              >
                <MenuItem onClick={() => openEditBox(item.id)}>Edit</MenuItem>
                <MenuItem onClick={() => handleDeleteComment(item.id)}>
                  Delete
                </MenuItem>
              </Menu>
              <EditCommentBox
                id={item.id}
                commentText={commentText}
                open={openEditComment}
                handleChange={handleChange}
                handleClose={closeEditBox}
                handleEditComment={handleEditComment}
              />
            </Card>
          ))}
      </div>
      <DialogBox handleClose={handleClose} open={open} />
    </>
  );
};
