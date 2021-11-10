

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
  link?: string;
  imageUrl?: string;
  subtitle?: string;
}

export class MeetingModel implements Meeting {
  constructor(
    public date: Date,
    public type: MeetingType,
    public title: string,
    public description: string,
    public location: string,
    public endDate?: Date,
    public link?: string,
    public imageUrl?: string,
    public subtitle?: string
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
    public endDate?: Date,
    public link?: string,
    public imageUrl?: string,
    public subtitle?: string
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
    public endDate?: Date,
    public link?: string,
    public imageUrl?: string,
    public subtitle?: string
  ) {}
}

export interface Officer {
  position: string;
  name: string;
  biography: string[];
  image?: string;
  email?: string;
}
