
import React from 'react';
import * as _ from "lodash";
import PropTypes from 'prop-types';
import moment from "moment";

function constructDailySchedule(dailySchedule) {
    let startTime, endTime, width = 1022;
    for (let i = 0; i < dailySchedule.length; i++) {
        startTime = moment(dailySchedule[i].time, "HH:mm");
        endTime = startTime.add(dailySchedule[i].duration, 'minutes')
        dailySchedule[i].endTime = endTime.format("HH:mm") + ':00';
        dailySchedule[i].time = dailySchedule[i].time + ':00';
        dailySchedule[i].width = width;
        dailySchedule[i].left = 0;
    }
}


function overlapDailySchedule(dailySchedule) {
    let time, beforeTime, afterTime, timeMatch = [];
    let width = 1022, format = 'hh:mm:ss';

    for (let i = 0; i < dailySchedule.length - 1; i++) {
        timeMatch = [];
        for (let j = i + 1; j < dailySchedule.length; j++) {
            time = moment(dailySchedule[j].time, format);
            beforeTime = moment(dailySchedule[i].time, format);
            afterTime = moment(dailySchedule[i].endTime, format);
            if (time.isBetween(beforeTime, afterTime) || time.isSame(beforeTime)) {
                timeMatch.push(j);
            } else {
                break;
            }
        }
        dailySchedule[i].width = timeMatch.length > 0 ? Math.floor(dailySchedule[i].width / ((timeMatch.length) + 1)) : dailySchedule[i].width;
        for (let k = 0; k < timeMatch.length; k++) {
            dailySchedule[timeMatch[k]].left = dailySchedule[i].width * (k + 1);
            dailySchedule[timeMatch[k]].width = dailySchedule[i].width;
        }
        i = timeMatch.length > 0 ? timeMatch[timeMatch.length - 1] : i;
    }
}


export function DailyScheduleComponent(props) {
    const timing = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00", "6:30", "7:00", "7.30", "8.00", "8.30", "9.00"];
    let dailyScheduleDOM = [], timingDOM = [], dailySchedule = {};

    if (!_.isEmpty(props.dailySchedule)) {
        dailySchedule = props.dailySchedule
        /*add duration to time in endTime and set left width for each schedule*/
        constructDailySchedule(dailySchedule)

        /*find matching time to alter width and left for each schedule*/
        overlapDailySchedule(dailySchedule)

        /*construct timingDOM with timing information*/
        timingDOM.push(timing.map(val => {
            if (val.includes("00")) {
                let zone = val < "12" ? "AM" : "PM";
                return <li key={val}>{val + ' ' + zone}</li>
            } else {
                return <li className="align-time" key={val}>{val}</li>
            }
        }))

        /*construct dailyScheduleDOM with schedule information*/

        dailyScheduleDOM.push(dailySchedule.map((elem) => {
            return (<li className="single-event" key={elem.description} data-start={elem.time} data-end={elem.endTime} width={elem.width} left={elem.left} data-content="event-restorative-yoga" data-event="event-4">
                <em className="font-weight event-name">{elem.description}</em>
            </li>)
        }))
    }
    return (
        <div className="cd-schedule">
            <div className="timeline">
                <ul>
                    {
                        timingDOM
                    }
                </ul>
            </div>

            <div className="events">
                <ul>
                    <li className="events-group">
                        <div className="top-info">Daily schedule
              </div>
                        <ul>
                            {dailyScheduleDOM}
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="event-modal">
                <header className="header">
                    <div className="content">
                        <span className="event-date"></span>
                        <h3 className="event-name"></h3>
                    </div>

                    <div className="header-bg"></div>
                </header>

                <div className="body">
                    <div className="event-info"></div>
                    <div className="body-bg"></div>
                </div>

            </div>
        </div>
    )
}


