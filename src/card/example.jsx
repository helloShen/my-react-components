/* eslint-disable no-unused-vars */
import React from 'react';
import Card, {
  CardMain,
  CardAvatar,
  CardTitle,
  CardSubtitle,
  CardDivider,
  CardContent,
} from './card';
import Avatar from '../assets/img/avatar.jpeg';

const muiPrimary = '#1976d2';
const materialPrimary = '#6200cc';

export default function CardExample() {
  return (
    <Card
      primary={materialPrimary}
      surface="#ffffff"
    >
      <CardMain>
        <CardAvatar>
          <img src={Avatar} alt="avatar" />
        </CardAvatar>
        <div>
          <CardTitle>SHEN</CardTitle>
          <CardSubtitle>hireme.shen@gmail.com</CardSubtitle>
        </div>
      </CardMain>
      <CardDivider />
      <CardContent>
        Edit the email above through the TextField component.
      </CardContent>
    </Card>
  );
}
