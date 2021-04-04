
const Bookinglist = ({appointments , products}) => {

let myAppointments = [];
let myProducts = [];


const terminMap = appointments.map(appointment => {

        let pTitle = "";
        let pPrice = "";
        let aTime = "";
        let aDay = "";
        let aMonth = "";
        let pZip = "";
        let pCity = "";

        products.map(product => {
            if(product.id.toString() === appointment.productID)
            {   
                pTitle = product.title;
                pPrice = product.price;
                aTime = appointment.thisTime;
                aDay = appointment.thisDay;
                aMonth = appointment.thisMonth;
                pZip = product.zip;
                pCity = product.city;
            }
        })

let parseTime = parseInt(aTime, 10);

console.log(parseTime)

let hour = Math.floor(parseTime / 60);
        let hour2 = '';
        if(hour < 10){hour2 = '0'};
        const minutes = parseTime % 60;
        let minutes2 = '';
        if(minutes < 1){minutes2 = '0'};

        return(
            <div className="terminObjekt">
            <div>
                {pTitle} 
            </div>
            <div>
                {pPrice} €
            </div>
            <div>
                Am {aDay}.{aMonth} um {hour2}{hour} : {minutes2}{minutes}

                
            </div>
            <div>
                {pZip}, {pCity} 
            </div>
            </div>
        )
    })


return (<div>
<div className="termine-header">
Termine
</div>
<hr/>
<div className="termine-map">
{terminMap}
</div>
</div>
)
}
export default Bookinglist;