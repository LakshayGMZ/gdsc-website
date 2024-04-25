import "./Events.css"
import {Chrono} from "react-chrono";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


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

    return (
        <div className="eventSection">
            <h1>Events</h1>
            <div onClick={()=> navigate(`/events/${card.id}`)} className="eventInfo">
                <div className="eventImage">
                    <img src={card.eventImages[0]} alt="image"></img>
                </div>
            </div>
            <div className="eventsTimeline">
                <Chrono
                    mode={"HORIZONTAL"}
                    allowDynamicUpdate={true}
                    items={eventData}
                    cardPositionHorizontal={"TOP"}
                    cardLess={true}
                    timelinePointDimension={30}
                    onItemSelected={onTimelineItemSelect}
                />
            </div>
        </div>
    );
}