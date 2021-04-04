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
  min-width: 30px;
  height: 30px;
  border: 1px solid grey;
  display:inline-block;
}

.dayslabel:hover{
  background:grey;
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
  width:60px;
}
`
