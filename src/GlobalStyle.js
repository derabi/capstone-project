import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  font-size: 112.5%;
  margin: 0 auto;
  
}
a {
  text-decoration: none;
}
a:visited {
  color: black;
}
.day-wrapper{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.time-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-left:15px;
  font-size: 14px;
}
.time-wrapper-textline {
  margin-left:15px;
  font-size:14px;
}  
.daysinput {
display:none;
}
.dayslabel {
  text-align: center;
  vertical-align: middle;
  line-height: 30px; 
  margin:1px;
  min-width: 13vw;
  max-width:13vw;
  height: 30px;
  border: 1px solid grey;
  display:inline-block;
  font-size: 14px;
}
.dayslabel:hover{
  background:#eee;
}
.weekday {
  text-align: center;
  vertical-align: middle;
  line-height: 30px; 
  margin:1px;
  min-width: 13vw;
  max-width:13vw;
  height: 30px;
  border: 1px solid white;
  display:inline-block;
  font-size: 14px;
}
input[type="radio"]:checked+label{
  background:black;
  color: #fff;
  border: none;
}
.timesinput{
  display:none
}
.timeslabel {
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  padding:10px;
  border: 1px solid grey;
  display:inline-block;
}
.timeslabel:hover{
  background:grey;
}
.arrow {
  border-radius: 30px;
  border: 1px solid grey;
  width:10vw;
  text-align:center;
  display:inline-block;
}
.month-wrapper{
  height:1em;
  width:100%;
  margin-top:1vh;
  margin-bottom:1vh;
  padding-left:2vw;
  padding-right:2vw;
}
.monthString {
  display:inline-block;
width:74vw;
text-align:center;
  
}
.dayslabel-disabled {
  text-align: center;
  vertical-align: middle;
  line-height: 30px; 
  margin:1px;
  min-width: 13vw;
  max-width:13vw;
  height: 30px;
  border: 1px solid #e3e3e3;
  display:inline-block;
  color:#e3e3e3;
}
.bookbutton {
  background: black;
  color:white;
  border:none;
  width:94%;
  height:40px;
  margin: 3% 0% 0% 3%;
  display:inline-block;
}
.booking-title{
padding-top:15px;
padding-bottom:5px;
padding-left:5px;
}
.product-preview-left-block {
  display:inline-block;
  width:25vw;
  height:auto;
  padding-left:15px;
}
.product-preview-middle-block {
  font-size:10pt;
  display:inline-block;
  width:50vw;
  height:auto;
  padding-left:15px;
  vertical-align: top;
}
.product-preview-right-block{
  font-size:10pt;
  display:inline-block;
  height:auto;
  width:25vw;
  vertical-align: top;
}
.terminObjekt {
  background: #f2f2f2;
  font-size:10pt;
  border-bottom:2px solid white;
}
.terminObjekt-image {
  width:30px;
}
.termine-header{
  padding-top:15px;
  padding-bottom:5px;
  padding-left:5px;
  }
  .create-product-image-input {
    max-width: 100px;
    height: 60px;
    background-color: grey;
    background-image: url('./icons/person.svg');
    background-size: 32px 32px;
    background-position: center;
    background-repeat: no-repeat;
  }

  .profil-obere-box{
    padding-top:10px;
  }

  .profil-obere-box-links {
    display:inline-block;
    min-width:60vw;
    height:auto;
    padding-left:15px;
  }

  .profil-obere-box-rechts {
    display:inline-block;
    width:40vw;
    height:auto;
    padding-right:15px;
    text-align:right;
  }

  .profil-erstellen-button {
    background: black;
    color:white;
    font-size:10pt;
    text-align:center;
    border: none;
    padding:8px;
  }
`
