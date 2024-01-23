import { Meeting } from '../interfaces';

export const meetings: Meeting[] = [
  {
    date: new Date('08/26/2021 06:00 PM'),
    type: 'general',
    title: 'Social at Alamo Beer (Beer, Bacon, & Bingo)',
    description: 'Tour available at 6 PM, Bingo starts at 7 PM',
    speaker: '',
    location: '202 Lamar St, San Antonio, TX 78202',
    imageUrl: './assets/BBB.png',
  },
  {
    date: new Date('09/09/2021 06:30 PM'),
    type: 'ce',
    title: 'Tobacco and E-Cigarettes',
    description: '',
    speaker: 'Magda De La Torre',
    location:
      'Concorde Career College (Orientation Room), 4803 Northwest Loop 410 Unit 200',
  },
  {
    date: new Date('09/11/2021 09:00 AM'),
    type: 'ce',
    title: 'Virtual HIPAA & OSHA Training',
    description: '',
    speaker: 'Hosted by TDHA',
    location: 'Virtual',
    link: 'https://www.texasdha.org/tdha',
    imageUrl:
      './assets/Virtual OSHAHIPAA Required Training presented by Kayce Hollingsworth.jpg',
  },
  {
    date: new Date('10/27/2021 06:30 PM'),
    endDate: new Date('10/27/2021 08:30 PM'),
    type: 'general',
    title: 'Student Night & Delegate Nominations',
    description: 'Sponsored by Elevate Oral Care',
    speaker: '',
    location: 'Ajuaa, 11703 Huebner Rd #208, San Antonio, TX 78230',
  },
  {
    date: new Date('11/11/2021 06:30 PM'),
    type: 'ce',
    title:
      'Voting on Delegates & Continuing Education: "Treatment Planning Periodontal Conditions"',
    description:
      'This course will present various periodontal conditions and scenarios that dental hygienists face on a daily basis from pocket problems to mucogingival problems with the goal to be able to precisely identify these conditions and confidently offer treatment planning solutions as a co-diagnostician and valuable health care team member.',
    speaker: 'Dr. Dejan Kohut, DDS',
    location:
      'Los Cucos Mexican Restaraunt, 1310 E Common St, New Braunfels, TX 78130',
  },
  {
    date: new Date('11/05/2021 0:00 AM'),
    endDate: new Date('11/06/2021 0:00 AM'),
    type: 'project',
    title: 'Texas Mission of Mercy',
    description: 'Registration Link (https://tmomvolunteer.org/event/80/)',
    speaker: '',
    location: 'San Antonio',
  },
  {
    date: new Date('12/06/2021 06:30 PM'),
    type: 'ce',
    title: 'Installation of Delegates',
    subtitle: 'Continuing Education: "Hmmmm, I’ve seen that before"',
    description:
      'This course will review common oral lesions, etiology, and treatment options. Attendees will also be provided additional content to include care review, diagnostics, and the treatment of surgical extractions.  ',
    speaker: 'Dr. Scott Reinecke, DDS',
    location:
      'UT Health San Antonio, 8210 Floyd Curl Drive, Kalkwarf room, 2nd floor',
  },
  {
    date: new Date('02/03/2022 00:00 AM'),
    endDate: new Date('02/06/2022 0:00 AM'),
    type: 'general',
    title: 'TDHA Annual Conference',
    description: 'Registration information coming soon.',
    speaker: '',
    location: 'Houston Marriott Westchase, 2900 Briarpark Dr, Houston, TX',
  },
  {
    date: new Date('02/10/2022 07:00 PM'),
    endDate: new Date('02/10/2022 08:30 PM'),
    type: 'ce',
    title: 'Growing with Your Pediatric Patients: Stages of Care',
    description:
      'We will begin first with a short meeting and words from our meeting sponsor Dental Partners.',
    speaker: 'An Chih Do RDH, MED, MAADH',
    location: 'Virtual',
  },
  {
    date: new Date('03/10/2022 06:30 PM'),
    type: 'ce',
    title:
      'Nomination for Officers & Continuing Education (Topic to be Determined)',
    description: '',
    speaker: 'TBD',
    location: 'TBD',
  },
  {
    date: new Date('04/14/2022 06:30 PM'),
    type: 'ce',
    title: 'Voting on Officers & Continuing Education (Topic to be Determined)',
    description: '',
    speaker: 'TBD',
    location: 'TBD',
  },
  {
    date: new Date('05/12/2022 06:30 PM'),
    type: 'general',
    title: 'Officer Installation',
    description: '',
    speaker: 'TBD',
    location: 'TBD',
  },
  {
    date: new Date('09/24/2021 01:30 PM'),
    endDate: new Date('09/24/2021 04:00 PM'),
    type: 'project',
    title: 'SADHA Serves: The San Antonio Food Bank',
    link: 'https://m.signupgenius.com/#!/showSignUp/10c0f49aaa82aa5ff2-sadha',
  },
  {
    date: new Date('11/22/2021'),
    endDate: new Date('11/27/2021'),
    type: 'project',
    title: 'Meals on Wheels',
    description:
      'Looking for ways to make someone smile this Thanksgiving? Consider Volunteering with Meals on Wheels by delivering meals to the elderly and disabled members of our GREAT community.',
    link: 'https://www.mowsatx.org/deliverthanksgiving',
    file: {
      name: 'Meals on Wheels 2021 info',
      link: './assets/Meals on Wheels 2021.docx',
    },
  },
  {
    date: new Date('12/17/2021 01:00 PM'),
    endDate: new Date('12/17/2021 04:00 PM'),
    type: 'ce',
    title: 'AAP Classification Made Easier',
    speaker: 'Melanie Taverna and Virginia Carillo',
    location: 'Zoom',
    link: 'https://uthscsa.co1.qualtrics.com/jfe/form/SV_0wVdr1kpOEkcCnc',
    imageUrl: './assets/OralPerspectives2021.png',
    description: 'All fees go to support Beta Sigma Chapter Scholarship Fund',
  },
  {
    date: new Date('01/13/2022 06:30 PM'),
    endDate: new Date('01/13/2022 08:00 PM'),
    type: 'ce',
    title: 'Con Sazon: Nutritional Counseling for the Latin Community',
    subtitle:
      '(Click to Register - Zoom meeting link will be sent to your email THE DAY BEFORE THE EVENT)',
    speaker: 'Amber Lovatos, BSDH, RDH',
    location: 'Zoom',
    link: 'https://forms.gle/mazhEDYgBSz2ijnv7',
    imageUrl: './assets/2022_Con_Sazon.jpg',
    description:
      "What is genetic and what is preventable? How do we provide culturally competent care and respect our patients' beliefs? This course explores how culture impacts nutrition and diet in the Hispanic and Latino/a/x community.",
  },
  {
    date: new Date('04/01/2022 10:00 AM'),
    endDate: new Date('04/02/2022 05:00 PM'),
    type: 'ce',
    title: 'TDHA CE Roadshow',
    subtitle:
      "Attendees will receive up to 12.5 CEU's during this CE Roadshow.",
    speaker: 'Multiple',
    location:
      'TDHA CE Roadshow, Tyler Junior College, 1200 E 5th St, Tyler, TX 75701, USA Rogers Nursing & Health Sciences Center, Room 395',
    link: 'https://www.texasdha.org/event-details/tdha-ce-roadshow',
    description:
      'By Popular Demand the CE Roadshow will be LIVE this year in Tyler, TX with an option for those not in the area to attend HYBRID!! Registration ends March 29, 2022. Register early seats are limited.',
  },
  {
    type: 'project',
    date: new Date('09/24/2022 9:30 AM'),
    endDate: new Date('09/24/2022 11:30 AM'),
    title: 'SADHA Serves: San Antonio Pets Alive',
    link: 'https://www.signupgenius.com/go/10c0f49aaa82aa5ff2-sadha3',
    description: 'Click here to signup today!',
    location:
      'San Antonio Pets Alive, 4710 State Hwy 151, San Antonio, TX 78227',
  },
  {
    type: 'general',
    date: new Date('09/22/2022 7:00 PM'),
    endDate: new Date('09/22/2022 9:00 PM'),
    title: 'TDHA Happy Virtual Happy Hour',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfDw6ISqQugwgfz7MFkUVQiFkZkUlUOmwMRWkzOHly3LJX_hg/viewform?edit_requested=true&fbclid=IwAR0LICnwk79cKtjM4inGuVCL3WOuPFBPIFYyQKEKyr7NoFq57SUuLBkQ2cM',
    description: 'Join TDHA via Zoom for a virtual happy hour!',
    location: 'Zoom (Virtual)',
  },
  /*{
  type: "ce",
  date: new Date("10/08/2022 8:30 AM"),
  endDate: new Date("10/08/2022 1:00 PM"),
  title: "Multiple Speakers",
},*/ {
    type: 'project',
    date: new Date('10/28/2022 8:00 AM'),
    endDate: new Date('10/28/2022 4:00 PM'),
    title: 'Smiles of Hope, Day 1',
    description:
      'In partnership with the San Antonio District Dental Society (SADDS), San Antonio Christian Dental Clinic is pleased to announce a community event to address the  oral health needs of underserved Bexar County community members.',
    location:
      'San Antonio Christian Dental Clinic - 1 Haven for Hope Way; Bldg. 1, Ste. 400; San  Antonio TX, 78207. (GPS: 711 N. Frio)',
    file: {
      name: 'Smiles of Hope 2022 info',
      link: './assets/2022 Smiles of Hope Flyer.Volunteers.pdf',
    },
  },
  {
    type: 'project',
    date: new Date('10/29/2022 8:00 AM'),
    endDate: new Date('10/29/2022 4:00 PM'),
    title: 'Smiles of Hope, Day 2',
    description:
      'In partnership with the San Antonio District Dental Society (SADDS), San Antonio Christian Dental Clinic is pleased to announce a community event to address the  oral health needs of underserved Bexar County community members.',
    location:
      'San Antonio Christian Dental Clinic - 1 Haven for Hope Way; Bldg. 1, Ste. 400; San  Antonio TX, 78207. (GPS: 711 N. Frio)',
    file: {
      name: 'Smiles of Hope 2022 info',
      link: './assets/2022 Smiles of Hope Flyer.Volunteers.pdf',
    },
  },
  {
    type: 'general',
    date: new Date('10/20/2022 7:00 PM'),
    endDate: new Date('10/20/2022 9:00 PM'),
    title: 'SADHA Happy Hour',
    description:
      'Join SADHA for the Dental Hygiene Month Social and Student Night!',
    location: 'TBD',
  },
  {
    type: 'general',
    date: new Date('11/09/2022 7:00 PM'),
    endDate: new Date('11/09/2022 9:00 PM'),
    title: 'SADHA General Meeting',
    description: 'Join SADHA for the November General Meeting!',
    location: 'TBD',
  },
  {
    type: 'project',
    date: new Date('12/02/2022 10:00 AM'),
    endDate: new Date('12/02/2022 4:00 PM'),
    title: 'Elf Louise Community Event',
    description: 'Join SADHA for Elf Louise for a gift wrapping event!',
    location:
      'Elf Louise, Port San Antonio, 333 Morris Witt St., San Antonio, TX 78226',
    link: 'https://elflouise.org/wp/gift-wrapping/',
  },
  {
    type: 'general',
    date: new Date('01/12/2023 7:00 PM'),
    endDate: new Date('01/12/2023 9:00 PM'),
    title: 'SADHA General Meeting',
    speaker: 'Kate Keck with doTERRA Essential Oils',
    subtitle: 'Join SADHA for the January General Meeting and CE!',
    description:
      'The “Essential Oils in Dentistry” virtual CE will be one free credit hour and will be a scientific overview of the following - Limitations of Over The Counter options for pain, reduction of bleeding, bad breath, and decay prevention. What Essential Oils are and how to use them (especially for those at risk for periodontal disease or decay). Anxious patients and creating a welcoming office environment',
    location:
      'Concorde Career College, 4803 NW Loop 410, Suite 200, San Antonio, TX 78229',
  },
  {
    date: new Date('02/03/2023 00:00 AM'),
    endDate: new Date('02/05/2023 0:00 AM'),
    type: 'general',
    title: 'TDHA Annual Conference',
    description: 'Registration information coming soon.',
    speaker: '',
    location:
      'Embassy Suites by Hilton San Marcos Hotel Conference Center, 1001 E McCarty Ln, San Marcos, TX 78666',
  },
  {
    date: new Date('12/08/2022 7:00 PM'),
    endDate: new Date('12/08/2022 8:30 PM'),
    type: 'ce',
    title: 'SADHA CE and Christmas Gift Exchange',
    subtitle:
      'One hour CE on the topic C-diff: How does this affect the dental world?',
    description:
      'Bring a $25 wrapped gift if you would like to participate in our white elephant immediately following CE. ',
    link: 'http://events.r20.constantcontact.com/register/event?llr=y6mxkr6ab&oeidk=a07ejijcu9q65ef1e15',
    location: '7 to 7 Headquarters, 2211 NW Military HWY, San Antonio, TX',
    speaker: 'Leila H. Liberman, EdD, RDH',
  },
  {
    date: new Date('12/17/2022 11:00 AM'),
    type: 'project',
    title: 'SADHA Serves: Wreaths Across America',
    description:
      'Join SADHA on National Wreaths Across America Day, December 17, 2022 at 11:00am until all wreaths are placed. We will be placing wreaths on the headstones of American Heroes. Feel free to bring your family and friends with you to National Wreaths Across America Day. This event can accomodate all who want to volunteer.',
    link: 'https://www.signupgenius.com/go/10c0f49aaa82aa5ff2-sadha4',
    location:
      'Fort Sam Houston National Cemetery, 1520 Harry Wurzbach Rd, San Antonio, TX 78209',
  },
  {
    date: new Date('12/09/2022 12:00 PM'),
    endDate: new Date('12/09/2022 1:00 PM'),
    type: 'ce',
    title: 'FOR EDUCATORS: Teaching Multi-Generation Students',
    subtitle:
      '$25 fee. All fees go to support Beta Sigma Chapter Scholarship Fund',
    description:
      "This is a live, interactive, online 1-hour Educator's Methodology Course using inquiry-based learning, and discussions about teaching strategies for multi-generational students. The purpose of this course is to enhance teaching skills for educators with this generation of students. This is an excellent course for CODA teaching methodology requirements.",
    link: 'https://uthscsa.co1.qualtrics.com/jfe/form/SV_d7ocfl3OJATeaCq',
    speaker: 'Beth Wueste, MAEd, C-TAGME, LSSBB',
    location: 'A Zoom link will be sent by email to all registrants.',
    file: {
      link: './assets/Flyer Beta Sigma Fundraiser Dec. 2022.docx',
      name: 'Flyer Beta Sigma Fundraiser Dec. 2022',
    },
  },
  {
    date: new Date('09/14/2023 06:30 PM'),
    type: 'general',
    title: 'SADHA General Meeting',
    description:
      'Join SADHA for the September General Meeting with special guest Cathy Nobles, TDHA President, who will be providing an update on the Local Anesthesia Bill.',
    location: '7 to 7 dental, 2211 NW Military Hwy, San Antonio, TX 78213',
  },
  {
    date: new Date('09/14/2023 07:30 PM'),
    type: 'ce',
    subtitle: 'Cultural Competency',
    title: 'Sponsored by Philips Sonicare',
    description: 'Click here to register',
    location: '7 to 7 dental, 2211 NW Military Hwy, San Antonio, TX 78213',
    speaker: 'Magda De La Torre, RDH, MPH',
    link: 'https://lp.constantcontactpages.com/ev/reg/qq6xdre',
  },
  {
    date: new Date('10/12/2023 06:30 PM'),
    type: 'general',
    title: 'Senior Student Night',
    location: 'More details coming soon!',
  },
  {
    date: new Date('10/14/2023 08:00 AM'),
    type: 'project',
    title: 'San Antonio Oral Cancer Foundation Walk',
    description:
      'Join SADHA for the San Antonio Oral Cancer Foundation Walk! Click or Tap on this event to join the SADHA team - Lace Up!',
    location:
      'UT Health San Antonio at the Pavillion, 4647 Medcical Dr. San Antonio, TX 78229',
    link: 'https://ocf.donordrive.com/index.cfm?fuseaction=donorDrive.team&teamID=8363',
    imageUrl: './assets/OCF_SA.jpg',
  },
  {
    date: new Date('09/09/2023 09:00 AM'),
    type: 'ce',
    title: 'TDHA Hosted CE',
    subtitle: 'Virtual HIPAA & OSHA Training',
    description:
      'TDHA provided annual OSHA/HIPAA training. Click or Tap on this event to register. (Registration fees apply)',
    link: 'https://www.texasdha.org/event-details-registration/tdha-annual-osha-hipaa-training',
    speaker: "Duane Tinker, AKA 'The Tooth Cop'",
  },
  {
    date: new Date('10/20/2023 00:00 PM'),
    type: 'project',
    title: 'Smiles of Hope',
    description: 'More details coming soon!',
  },
  {
    date: new Date('11/09/2023 06:30 PM'),
    type: 'general',
    title: 'Sponsored By Dental Partners',
    subtitle: 'SADHA General Meeting',
    description: 'Join SADHA for the November General Meeting!',
    location: '7 to 7 dental, 2211 NW Military Hwy, San Antonio, TX 78213',
  },
  {
    date: new Date('11/09/2023 07:30 PM'),
    type: 'ce',
    title: 'Sponsored By Dental Partners',
    speaker: 'Virginia Carillo, RDH, M.Ed',
    subtitle: 'A Review on Staging and Grading',
    link: 'https://lp.constantcontactpages.com/ev/reg/9fun5s5',
    location: '7 to 7 dental, 2211 NW Military Hwy, San Antonio, TX 78213',
  },
  {
    date: new Date('11/18/2023 08:00 AM'),
    endDate: new Date('11/18/2023 04:00 PM'),
    type: 'project',
    title: 'Free Dental Care Event',
    subtitle: 'GSAHDA Serving our Heroes/Serviendo Nuestros Heroes',
    link: 'https://www.gsahda.org/event-details/free-dental-care-event-serving-our-heroes-serviendo-nuestros-heroes-volunteer-today',
  },
  {
    date: new Date('12/02/2023 12:00 PM'),
    type: 'ce',
    title: '4 hour CE event',
    description:
      'We will be presenting two topics: 1) Work Quality and Productivity, presented by Naheed Azzam, RDH 2) A refresher on Oral Pathology, presented by Dr. Dejan Kohut, DDS, founder of RDH Study Club. Click here to register.',
    imageUrl: './assets/OralPathologyRefresher_2023.jpg',
    link: 'https://lp.constantcontactpages.com/ev/reg/9987rea?fbclid=IwAR3aXiEe2Fkz-1Q3Yp1t1axamY7-TAgucl-KzTvbraTUMpCZpvfWDAGsJrs_aem_AWNLe5EKJGWmQam9rf6qlhHCCH_EvqOY2RgcVxi-8o1AYWqWgR4d2MlsPUggb2edKFA',
  },
  {
    date: new Date('12/14/2023 06:30 PM'),
    type: 'general',
    title: 'SADHA General Meeting',
    description: 'Join SADHA for the December General Meeting!',
    location: 'Zoom (Virtual)',
  },
  {
    date: new Date('12/14/2023 07:30 PM'),
    type: 'ce',
    title: 'Hear the World',
    description: 'Developing an awareness for hearing loss and mental health.',
    speaker: 'Amanda Zubricki, RDH, BS',
    location: 'Zoom (Virtual)',
  },
  {
    date: new Date('01/11/2024 06:30 PM'),
    type: 'general',
    title: 'Sponsored by Dental Partners',
    subtitle: 'SADHA General Meeting',
    description: 'Join SADHA for the January General Meeting!',
    location: 'Zoom (Virtual)',
  },
  {
    date: new Date('01/11/2024 07:30 PM'),
    type: 'ce',
    title: 'Sponsored by Dental Partners',
    subtitle: 'More than just mental health',
    speaker: 'Shawna Grier, RDH, BSDH',
    location: 'Zoom (Virtual)',
    imageUrl:
      './assets/Green Sage Black Real Estate Agent Profile Facebook Post.png',
    link: 'https://lp.constantcontactpages.com/ev/reg/k2n9nvf',
  },
  {
    date: new Date('02/08/2024 06:30 PM'),
    type: 'general',
    title: 'SADHA General Meeting',
    description: 'Join SADHA for the February General Meeting!',
    location: '7 to 7 dental, 2211 NW Military Hwy, San Antonio, TX 78213',
  },
  {
    date: new Date('02/08/2024 07:30 PM'),
    type: 'ce',
    title: 'Promoting Prevention',
    speaker: 'Andrea Wiseman, RDH',
    location: '7 to 7 dental, 2211 NW Military Hwy, San Antonio, TX 78213',
    imageUrl: './assets/February 24 CE Post.png',
  },
  {
    date: new Date('02/10/2024 00:00 AM'),
    imageUrl: './assets/SadhaServesOurCommunity_24.png',
    type: 'project',
    title: 'Join SADHA for a community service event!',
    subtitle: 'SADHA Serves Our Community',
    description:
      "It's easy! Pick a Day/Time, take a walk around your neighborhood, pick up trash, e-mail a selfie when done!",
    location: 'Your Neighborhood',
  },
  {
    date: new Date('02/11/2024 00:00 AM'),
    imageUrl: './assets/SadhaServesOurCommunity_24.png',
    type: 'project',
    title: 'Join SADHA for a community service event!',
    subtitle: 'SADHA Serves Our Community',
    description:
      "It's easy! Pick a Day/Time, take a walk around your neighborhood, pick up trash, e-mail a selfie when done!",
    location: 'Your Neighborhood',
  },
  {
    date: new Date('03/14/2024 06:30 PM'),
    type: 'general',
    title: 'SADHA Social',
    description: 'Join SADHA for the March Social! More information to come.',
    location: 'TBD',
  },
  {
    date: new Date('04/11/2024 06:30 PM'),
    type: 'general',
    title: 'Sponsored by Dental Partners and 3M',
    subtitle: 'SADHA General Meeting',
    description: 'Join SADHA for the April General Meeting!',
    location: '7 to 7 dental, 2211 NW Military Hwy, San Antonio, TX 78213',
  },
  {
    date: new Date('04/11/2024 07:30 PM'),
    type: 'ce',
    title: 'Sponsored by Dental Partners and 3M',
    subtitle: 'Sherlock Hygiene: Mysteries of the Diabetic Patient',
    speaker: 'Staci Janous, RDH, MS',
    location: '7 to 7 dental, 2211 NW Military Hwy, San Antonio, TX 78213',
  },
  {
    date: new Date('05/09/2024 06:30 PM'),
    type: 'general',
    title: 'SADHA General Meeting, and officer installation',
    description:
      'Join SADHA for the May General Meeting and Officer Installation!',
    location: '7 to 7 dental, 2211 NW Military Hwy, San Antonio, TX 78213',
  },
];
