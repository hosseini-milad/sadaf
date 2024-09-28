import { useEffect, useState } from "react";
import DatePicker, { Calendar ,utils } from "react-modern-calendar-datepicker";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

function SeatDate(props){
    const [selectedDate, setSelectedDate] = useState(props.defaultValue?
        props.defaultValue:'');
      const changeDate=()=>{
        props.action(
            selectedDate?(
                selectedDate)
            :''
        )
    }
    
    useEffect(()=>{
        if(selectedDate)
            changeDate()
    },[selectedDate])
    var today = utils('fa').getToday()
    return(
        <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            inputPlaceholder={"تاریخ رزرو"}
            shouldHighlightWeekends
            minimumDate={today}
            locale={'fa'} // add this
        />
    )
}
export default SeatDate