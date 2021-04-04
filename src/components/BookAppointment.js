/* TODO:  Browser errechnen lassen, welcher Tag welchen Wochentag hat: Start ist immer der 1.1. des Jahres, dann für 12 Monate bei setDateYear */
/* TODO:   */



import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BookAppointment = () => {
/* TODO: id und Datenbankanbindung */
    const { id } = useParams();
    const { data: products, error, isPending } = useFetch('http://localhost:8000/products/' + id);
    const { data: appointments } = useFetch('http://localhost:8000/appointments');

/* TODO: variablen deklarieren und mit useState initialisieren */

    const [time, setTime] = useState('');
    const [dateDay, setDateDay] = useState(1);
    let [dateMonth, setDateMonth] = useState(4);
    const [dateYear, setDateYear] = useState(2021);
    const [productID] = useState(id);

/* TODO: history deklarieren, um in der Historie wieder zurück zu kommen */
    const history = useHistory();

/* TODO: mit handeSubmit die Daten aus der Form in die Datanbank posten */
    const handleSubmit = (e) => {
        e.preventDefault();
        const appointment = {time, dateDay, dateMonth, dateYear, productID};

    fetch( 'http://localhost:8000/appointments/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointment)
    });


    }

/* --- */

Array.prototype.remove_by_value = function(val) {
    for (var i = 0; i < this.length; i++) {
     if (this[i] === val) {
      this.splice(i, 1);
      i--;
     }
    }
    return this;
   };

const getBookedTimes = () => { appointments.map(appointment => {

    if((productID === appointment.productID) && (dateDay === appointment.dateDay )){
        times.remove_by_value(appointment.time);
        return (console.log(appointment.dateDay))
    } else {return (`hallo`)}
        })}

const times = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 
    300, 315, 330, 345, 360, 375, 390, 405, 420, 435, 450, 465, 480, 495, 510, 525, 540, 555, 570, 585, 
    600, 615, 630, 645, 660, 675, 690, 705, 720, 735, 750, 765, 780, 795, 810, 825, 840, 855, 870, 885,
    900, 915, 930, 945, 960, 975, 990, 1005, 1020, 1035, 1050, 1065, 1080, 1095, 1110, 1125, 1140, 1155, 1170, 1185,
    1200, 1215, 1230, 1245, 1260, 1275, 1290, 1305, 1320, 1335, 1350, 1365, 1380, 1395, 1410, 1425
    ]

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

const handleNextMonth = (e) => {
    if(dateMonth >= 12){   
        dateMonth = 0; 
        setDateYear(dateYear + 1)
        } 
        setDateMonth(dateMonth + 1);
}

const handleLastMonth = (e) => {
    if(dateMonth === 1){   
        dateMonth = 12; 
        setDateYear(dateYear - 1)
        } 
        setDateMonth(dateMonth - 1);
}

const mapDays = days.map(day =>  {
return (
        <div>
        <input 
            id={day}
            name="day"
            type="radio"
            key={day}
            value={day}
            onClick={(e) => {setDateDay(e.target.value); getBookedTimes()}}
            className="daysinput">
        </input>
        <label for={day} className="dayslabel">{day}</label> 
        </div>
);
})

const mapTimes = times.map(time => {

const hour = Math.floor(time / 60);
let hour2 = '';
if(hour < 10){hour2 = '0'};
const minutes = time % 60;
let minutes2 = '';
if(minutes < 1){minutes2 = '0'};
return ( 
        <div>

        <input 
            id={time}
            name="time"
            type="radio"
            key={time}
            value={time}
            onClick={(e) => setTime(e.target.value)}
            className="timesinput">
        </input>
        <label for={time} className="timeslabel">{hour2}{hour} : {minutes2}{minutes}</label> 
        </div>

);
})



    let dateMonthString = "April";

    switch (dateMonth) {
        case 1:
            dateMonthString = "Januar";
            break;
        case 2:
            dateMonthString = "Februar";
            break;
        case 3:
            dateMonthString = "März";
            break;
        case 4:
            dateMonthString = "April";
            break;
        case 5:
            dateMonthString = "Mai";
            break;
        case 6:
            dateMonthString = "Juni";
            break;
        case 7:
            dateMonthString = "Juli";
            break;
        case 8:
            dateMonthString = "August";
            break;
        case 9:
            dateMonthString = "November";
            break;
        case 10:
            dateMonthString = "Oktober";
            break;
        case 11:
            dateMonthString = "November";
            break;
        case 12:
            dateMonthString = "Dezember";
            break;
    }

    return (

        <div className="book-appointment">

{ appointments && (<article> 
            </article>
            )}


      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { products && (<article>
        
        <h2>Buchen bei { products.title }</h2>
        <form onSubmit={handleSubmit}>
        <div className="calendar">
            <div className="month-wrapper">
            <label className="arrow" onClick={handleLastMonth}> {"<"}  </label>
            {dateMonthString} {dateYear}
            <label className="arrow" onClick={handleNextMonth}> {">"}  </label>
            </div>
            <label>Tag</label>
                <div className="day-wrapper">
                    { mapDays }
                </div>
                

            <label>Uhrzeit</label>
                <div className="time-wrapper">
                    {mapTimes}
                </div>
        </div>
            <p> Kostet { products.price } € und du musst mit Haris und Gökhan ein Business gründen</p>
            <button type="submit">Termin buchen</button>
        </form>


        </article>) }
     
        </div>
    );
}

export default BookAppointment;