import "./Events.css"
import {Chrono} from "react-chrono";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FcClock, FcCalendar, FcLandscape} from "react-icons/fc";
// import { MdAccessTimeFilled } from "react-icons/md";


export default function Events() {
    const [card, setCard] = useState({
        id:"",
        eventImages: [""],
        name: "",
        description: "",
        eventUrl: "",
        date: ""
    });
    const [eventData, setEventData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("/events")
            .then(res => res.data)
            .then(data => {
                data = data.sort((i, j) => new Date(j.date) - new Date(i.date));
                setEventData(data.map(i => ({...i, cardTitle: i.id, title: new Date(i["date"]).toDateString()})));
            });
    }, []);

    const onTimelineItemSelect = (data) => {
        setCard(eventData.find(i => i.id === data.cardTitle));
    }
    console.log(eventData)

    return (
        <div className="eventSection">
            <h1>Events</h1>

            <div className="eventList">
                {/* <div className="dotted-line"></div> */}
                {

                    eventData.map((event) => (
                        
                        
<div key={event.id} className="eventCard">

                    <div className="circle">
                        <div className="circleShape"></div>
                    </div>
                    <div style={{backgroundImage: "url("+ event.eventImages[0] + ")"}} className="eventImage">
                        {/* <img src="" alt="image" /> */}
                    </div>
                    <div className="eventData">
                        <h2><b>{event.name}</b></h2>
                        <br />
                        <h4>"Unleash the power of web3 and open source"</h4>
                        <br />
                        <div className="smallDets">
                            <p className="dets"><FaMapLocationDot /> ADGIPS Auditorium</p>
                            <p className="dets"><FcCalendar /> {
                                new Date(event.date).toDateString()
                            }</p>
                            <p className="dets"><FcClock /> 12pm onwords</p>
                        </div>
                    </div>
                </div>
                    ))
                }

            </div>

        </div>
    );
}




