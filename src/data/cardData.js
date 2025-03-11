import daniel from "../assets/images/image-daniel.jpg";
import jonathan from "../assets/images/image-jonathan.jpg";
import jeanette from "../assets/images/image-jeanette.jpg";
import patrick from "../assets/images/image-patrick.jpg";
import kira from "../assets/images/image-kira.jpg";

const cardData = [
  {
    id: 1,
    name: "Daniel Clifford",
    status: "Verified Graduate",
    headline:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
    detail: `I was an EMT for many years before I joined the bootcamp. I’ve been looking to make 
  a transition and have heard some people who had an amazing experience here. I signed up 
  for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
  The next 12 weeks was the best—and most grueling—time of my life. 
  Since completing the course, I’ve successfully switched careers, 
  working as a Software Engineer at a VR startup.`,
    image: daniel,
    className: "card1",
  },
  {
    id: 2,
    name: "Jonathan Walters",
    status: "Verified Graduate",
    headline: "The team was very supportive and kept me motivated",
    detail: `I started as a total newbie with virtually no coding skills. I now work as a 
  mobile engineer for a big company. This was one of the best investments I've made in myself.`,
    image: jonathan,
    className: "card2",
  },
  {
    id: 3,
    name: "Jeanette Harmon",
    status: "Verified Graduate",
    headline: "An overall wonderful and rewarding experience",
    detail: `Thank you for the wonderful experience! I now have a job I really enjoy, 
  and make a good living while doing something I love.`,
    image: jeanette,
    className: "card3",
  },
  {
    id: 4,
    name: "Patrick Abrams",
    status: "Verified Graduate",
    headline:
      "Awesome teaching support from TAs who did the bootcamp themselves",
    detail: `Getting guidance from them and learning from their experiences was easy.
  The staff seem genuinely concerned about my progress which I find really refreshing.
  The program gave me the confidence necessary to be able to go out in the world 
  and present myself as a capable junior developer. The standard is above the rest. 
  You will get the personal attention you need from an incredible community.`,
    image: patrick,
    className: "card4",
  },
  {
    id: 5,
    name: "Kira Whittle",
    status: "Verified Graduate",
    headline: "Such a life-changing experience. Highly recommended!",
    detail: `Before joining the bootcamp, I’d never written a line of code. 
  I needed some structure from professionals who can help me learn programming step by step. 
  I was encouraged to enroll by a former student of theirs who can only say 
  wonderful things about the program. The entire curriculum and staff did not disappoint. 
  They were very hands-on and I never had to wait long for assistance. 
  The agile team project, in particular, was outstanding. 
  It took my learning to the next level in a way that no tutorial could ever have. 
  In fact, I’ve often referred to it during interviews as an example of my development experience. 
  It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
  100% recommend!`,
    image: kira,
    className: "card5",
  },
];

export default cardData;
