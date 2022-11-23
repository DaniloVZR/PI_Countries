import React from "react";
import { useSelector } from "react-redux";
import Activity from "../Activity/Activity.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import "./ActivityList.css";

export default function ActivityList() {
  const activities = useSelector((state) => state.activities);
  return (
    <div className="activityList__Container">
      <div>
        <NavBar/>
      </div>

      <div className="Activity__Cards__List">{
        activities?.map((acc) => {
          return (
            <div className="Activity__Card">
              <Activity
                name={acc.name}
                duration={acc.duration}
                season={acc.season}
                difficulty={acc.name}
              /> 
            </div>
          )
        })}
      </div>
    </div>
  )
}