import { useState } from "react";
import { IEvent, IParseEvent } from "../../models/calendar.models";
import {
  EventItem,
  Events,
  EventTitle,
  SheduleEvents,
  SheduleItem,
  SheduleItems,
  SheduleLine,
  SheduleTime,
  Shedule,
  EventDescription,
} from "./Shedule.style";

interface Props {
  events: IParseEvent[];
  callbackEdit: Function;
}

const SheduleComponent = ({ events, callbackEdit }: Props) => {
  const [times] = useState<number[]>(Array.from(Array(24), (_, idx) => idx));

  return (
    <Shedule>
      <SheduleItems>
        {times.map((_, idx) => (
          <SheduleItem key={idx}>
            <SheduleTime>{`${idx < 10 ? "0" : ""}${idx} : 00`}</SheduleTime>
            <SheduleLine />
          </SheduleItem>
        ))}
        <SheduleEvents>
          <Events>
            {events.map((event) => (
              <EventItem
                onClick={() => callbackEdit(event.id)}
                key={event.id}
                background={event.background}
                edntTime={event.hourEnd}
                startTime={event.hourStart}
              >
                <EventTitle>{event.title}</EventTitle>
                <EventDescription>{event.description}</EventDescription>
              </EventItem>
            ))}
          </Events>
        </SheduleEvents>
      </SheduleItems>
    </Shedule>
  );
};

export default SheduleComponent;
