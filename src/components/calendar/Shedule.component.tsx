import { useState } from "react";
import { IParseEvent } from "./Events.component";
import {
  EventDescription,
  EventItem,
  Events,
  EventTitle,
  EventWrapper,
  SheduleItem,
  SheduleItems,
  SheduleLine,
  SheduleTime,
  SheduleWrapper,
} from "./Shedule.style";

interface Props {
  events: IParseEvent[];
}

const SheduleComponent = ({ events }: Props) => {
  const [times] = useState<number[]>(Array.from(Array(24), (_, idx) => idx));

  return (
    <SheduleWrapper>
      <SheduleItems>
        {times.map((_, idx) => (
          <SheduleItem key={idx}>
            <SheduleTime>{`${idx < 10 ? "0" : ""}${idx} : 00`}</SheduleTime>
            <SheduleLine />
          </SheduleItem>
        ))}
        <EventWrapper>
          <Events>
            {events.map((event) => (
              <EventItem
                key={event.id}
                background={event.background}
                edntTime={event.edntTime}
                startTime={event.startTime}
              >
                <EventTitle>{event.title}</EventTitle>
                <EventDescription>{event.description}</EventDescription>
              </EventItem>
            ))}
          </Events>
        </EventWrapper>
      </SheduleItems>
    </SheduleWrapper>
  );
};

export default SheduleComponent;
