import "./TeamDetailedCard.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin, faMedium, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {useEffect, useMemo, useState} from "react";
import {Dialog} from "@mui/material";
import axios from "axios";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

const mapping = {
    Instagram: faInstagram,
    Twitter: faTwitter,
    Medium: faMedium,
    Linkedin: faLinkedin,
    Github: faGithub,
    Portfolio: faGlobe,
}

const initState = {
    id: "",
    profiles: [{profileType: "", profileUrl: ""}],
    name: "",
    about: "",
    position: "",
    memberType: "",
    imageUrl: "",
    branch: ""
}

export default function TeamDetailedCard({profileId}) {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(initState);

    useEffect(() => {
        if (profileId === "") return;
        setOpen(true);
        axios.get("/members/" + profileId)
            .then(res => res.data)
            .then(data => setData(data))
    }, [profileId]);

    return (
        <Dialog
            open={open}
            onClose={() => {
                setOpen(false);
                setData(initState);
            }}
        >
            <div className={"profile"}>
                <div className={"profileImagesContainer"}>
                    <img src={"/team/teamBanner.png"} alt={"profile banner"}/>
                    <div className={"mainProfileImageContainer"}>
                        <img src={data.imageUrl} width={90} height={90}/>
                    </div>

                </div>
                <div className={"profileContentContainer"}>
                    <h2><b>{data.name}</b></h2>
                    <>{data.position}</>
                    <br/>
                    <br/>
                    <p>{data.about}</p>

                </div>
                <div className={"profileLinksContainer"}>
                {data.profiles.map((i, idx) =>
                        <a key={idx+1} href={i.profileUrl}>
                            <FontAwesomeIcon size="xl" icon={mapping[i.profileType]}/>
                        </a>
                    )}
                </div>
            </div>
        </Dialog>
    );
}