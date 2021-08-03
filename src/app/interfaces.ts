export interface Organizer {
  name: string;
  email?: string;
}

export type MeetingType = "ce" | "project" | "general";

export interface Meeting {
  date: Date;
  type: MeetingType;
  title: string;
  description?: string;
  location?: string;
  endDate?: Date;
  speaker?: string;
  organizers?: Organizer[];
}

export class MeetingModel implements Meeting {
  constructor(
    public date: Date,
    public type: MeetingType,
    public title: string,
    public description: string,
    public location: string,
    public endDate?: Date
  ) { }
}

export class CEMeetingModel implements Meeting {
  constructor(
    public date: Date,
    public type: MeetingType,
    public title: string,
    public description: string,
    public location: string,
    public speaker: string,
    public endDate?: Date
  ) { }
}

export class ProjectModel implements Meeting {
  constructor(
    public date: Date,
    public type: MeetingType,
    public title: string,
    public description: string,
    public location: string,
    public organizers: Organizer[],
    public endDate?: Date
  ) {}
}

export interface Officer {
  position: string;
  name: string;
  biography: string[];
  image?: string;
  email?: string;
}
