import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


export default function PlaceItems({ item }) {
  const { name, image, location, visitCount } = item
  return (
    <Card sx={{ maxWidth: 312 }} className='p-0'>
      <CardMedia
        component="img"
        style={{ height: "180px" }}
        image={image}
        alt={name}
      />
      <CardContent>
        <h5 class="font-medium leading-tight text-xl mt-0 mb-2 text-black-600 flex justify-between">{name}<InfoOutlinedIcon /></h5>
        <div className='flex mb-0 pb-0 text-base text-slate-500 mb-2 items-center'> <PinDropOutlinedIcon className='mr-1' />{location}</div>
        <div className='flex mb-0 pb-0 text-xs text-slate-500 items-center'><VisibilityOutlinedIcon className='mr-1' />{`${visitCount} people visited`}</div>
      </CardContent>
    </Card>
  );
}
