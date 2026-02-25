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
    production: "O Wondrous Night",
    designer: "David Lander",
    venue: "SeaWorld Orlando (Nautilus Theatre)",
    console: "ETC Eos APEX",
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
    console: "ETC Eos",
    year: 2025,
  },
  {
    production: "Urinetown",
    designer: "Caroline Nowak",
    venue: "Nebraska Repertory Theatre",
    console: "ETC Eos",
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
    console: "ETC Eos",
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
    console: "ETC Eos",
    year: 2022,
  },
  {
    production: "Dontrell, Who Kissed the Sea",
    designer: "Aja M. Jackson",
    venue: "Nebraska Repertory Theatre",
    console: "ETC Eos",
    year: 2021,
  },
  {
    production: "A Midsummer Night's Dream",
    designer: "Abbey Lynn Smith",
    venue: "Nebraska Repertory Theatre",
    console: "MA2",
    year: 2021,
  },
  {
    production: "Evenings of Dance",
    designer: "Michelle Harvey",
    venue: "Lied Center, Lincoln NE",
    console: "ETC Eos",
    year: 2021,
  },
  {
    production: "Clarence Darrow",
    designer: "Tom Giomario",
    venue: "Rubicon Theatre Company",
    console: "ETC Eos",
    year: 2019,
  },
  {
    production: "Othello",
    designer: "Leigh Allen",
    venue: "Kingsmen Shakespeare Company",
    console: "ETC Eos",
    year: 2018,
  },
  {
    production: "The Two Noble Kinsmen",
    designer: "Leigh Allen",
    venue: "Kingsmen Shakespeare Company",
    console: "ETC Eos",
    year: 2018,
  },
];
