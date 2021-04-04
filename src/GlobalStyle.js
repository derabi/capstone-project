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

.day-wrapper, .time-wrapper {
  display: flex;
  flex-wrap: wrap;
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
}

.dayslabel:hover{
  background:grey;
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
}

input[type="radio"]:checked+label{
  background:orange;
}

.timesinput{
  display:none
}

.timeslabel {
  font-size: 10px;
  text-align: center;
  vertical-align: middle;
  line-height: 20px; 
  margin:1px;
  padding:auto;
  width: 40px;
  height: 20px;
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
}

.monthString {
  display:inline-block;
width:80vw;
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

.left-block {
  float: left;
  width:70%;
  padding-left:15px;
  height:60px;
}

.right:block{
  float:right;
  height:60px;
}

.terminObjekt {
  background: #e3e3e3;
  padding:10px;
  margin:5px;
  font-size:10pt;
}

.termine-header{
  padding-top:15px;
  padding-bottom:5px;
  padding-left:5px;
  }
`
