import { lightingDesignGalleries } from "@/lib/lightingDesignGalleries";

export interface Collaborator {
  role: string;
  name: string;
}

export interface ProductionNotes {
  challenge?: string;
  approach?: string;
  outcome?: string;
}

export interface Show {
  slug: string;
  title: string;
  role: string;
  venue: string;
  location: string;
  year: number;
  image?: string;
  gallery?: string[];
  note?: string;
  collaborators?: Collaborator[];
  productionNotes?: ProductionNotes;
}

export const shows: Show[] = [
  {
    slug: "silent-night-of-the-lambs",
    title: "Silent Night of the Lambs",
    role: "Lighting Designer",
    venue: "Bluebarn Theatre",
    location: "Omaha, NE",
    year: 2024,
    image: "/images/SNOTL129.jpg",
    gallery: lightingDesignGalleries["silent-night-of-the-lambs"],
    collaborators: [
      { role: "Director", name: "Susan Clement" },
      { role: "Choreography", name: "Carrie Nath" },
      { role: "Scenic Design", name: "Martin Marchitto" },
      { role: "Sound & Projection Design", name: "Bill Kirby" },
      { role: "Costume Design", name: "Denise Evrin" },
      { role: "Stage Manager", name: "Nic Jansen" },
    ],
    productionNotes: {
      challenge: "Uniting horror and holiday aesthetics in a single rig while supporting an ensemble-driven, physically dynamic production in Bluebarn's intimate black box.",
      approach: "Built a high-contrast zone system with deep cool and amber isolations, leaning into hard shadow to keep the horror edge without losing the warmth of the holiday material.",
      outcome: "The design was cited in reviews for its tonal range. The production sold out its run.",
    },
  },
  {
    slug: "something-rotten",
    title: "Something Rotten",
    role: "Lighting Designer",
    venue: "UCLA TFT MT Summer Institute",
    location: "Los Angeles, CA",
    year: 2024,
    image: "/images/080124-UCLA-MTSI-SOMETHING-ROTTEN-FH3-10.JPG",
    gallery: lightingDesignGalleries["something-rotten"],
    collaborators: [
      { role: "Director", name: "Jeff Maynard" },
      { role: "Scenic Design", name: "Michael Sellers" },
      { role: "Asst. Lighting Design", name: "Gus Cohen" },
      { role: "Sound Design", name: "Austin Taylor" },
      { role: "Stage Manager", name: "Jesse Vacchiano" },
    ],
    productionNotes: {
      challenge: "Delivering a fully saturated Broadway-scaled musical comedy palette for a summer institute production with a large, fast-moving ensemble and marquee-heavy scenic elements.",
      approach: "Leaned into high-chroma primaries and let the scenic marquee bulbs anchor the warm center — built the wash system outward from that source logic so the light felt earned rather than imposed.",
      outcome: "The vibrant, comedic palette supported the ensemble's energy and gave the production a visual scale larger than its resources would suggest.",
    },
  },
  {
    slug: "the-nerd",
    title: "The Nerd",
    role: "Assistant Lighting Designer",
    venue: "Alley Theatre",
    location: "Houston, TX",
    year: 2024,
    image: "/images/Alley-Theatre-The-Nerd-Lynn-Lane-1.jpg",
    gallery: lightingDesignGalleries["the-nerd"],
    collaborators: [
      { role: "Director", name: "Brandon Weinbrenner" },
      { role: "Scenic Design", name: "Tim Mackabee" },
      { role: "Costume Design", name: "Haydee Zelideth" },
      { role: "Lighting Design", name: "Aja M. Jackson" },
      { role: "Sound Design", name: "Jane Shaw" },
      { role: "Stage Manager", name: "Kristen Larson" },
    ],
    productionNotes: {
      challenge: "Supporting a realistic 1970s comedy built around a densely detailed practical interior, where every motivated source had to hold scrutiny and every comedy beat required precise lighting timing.",
      approach: "Worked with LD Aja M. Jackson on focus documentation and magic sheet organization, tracking how she used motivated sources to shape comic rhythm within a naturalistic framework.",
      outcome: "First full Alley credit; deepened understanding of how rigorous naturalistic design creates the conditions for comedy to land rather than merely illuminating it.",
    },
  },
  {
    slug: "a-christmas-carol",
    title: "A Christmas Carol",
    role: "Assistant Lighting Designer",
    venue: "Alley Theatre",
    location: "Houston, TX",
    year: 2023,
    image: "/images/11182023-Alley-CAROL-FH3-15.JPG",
    gallery: lightingDesignGalleries["a-christmas-carol"],
    collaborators: [
      { role: "Director", name: "Rob Melrose" },
      { role: "Scenic Design", name: "Michael Locher" },
      { role: "Costume Design", name: "Raquel Barreto" },
      { role: "Lighting Design", name: "Cat Tate Starmer" },
      { role: "Sound Design", name: "Cliff Caruthers" },
      { role: "Music Direction", name: "John L. Cornelius II" },
      { role: "Stage Manager", name: "Rebecca RD Hamlin" },
    ],
    productionNotes: {
      challenge: "Assisting on one of the Alley's largest annual productions — a full-scale Victorian spectacle demanding precise coordination across flying sequences, snow effects, ghost transformations, and over a hundred cues.",
      approach: "Managed focus tracking and magic sheet updates through a compressed tech period, serving as the liaison between Cat Tate Starmer and the board op to protect the design's integrity under rapid revision.",
      outcome: "The production deepened fluency with LORT-scale rep practices and the organizational discipline required when a design's scope leaves no margin for error.",
    },
  },
  {
    slug: "little-comedies",
    title: "Little Comedies",
    role: "Assistant Lighting Designer",
    venue: "Alley Theatre",
    location: "Houston, TX",
    year: 2023,
    image: "/images/Alley_Theatre_Little_Comedies_Photographer_Lynn_Lane-346-scaled.jpg",
    gallery: lightingDesignGalleries["little-comedies"],
    collaborators: [
      { role: "Director", name: "Richard Nelson" },
      { role: "Scenic Design", name: "Michael Locher" },
      { role: "Costume Design", name: "Susan Hilferty & Camilla Dely" },
      { role: "Lighting Design", name: "Jennifer Tipton" },
      { role: "Sound Design", name: "Scott Lehrer" },
      { role: "Stage Manager", name: "Kristen Larson" },
    ],
    productionNotes: {
      challenge: "Assisting Jennifer Tipton on a chamber-scale production requiring absolute economy — every cue was deliberate, every angle loaded with intention, with no scenic buffer between the light and the drama.",
      approach: "Focused on absorbing Tipton's working method: how she builds from architectural logic rather than effect, how she negotiates with directors, and how a minimal system can carry maximum weight.",
      outcome: "A formative mentorship under one of American theatre's most influential designers; the lessons about restraint and compositional commitment remain a direct reference point.",
    },
  },
  {
    slug: "american-mariachi",
    title: "American Mariachi",
    role: "Assistant Lighting Designer",
    venue: "Alley Theatre",
    location: "Houston, TX",
    year: 2023,
    image: "/images/AM_ALLEY_6.jpg",
    gallery: lightingDesignGalleries["american-mariachi"],
    collaborators: [
      { role: "Director", name: "KJ Sanchez" },
      { role: "Scenic Design", name: "Tanya Orellana" },
      { role: "Costume Design", name: "Christopher Vergara" },
      { role: "Lighting Design", name: "Carolina Ortiz Herrera" },
      { role: "Sound Design", name: "Lindsay Jones" },
      { role: "Music Director", name: "Jesse J. Sanchez" },
      { role: "Stage Manager", name: "Ryan Barett" },
    ],
    productionNotes: {
      challenge: "Supporting a rich, culturally specific design on the Alley's large thrust stage, coordinating lighting across a multi-zone system that had to register precisely against active projection elements.",
      approach: "Managed cue tracking and focus notes through previews while liaising with the projections team to catch registration drift before it affected the design's warm, saturated color language.",
      outcome: "Valuable experience integrating theatrical lighting with video design in a large regional house, and studying how color can function as cultural identity rather than mood alone. Three years into my career, this was the first production room I'd been in where so many of the artists — designers, director, cast — were Mexican-American. Working alongside Carolina Ortiz Herrera and the rest of that team was a reminder that the work hits differently when you see yourself in it.",
    },
  },
  {
    slug: "the-play-that-goes-wrong",
    title: "The Play That Goes Wrong",
    role: "Lighting Designer",
    venue: "Nebraska Repertory Theatre",
    location: "Lincoln, NE",
    year: 2023,
    image: "/images/05022023-LNK_TPTGW-FH3-66.JPG",
    gallery: lightingDesignGalleries["the-play-that-goes-wrong"],
    collaborators: [
      { role: "Director", name: "Ann Marie Pollard" },
      { role: "Scenic Design", name: "JD Madsen" },
      { role: "Sound Design", name: "Bryce Dale Allen" },
      { role: "Costume Design", name: "Camille Lerner" },
      { role: "Stage Manager", name: "Brad Buffum" },
    ],
    productionNotes: {
      challenge: "Designing for a meta-farce that requires the audience to believe in the straight production being destroyed — the lighting had to read as a credible 1920s murder mystery while remaining flexible enough to amplify escalating physical chaos.",
      approach: "Established a warm, naturalistic proscenium base that could hold its own as a real period play, then built in subtle shifts to undercut that reality as the mayhem escalated — using the design's own logic against itself.",
      outcome: "The dual register held throughout the run; the lighting supported both the comedy of recognition and the physical spectacle without collapsing into pure gag.",
    },
  },
  {
    slug: "holiday-inn",
    title: "Holiday Inn",
    role: "Lighting Designer",
    venue: "Nebraska Wesleyan University",
    location: "Lincoln, NE",
    year: 2022,
    image: "/images/FH3-11302022-HOLIDAY-INN-18.jpg",
    gallery: lightingDesignGalleries["holiday-inn"],
    collaborators: [
      { role: "Director", name: "Anne McAlexander" },
      { role: "Scenic Design", name: "Kelly Vogel" },
      { role: "Costume Design", name: "Elizabeth Ennis" },
      { role: "Assoc. Lighting Design", name: "Caroline Nowak" },
    ],
    productionNotes: {
      challenge: "Servicing a multi-location, multi-season Irving Berlin musical within the constraints of a university facility — the show spans a full calendar year of holidays across a dozen distinct locations.",
      approach: "Built a flexible two-color system anchored by cool blues for exterior and winter scenes against warm ambers and golds for the inn's interiors, so seasonal transitions read cleanly without scenic resets.",
      outcome: "The season-driven color language gave the production a clear visual arc and kept pace crisp across a dense book.",
    },
  },
  {
    slug: "the-marriage-of-figaro",
    title: "The Marriage of Figaro",
    role: "Lighting Designer",
    venue: "UNL School of Music",
    location: "Lincoln, NE",
    year: 2022,
    image: "/images/FH3-11102022-FIGARO-41.jpg",
    gallery: lightingDesignGalleries["the-marriage-of-figaro"],
    note: "MFA Thesis Production",
    collaborators: [
      { role: "Director", name: "Dr. William Shomos" },
      { role: "Conductor", name: "Dr. Tyler White" },
      { role: "Scenic Design", name: "JD Madsen" },
      { role: "Costume Design", name: "Camille Lerner" },
      { role: "Stage Manager", name: "Amy Guevara" },
    ],
    productionNotes: {
      challenge: "Designing for a thrust opera configuration with limited overhead positions while coordinating cue timing to a live orchestra and a director with strong specificity about motivations.",
      approach: "Prioritized a motivated naturalistic base with selective specials, building a cue structure timed to the score so transitions felt inevitable rather than mechanical.",
      outcome: "The thesis committee cited the lighting as a mature example of compositional discipline. Selected as a departmental highlight for the year.",
    },
  },
  {
    slug: "shakesfear",
    title: "Shakesfear",
    role: "Associate Lighting Designer",
    venue: "Nebraska Repertory Theatre",
    location: "Lincoln, NE",
    year: 2022,
    image: "/images/FH3-10122022-SHAKESFEAR-MH-16.jpg",
    gallery: lightingDesignGalleries["shakesfear"],
    collaborators: [
      { role: "Written & Directed by", name: "Andy Park" },
      { role: "Scenic Design", name: "JD Madsen" },
      { role: "Costume Design", name: "Jamie Bullins" },
      { role: "Lighting Design", name: "Michelle Harvey" },
      { role: "Sound Design", name: "Jeff O'Brien" },
    ],
    productionNotes: {
      challenge: "Serving as associate on a site-responsive Halloween horror production where the house was the set — audiences routed through multiple discrete environments, each requiring its own self-contained lighting world.",
      approach: "Managed the paperwork and system notes for a non-traditional multi-zone rig, ensuring each room could be reprogrammed independently and that Michelle Harvey's high-contrast design survived through the run.",
      outcome: "First associate credit; developed practical skills managing a complex programming structure across a rep-style context where individual zones had to hold without operator intervention.",
    },
  },
  {
    slug: "eugene-onegin",
    title: "Eugene Onegin",
    role: "Assistant Lighting Designer",
    venue: "Opera Omaha",
    location: "Omaha, NE",
    year: 2022,
    image: "/images/IMG_2856.JPG",
    gallery: lightingDesignGalleries["eugene-onegin"],
    collaborators: [
      { role: "Director", name: "Rosetta Cucchi" },
      { role: "Conductor", name: "Maestro Steven White" },
      { role: "Scenic Design", name: "Julia Noulin-Merat" },
      { role: "Costume Design", name: "Neil Fortin" },
      { role: "Lighting Design", name: "Pablo Santiago" },
    ],
    productionNotes: {
      challenge: "Assisting on a professional opera production with an internationally sourced design — coordinating the local electrics crew in executing Pablo Santiago's stark, near-monochromatic vision with limited advance time in the building.",
      approach: "Prepared focus documentation, managed local crew relationships, and served as eyes in the room during tech to catch focus drift and maintain the atmospheric coherence of the design through conductor-driven cue timing.",
      outcome: "First professional opera credit; built foundational skills in executing imported designs and navigating the particular compressed timeline of opera tech with a live orchestra.",
    },
  },
  {
    slug: "our-town",
    title: "Our Town",
    role: "Assistant Lighting Designer",
    venue: "Nebraska Repertory Theatre",
    location: "Lincoln, NE",
    year: 2022,
    image: "/images/FH3-OT-01.JPG",
    gallery: lightingDesignGalleries["our-town"],
    collaborators: [
      { role: "Director", name: "Arthur Feinsod" },
      { role: "Scenic Design", name: "Taylor Walters-Riggsbee" },
      { role: "Lighting Design", name: "Michelle Harvey" },
      { role: "Sound Design", name: "Emily Callahan" },
      { role: "Music Direction", name: "Charlie Alterman" },
      { role: "Costume Design", name: "Camille Lerner" },
      { role: "Stage Manager", name: "Brad Buffum" },
    ],
    productionNotes: {
      challenge: "Supporting a bare-stage production where every light state had to carry enormous emotional weight without scenic backing — in *Our Town*, the light is the scenery.",
      approach: "Assisted Michelle Harvey in refining the zone structure to maximize expressive range from a minimal rig, tracking focus and cue revisions through a director with exacting emotional notes.",
      outcome: "The experience reinforced that restraint is a craft — learned to read a room where what's left out of the design is as considered as what's in it.",
    },
  },
  {
    slug: "traveling-shoes",
    title: "Traveling Shoes",
    role: "Lighting Designer",
    venue: "NRT / St. Louis Black Rep",
    location: "Lincoln, NE",
    year: 2022,
    image: "/images/03252022-Traveling-Shoes-NRT-17.jpg",
    gallery: lightingDesignGalleries["traveling-shoes"],
    collaborators: [
      { role: "Director", name: "Ron Himes" },
      { role: "Scenic Design", name: "Brad LaMotte" },
      { role: "Costume Design", name: "Paige Moeller" },
      { role: "Sound Design", name: "Bryce Dale Allen" },
    ],
    productionNotes: {
      challenge: "Lighting a documentary-style play about civil rights and community in a black box where the scenic language was emblematic — giant block lettering, projected imagery — rather than realistic.",
      approach: "Used selective isolation and cool-to-warm contrast to track the emotional weight of individual testimonies against the ensemble context, letting tonal shifts do the work that scenic transitions couldn't.",
      outcome: "The lighting helped the production land its most intimate moments with precision, creating a legible contrast between the communal and the personal.",
    },
  },
  {
    slug: "evening-of-dance-2021",
    title: "Evening of Dance 2021",
    role: "Lighting Designer",
    venue: "Lied Center / Glenn Korff School of Music",
    location: "Lincoln, NE",
    year: 2021,
    image: "/images/IMG_8890.JPG",
    gallery: lightingDesignGalleries["evening-of-dance-2021"],
    productionNotes: {
      challenge: "Designing for a mixed concert dance program where each piece has distinct choreographic needs while maintaining visual cohesion across a full evening on a large proscenium stage.",
      approach: "Built the rig around high-angle moving heads to create dynamic aerial architectures — bold beam fans of amber and violet — as the primary scenic environment, with ground-level wash for skin warmth underneath.",
      outcome: "The lighting functioned as the scenery throughout the evening, giving each piece its own identity while unifying the program through a consistent gestural vocabulary.",
    },
  },
  {
    slug: "tmfd-department-installation",
    title: "TMFD Department Installation",
    role: "Lighting Designer",
    venue: "UNL TMFD Department Gallery",
    location: "Lincoln, NE",
    year: 2021,
    image: "/images/20210308_213300325_iOS.jpg",
    gallery: lightingDesignGalleries["tmfd-department-installation"],
    productionNotes: {
      challenge: "Lighting a fashion and textile design student exhibition in a gallery context where the work needed to read both as wearable garment and sculptural artifact, without the tools of a conventional stage.",
      approach: "Combined focused spots to render each piece as individual sculpture with a projected gobo element — an organic branching pattern — to create a shared environmental backdrop that unified the gallery without competing with the garments.",
      outcome: "A first-year MFA collaboration: myself, Abbey Lynn Smith, and Michael \"Demi\" Demaree designing together for the first time. The installation gave the student work a theatrical presence beyond the gallery norm, blurring the line between costume exhibition and designed environment.",
    },
  },
  {
    slug: "student-dance-projects",
    title: "Student Dance Projects",
    role: "Lighting Designer",
    venue: "Glenn Korff School of Music",
    location: "Lincoln, NE",
    year: 2021,
    image: "/images/IMG_0216.JPG",
    gallery: lightingDesignGalleries["student-dance-projects"],
    collaborators: [
      { role: "Choreography", name: "Hannah Friedt & Valerie Gust" },
    ],
    productionNotes: {
      challenge: "Designing for a black box student dance showcase during COVID protocols — performers in masks, reduced resources, and pieces with distinct movement vocabularies needing individual identities in a single shared space.",
      approach: "Worked with a minimal rig to create strong tonal contrast between pieces through directional color rather than position changes, keeping transitions fast and programming clean.",
      outcome: "The economy of means pushed toward clarity; each piece landed with distinct identity and the constraint proved generative.",
    },
  },
];
