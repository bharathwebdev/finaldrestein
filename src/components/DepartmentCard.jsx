import React from "react";
import '../App.css'
import lap from '../assets/laptop.png';


function DepartMentCard({img,title,des}) {
  const a = title.split(' ');
  console.log(a)
  return (
    <div class="container">
      <div class="card">
        <div class="imgBx">
          <img style={{borderRadius:'20px'}} src={img} />
        </div>
        <div class="contentBx">
          <h2>
          {a[0]}<br/>
           {a[1]}
          </h2>
          <div class="lorem">
            <h3>
              {des}
            </h3>
          </div>
          <a href="#">Events</a>
        </div>
      </div>
    </div>
  );
}

export default DepartMentCard;
