export interface PhotoProject {
  slug: string;
  title: string;
  company: string;
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
  },
  {
    slug: "matilda",
    title: "Matilda",
    company: "Nebraska Wesleyan University Theatre",
  },
  {
    slug: "the-bauhaus-project",
    title: "The Bauhaus Project",
    company: "Open Fist Theatre Company",
  },
  {
    slug: "something-rotten",
    title: "Something Rotten",
    company: "UCLA MTSI",
  },
  {
    slug: "a-christmas-carol",
    title: "A Christmas Carol",
    company: "Alley Theatre",
  },
  {
    slug: "the-play-that-goes-wrong",
    title: "The Play That Goes Wrong",
    company: "Nebraska Repertory Theatre",
  },
  {
    slug: "musical-comedy-murders-of-1940",
    title: "Musical Comedy Murders of 1940",
    company: "Lincoln Community Playhouse",
  },
  {
    slug: "cherry-orchard",
    title: "Cherry Orchard",
    company: "Doane University Theatre",
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
  },
  {
    slug: "amahl",
    title: "Amahl",
    company: "UNL Glenn Korff School of Music",
  },
  {
    slug: "student-dance-project",
    title: "Student Dance Project",
    company: "UNL Glenn Korff School of Music",
  },
  {
    slug: "death-of-a-salesman",
    title: "Death of a Salesman",
    company: "Nebraska Repertory Theatre",
  },
  {
    slug: "perfect-arrangement",
    title: "Perfect Arrangement",
    company: "UNL Theatrix",
  },
  {
    slug: "the-wilds",
    title: "The Wilds",
    company: "Lied Center",
  },
  {
    slug: "shakesfear",
    title: "Shakesfear",
    company: "Nebraska Repertory Theatre",
  },
];
