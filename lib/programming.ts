export interface ProgrammingCredit {
  production: string;
  designer: string;
  venue: string;
  console: string;
  year: number | string;
  sub?: boolean;
}

export const programmingCredits: ProgrammingCredit[] = [
  {
    production: "Bentley Meeker Event at The Plaza",
    designer: "Olivia Paquet & Jaime Napolitano",
    venue: "The Plaza Hotel, NYC",
    console: "MA2",
    year: 2026,
  },
  {
    production: "Midwest Porn",
    designer: "Joey Moro",
    venue: "14th Street Y, NYC",
    console: "ETC Ion XE",
    year: 2026,
  },
  {
    production: "The Lev",
    designer: "ML Geiger",
    venue: "14th Street Y, NYC",
    console: "ETC Ion XE",
    year: 2026,
  },
  {
    production: "O Wondrous Night",
    designer: "David Lander",
    venue: "SeaWorld Orlando (Nautilus Theatre)",
    console: "ETC Eos APEX 5",
    year: 2025,
  },
  {
    production: "44 the Musical",
    designer: "Nathan Scheuer & Natali Arco",
    venue: "Daryl Roth Theatre, NYC",
    console: "ETC Eos GIO",
    year: 2025,
    sub: true,
  },
  {
    production: "Come From Away",
    designer: "Travis McHale",
    venue: "Northern Stage, VT",
    console: "ETC Ion XE",
    year: 2025,
  },
  {
    production: "Mexodus",
    designer: "Mextly Couzin",
    venue: "Minetta Lane Theatre, NYC",
    console: "ETC Eos TI",
    year: 2025,
    sub: true,
  },
  {
    production: "Ailey II Fall Tour Tech",
    designer: "Aja M. Jackson & Brandon Stirling Baker",
    venue: "SUNY Purchase",
    console: "ETC Eos APEX 5",
    year: 2025,
  },
  {
    production: "Urinetown",
    designer: "Caroline Nowak",
    venue: "Nebraska Repertory Theatre",
    console: "ETC Eos APEX 10",
    year: 2025,
  },
  {
    production: "Shin Lim: LIMITLESS",
    designer: "Michelle Harvey",
    venue: "The Mirage, Las Vegas",
    console: "MA3 (MA2 mode)",
    year: 2023,
  },
  {
    production: "Stopkiss",
    designer: "Kennedy N. Wilcher",
    venue: "Nebraska Repertory Theatre",
    console: "ETC Eos GIO",
    year: 2023,
  },
  {
    production: "Shin Lim: LIMITLESS",
    designer: "Michelle Harvey",
    venue: "The Mirage, Las Vegas",
    console: "MA3 (MA2 mode)",
    year: 2022,
  },
  {
    production: "Ain't Misbehavin'",
    designer: "Tom Ontiveros",
    venue: "Barrington Stage Company",
    console: "ETC Eos Ion XE",
    year: 2022,
  },
  {
    production: "Dontrell, Who Kissed the Sea",
    designer: "Aja M. Jackson",
    venue: "Nebraska Repertory Theatre",
    console: "ETC Eos Classic",
    year: 2021,
  },
  {
    production: "Evenings of Dance",
    designer: "Michelle Harvey",
    venue: "Lied Center, Lincoln NE",
    console: "ETC Eos Ion Classic",
    year: 2021,
  },
  {
    production: "Clarence Darrow",
    designer: "Tom Giomario",
    venue: "Rubicon Theatre Company",
    console: "ETC Eos Ion XE",
    year: 2019,
  },
  {
    production: "Othello",
    designer: "Leigh Allen",
    venue: "Kingsmen Shakespeare Company",
    console: "ETC Eos Ion Classic",
    year: 2018,
  },
  {
    production: "The Two Noble Kinsmen",
    designer: "Leigh Allen",
    venue: "Kingsmen Shakespeare Company",
    console: "ETC Eos Ion Classic",
    year: 2018,
  },
];
