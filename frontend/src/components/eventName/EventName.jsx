import "./EventName.css"
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Carousel} from "react-bootstrap";

export default function EventName() {
    const {eventId} = useParams();
    const [cardData, setCardData] = useState({
        id: "",
        eventImages: [""],
        name: "",
        description: "",
        eventUrl: "",
        date: ""
    })

    useEffect(() => {
        if (eventId === "") return;
        axios.get("/events/" + eventId)
            .then(res => res.data)
            .then(data => setCardData(data))
    }, []);

    return (
        <div className="eventNameSection">
            <h1><b>{cardData.name}</b></h1>
            <div>
                <Carousel interval={5000} indicators={false}>
                    {cardData.eventImages.map(
                        (i, idx) => <Carousel.Item key={idx + 1}>
                            <img src={i} alt={"image " + (idx + 1)}/>
                        </Carousel.Item>
                    )}

                </Carousel>
            </div>
            <div className={"eventDescription"}>
                {cardData.description}
            </div>

        </div>
    );
}