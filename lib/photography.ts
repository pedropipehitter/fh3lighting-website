export interface PhotoProject {
  slug: string;
  title: string;
  company: string;
  image?: string;
  credits?: {
    director?: string;
    scenic?: string;
    costume?: string;
    ld?: string;
    sound?: string;
    sm?: string;
  };
}

export const photoProjects: PhotoProject[] = [
  {
    slug: "nutcracker",
    title: "Nutcracker",
    company: "Midwest Ballet Company",
    image: "/images/121324-LNK-NUTCRACKER-FH3-12.JPG",
  },
  {
    slug: "matilda",
    title: "Matilda",
    company: "Nebraska Wesleyan University Theatre",
    image: "/images/10022024-NWUT-MATILDA-CVN-FH3-34.JPG",
  },
  {
    slug: "the-bauhaus-project",
    title: "The Bauhaus Project",
    company: "Open Fist Theatre Company",
    image: "/images/071624-AVT-The-Bauhaus-Project-FH3-4.JPG",
  },
  {
    slug: "something-rotten",
    title: "Something Rotten",
    company: "UCLA MTSI",
    image: "/images/080124-UCLA-MTSI-SOMETHING-ROTTEN-FH3-10.JPG",
  },
  {
    slug: "a-christmas-carol",
    title: "A Christmas Carol",
    company: "Alley Theatre",
    image: "/images/11182023-Alley-CAROL-FH3-15.JPG",
  },
  {
    slug: "the-play-that-goes-wrong",
    title: "The Play That Goes Wrong",
    company: "Nebraska Repertory Theatre",
    image: "/images/05022023-LNK_TPTGW-FH3-12.JPG",
  },
  {
    slug: "musical-comedy-murders-of-1940",
    title: "Musical Comedy Murders of 1940",
    company: "Lincoln Community Playhouse",
    image: "/images/05042023-LCP_MCM-FH3-9.JPG",
  },
  {
    slug: "cherry-orchard",
    title: "Cherry Orchard",
    company: "Doane University Theatre",
    image: "/images/030723-DOANE-CHERRY-ORCHARD-FH3-55.JPG",
    credits: {
      director: "Jamie Bullins",
      scenic: "Brenda Davis",
      costume: "Shandi Anderson",
      ld: "Caroline Nowak",
      sound: "Jamie Bullins",
      sm: "Emma Woods",
    },
  },
  {
    slug: "stop-kiss",
    title: "Stop Kiss",
    company: "Nebraska Repertory Theatre",
    image: "/images/022823-NRT_STOPKISS-FH3-43.JPG",
  },
  {
    slug: "amahl",
    title: "Amahl",
    company: "UNL Glenn Korff School of Music",
    image: "/images/FH3-12062022-AMAHL-11.JPG",
  },
  {
    slug: "student-dance-project",
    title: "Student Dance Project",
    company: "UNL Glenn Korff School of Music",
    image: "/images/FH3-12012022-SDP-01-68.JPG",
  },
  {
    slug: "death-of-a-salesman",
    title: "Death of a Salesman",
    company: "Nebraska Repertory Theatre",
    image: "/images/FH3-11142022-DEATH-ALS-22.jpg",
  },
  {
    slug: "perfect-arrangement",
    title: "Perfect Arrangement",
    company: "UNL Theatrix",
    image: "/images/FH3-10312022-Perfect-Arrangement-CN-11.jpg",
  },
  {
    slug: "the-wilds",
    title: "The Wilds",
    company: "Lied Center",
    image: "/images/Francisco-Hermosillo-III-100420222-The-Wilds-MH-34.jpg",
  },
  {
    slug: "shakesfear",
    title: "Shakesfear",
    company: "Nebraska Repertory Theatre",
    image: "/images/FH3-10122022-SHAKESFEAR-MH-20.jpg",
  },
];
