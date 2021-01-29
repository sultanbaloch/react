import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Mediacard(property) {
  return <div className="media">
    <div >
      <div className="profile">
        <img src={property.imageUrl}></img>
      </div>
      <div className="name">
        <p>{property.name}</p>
        <p>{property.time}</p>
      </div>
      <div className="clear"></div>
    </div>
    <div className="para">
      <p>{property.body}</p>
    </div>
    <div className="img">
      <img src={property.imageUrl} />
    </div>
  </div>
}
ReactDOM.render(
<div>
<Mediacard time={new Date().toLocaleTimeString()} 
name="House" body="This photo was taken in saadabad palace in Tehran, Iran. we were actually going to take some photos of the buildings, but then we encountered these flowers which were full of butterflies and they were just amazing."
 imageUrl="https://images.all-free-download.com/images/graphicthumb/beautiful_scenery_04_hd_pictures_166258.jpg" />
 <Mediacard time={new Date().toLocaleTimeString()} 
name="House" body="This photo was taken in saadabad palace in Tehran, Iran. we were actually going to take some photos of the buildings, but then we encountered these flowers which were full of butterflies and they were just amazing."
 imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPbXT3Yw_5OSYDxysni3pYzu0mrkp3A4waw&usqp=CAU" />
 <Mediacard time={new Date().toLocaleTimeString()} 
name="House" body="This photo was taken in saadabad palace in Tehran, Iran. we were actually going to take some photos of the buildings, but then we encountered these flowers which were full of butterflies and they were just amazing."
 imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-6SKH8f33_wfODM6xzgjZ_5ZP5-4a-PWaA&usqp=CAU" />
 </div>,
  document.getElementById('root'));