// import to connect to the store
// mapToProps to retrieve the state into props

import React from 'react';
import QRCode from 'qrcode.react';
import {connect} from 'react-redux';

const mapStateToProps = state => (
  {
  npq : state.npq
}) 

const Ticket = ({npq}) => (
  
  <QRCode value={`${npq.nom} ${npq.prenom} ${npq.email}`} />
  
)

export default connect (mapStateToProps)(Ticket);