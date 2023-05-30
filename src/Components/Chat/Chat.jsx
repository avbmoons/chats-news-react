import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import "./Chat.css";
import { useDispatch } from "react-redux";
import { deleteChat } from "../../Store/Chats/actions";

export function Chat({ id, name }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const handleDeleteChat = () => {
    dispatch(deleteChat(id));
  };
  return (
    <ListItem
      key={id}
      disablePadding
      style={{ backgroundColor: theme.palette.secondary.main }}
      button
      selected={selectedIndex === 2}
      onClick={(event) => handleListItemClick(event, 2)}
    >
      <ListItemButton href="#simple-list" className="Chat-list-btn">
        <ListItemText primary={name} className="Chat-list-item" />
      </ListItemButton>
      <button className="Del-btn" onClick={handleDeleteChat}>
        &#10006;
      </button>
      <Divider light />
    </ListItem>
  );
}
