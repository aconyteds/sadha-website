import { Meeting } from "../interfaces";

export const meetings: Meeting[] = [{
  date: new Date("08/26/2021 06:00 PM"),
  type: "general",
  title: "Social at Alamo Beer (Beer, Bacon, & Bingo)",
  description: "Tour available at 6 PM, Bingo starts at 7 PM",
  speaker: "",
  location: "202 Lamar St, San Antonio, TX 78202",
  imageUrl: "./assets/BBB.png"
}, {
  date: new Date("09/09/2021 06:30 PM"),
  type: "ce",
  title: "Tobacco and E-Cigarettes",
  description: "",
  speaker: "Magda De La Torre",
  location: "Concorde Career College (Orientation Room), 4803 Northwest Loop 410 Unit 200"
}, {
  date: new Date("09/11/2021 09:00 AM"),
  type: "ce",
  title: "Virtual HIPAA & OSHA Training",
  description: "",
  speaker: "Hosted by TDHA",
  location: "Virtual",
  link: "https://www.texasdha.org/tdha",
  imageUrl: "./assets/Virtual OSHAHIPAA Required Training presented by Kayce Hollingsworth.jpg"
}, {
  date: new Date("10/27/2021 06:30 PM"),
  endDate: new Date("10/27/2021 08:30 PM"),
  type: "general",
  title: "Student Night & Delegate Nominations",
  description: "Sponsored by Elevate Oral Care",
  speaker: "",
  location: "Ajuaa, 11703 Huebner Rd #208, San Antonio, TX 78230"
}, {
  date: new Date("11/11/2021 06:30 PM"),
  type: "ce",
  title: "Voting on Delegates & Continuing Education: \"Treatment Planning Periodontal Conditions\"",
  description: "This course will present various periodontal conditions and scenarios that dental hygienists face on a daily basis from pocket problems to mucogingival problems with the goal to be able to precisely identify these conditions and confidently offer treatment planning solutions as a co-diagnostician and valuable health care team member.",
  speaker: "Dr. Dejan Kohut, DDS",
  location: "Los Cucos Mexican Restaraunt, 1310 E Common St, New Braunfels, TX 78130"
}, {
  date: new Date("11/05/2021 0:00 AM"),
  endDate: new Date("11/06/2021 0:00 AM"),
  type: "project",
  title: "Texas Mission of Mercy",
  description: "Registration Link (https://tmomvolunteer.org/event/80/)",
  speaker: "",
  location: "San Antonio"
}, {
  date: new Date("12/09/2021 06:30 PM"),
  type: "ce",
  title: "Installation of Delegates",
  subtitle: "Continuing Education: \"Hmmmm, I’ve seen that before\"",
  description: "This course will review common oral lesions, etiology, and treatment options. Attendees will also be provided additional content to include care review, diagnostics, and the treatment of surgical extractions.  ",
  speaker: "Dr. Scott Reinecke, DDS",
  location: "TBD"
}, {
  date: new Date("01/13/2022 06:30 PM"),
  type: "ce",
  title: "Continuing Education (Topic to be Determined)",
  description: "",
  speaker: "TBD",
  location: "TBD"
}, {
  date: new Date("02/03/2022 00:00 AM"),
  endDate: new Date("02/06/2022 0:00 AM"),
  type: "general",
  title: "TDHA Annual Conference",
  description: "Registration information coming soon.",
  speaker: "TBD",
  location: "Houston Marriott Westchase, 2900 Briarpark Dr, Houston, TX"
}, {
  date: new Date("02/10/2022 06:30 PM"),
  type: "ce",
  title: "Continuing Education (Topic to be Determined)",
  description: "",
  speaker: "TBD",
  location: "TBD"
}, {
  date: new Date("03/10/2022 06:30 PM"),
  type: "ce",
  title: "Nomination for Officers & Continuing Education (Topic to be Determined)",
  description: "",
  speaker: "TBD",
  location: "TBD"
}, {
  date: new Date("04/14/2022 06:30 PM"),
  type: "ce",
  title: "Voting on Officers & Continuing Education (Topic to be Determined)",
  description: "",
  speaker: "TBD",
  location: "TBD"
}, {
  date: new Date("05/12/2022 06:30 PM"),
  type: "general",
  title: "Officer Installation",
  description: "",
  speaker: "TBD",
  location: "TBD"
}, {
  date: new Date("09/24/2021 01:30 PM"),
  endDate: new Date("09/24/2021 04:00 PM"),
  type: "project",
  title: "SADHA Serves: The San Antonio Food Bank",
  link: "https://m.signupgenius.com/#!/showSignUp/10c0f49aaa82aa5ff2-sadha"
}];
