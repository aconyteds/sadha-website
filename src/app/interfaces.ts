export interface Organizer {
  name: string;
  email?: string;
}

export interface Meeting {
  date: Date;
  type: string;
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
    public type: string,
    public title: string,
    public description: string,
    public location: string
  ) { }
}

export class CEMeetingModel implements Meeting {
  constructor(
    public date: Date,
    public type: string,
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
    public type: string,
    public title: string,
    public description: string,
    public location: string,
    public organizers: Organizer[]
  ) {}
}

export interface Officer {
  position: string;
  name: string;
  biography: string[];
  image?: string;
  email?: string;
}
