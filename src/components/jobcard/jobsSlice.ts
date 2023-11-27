import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface App {
  username: string;
  searchKeyword: string;
  searchLocation: string;
  searchDistance: number;
  searchSort: string;
}

interface JobsState {
  app: App;
  currentJobs: Job[];
  currentFilters: {[filterKeyword: string]: string};
};

interface Job {
    title: string;
    employer: string;
    cities: string[];
    homeOffice: string;
    minSalary: number;
    maxSalary: number;
    fastApplication: boolean;
    date: string;
}

const initialJobs: Job[] = [
  {
    title: 'IT Dozent / Trainer / Programmierer / Software-Entwickler / Developer (m/w/d) bundesweit',
    employer: 'INTEW - Institut für technische Weiterbildung',
    cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
    homeOffice: 'Teilweise Home-Office',
    minSalary: 42000,
    maxSalary: 56000,
    fastApplication: true,
    date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
    title: "C#.NET Softwareentwickler (m/w/d) - Fullstack Softwareentwickler - 100 % Remote",
    employer: "Ratbacher GmbH",
    cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
    homeOffice: 'Teilweise Home-Office',
    minSalary: 42000,
    maxSalary: 56000,
    fastApplication: true,
    date: new Date(Date.now() + (1 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Frontend Softwareentwickler (m/w/d) - JavaScript Softwareentwickler",
      employer: "Ratbacher GmbH",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (25 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Java Fullstack Developer (m/w/d) - Softwareentwickler Java",
      employer: "Ratbacher GmbH",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Competence Center Leitung Softwareentwicklung Java (all genders)",
      employer: "adesso SE",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Competence Center Leitung Softwareentwicklung Java (all genders)",
      employer: "adesso SE",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Full-Stack Developer/in  Softwareentwickler /kein remote/Arbeitsort Hildesheim",
      employer: "Pro-Discount Import Export e.K.",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Webdesigner:in/UX-Entwickler:in (m/w/d)",
      employer: "Technische Informationsbibliothek (TIB)",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Softwareentwickler SharePoint (m/w/d)",
      employer: "Finanz Informatik GmbH &amp; Co. KG",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "(Senior) Frontend Entwickler (m/w/d)",
      employer: "Fincon Reply GmbH",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (27* 24 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Software-Entwickler mit Cloud Erfahrung (m/w/d) - Java, Spring / JavaScript Frameworks (Angular, vue.js, react, Typescript…)",
      employer: "proQrent GmbH",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Frontend-Entwickler (m/w/d)",
      employer: "BWS Consulting Group GmbH",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Software-Entwickler (m/w/d)",
      employer: "BWS Consulting Group GmbH",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "IT Dozent / Trainer / Programmierer / Software-Entwickler / Developer (m/w/d) bundesweit",
      employer: "INTEW - Institut für technische Weiterbildung",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Frontend-Entwickler (w/m/d)",
      employer: "Computer Futures",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Full Stack Softwareentwickler (m/w/d)",
      employer: "Melitta Gruppe",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Java (Backend |Full Stack) Software Engineer (m|w|d)",
      employer: "Computer Futures",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Software Engineer (m/w/d)",
      employer: "Progressive Recruitment",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "(Intermediate-Senior) Java Anwendungsentwickler  (m/w/d)",
      employer: "Progressive Recruitment",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Softwareentwickler (m/w/d) C# / .NET",
      employer: "FERCHAU GmbH",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (25 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Senior TypeScript Developer (m/w/d)",
      employer: "WPS Management GmbH",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Frontend Developer (m/w/d)",
      employer: "WPS Management GmbH",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "UI-Entwickler:in im Bereich Forschungsdatenmanagement (m/w/d)",
      employer: "Technische Informationsbibliothek (TIB)",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "C# .NET Softwareentwickler (m/w/d) - C# .NET Developer - 100 % Remote",
      employer: "Ratbacher GmbH",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Frontend Entwickler Angular (m/w/d) - TypeScript Developer",
      employer: "Ratbacher GmbH",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Teilweise Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: true,
      date: new Date(Date.now() + (4 * 60 * 60 * 1000)).toISOString(),
  },
  {
      title: "Senior Fullstack Softwareentwickler:in – Python &amp; React",
      employer: "CONTACT Software GmbH",
      cities: ['Berlin', 'Dresden', 'Dortmund', 'Düsseldorf', 'Frankfurt', 'Hamburg', 'Hannover', 'Kassel', 'Köln', 'München', 'Nürnberg', 'Stuttgart'],
      homeOffice: 'Nur Home-Office',
      minSalary: 42000,
      maxSalary: 56000,
      fastApplication: false,
      date: new Date(Date.now() + (30* 24 * 60 * 60 * 1000)).toISOString(),
  }, 
  {
    title: "Frontend Developer (m/w/d)",
    employer: "Tech Innovators Ltd",
    cities: ['Berlin', 'Hamburg', 'München', 'Frankfurt', 'Köln'],
    homeOffice: 'Teilweise Home-Office',
    minSalary: 50000,
    maxSalary: 65000,
    fastApplication: true,
    date: new Date(Date.now() + (2 * 60 * 60 * 1000)).toISOString(),
  },
  {
    title: "UI/UX Designer (m/w/d)",
    employer: "Digital Creations GmbH",
    cities: ['Berlin', 'München', 'Hamburg', 'Frankfurt', 'Düsseldorf'],
    homeOffice: 'Teilweise Home-Office',
    minSalary: 55000,
    maxSalary: 70000,
    fastApplication: true,
    date: new Date(Date.now() + (1 * 24 * 60 * 60 * 1000)).toISOString(),
  },
  {
    title: "Senior Frontend Engineer (m/w/d)",
    employer: "CodeCrafters Inc.",
    cities: ['München', 'Berlin', 'Hamburg', 'Köln', 'Stuttgart'],
    homeOffice: 'Vollzeit Home-Office',
    minSalary: 60000,
    maxSalary: 75000,
    fastApplication: false,
    date: new Date(Date.now() + (3 * 24 * 60 * 60 * 1000)).toISOString(),
  },
  {
    title: "Frontend Architect (m/w/d)",
    employer: "InnoSolutions AG",
    cities: ['Berlin', 'Frankfurt', 'München', 'Hamburg', 'Düsseldorf'],
    homeOffice: 'Vollzeit Home-Office',
    minSalary: 70000,
    maxSalary: 90000,
    fastApplication: false,
    date: new Date(Date.now() + (4 * 24 * 60 * 60 * 1000)).toISOString(),
  },
  {
    title: "React.js Developer (m/w/d)",
    employer: "Web Wizards GmbH",
    cities: ['Berlin', 'München', 'Frankfurt', 'Hamburg', 'Köln'],
    homeOffice: 'Teilweise Home-Office',
    minSalary: 55000,
    maxSalary: 70000,
    fastApplication: true,
    date: new Date(Date.now() + (5 * 24 * 60 * 60 * 1000)).toISOString(),
  },
  {
    title: "Frontend Software Engineer (m/w/d)",
    employer: "ByteBuilders Ltd.",
    cities: ['Hamburg', 'Berlin', 'München', 'Frankfurt', 'Stuttgart'],
    homeOffice: 'Teilweise Home-Office',
    minSalary: 60000,
    maxSalary: 75000,
    fastApplication: true,
    date: new Date(Date.now() + (6 * 24 * 60 * 60 * 1000)).toISOString(),
  },
  {
    title: "Angular Developer (m/w/d)",
    employer: "TechTrend Innovations",
    cities: ['Berlin', 'München', 'Hamburg', 'Frankfurt', 'Düsseldorf'],
    homeOffice: 'Vollzeit Home-Office',
    minSalary: 65000,
    maxSalary: 80000,
    fastApplication: false,
    date: new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)).toISOString(),
  },
  {
    title: "Frontend Development Lead (m/w/d)",
    employer: "Digital Dynamics AG",
    cities: ['München', 'Berlin', 'Hamburg', 'Köln', 'Stuttgart', 'Minden'],
    homeOffice: 'Vollzeit Home-Office',
    minSalary: 80000,
    maxSalary: 100000,
    fastApplication: false,
    date: new Date(Date.now() + (8 * 24 * 60 * 60 * 1000)).toISOString(),
  },
];

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    app: {
      username: 'Carsten',
      searchKeyword: '',
      searchLocation: '',
      searchDistance: 5,
      searchSort: 'Relevanz'
    },
    currentFilters: {},
    currentJobs: [...initialJobs],
  } as JobsState,
  reducers: {
    addFilter(state, action: PayloadAction<{
        filterKeyword: string;
        filterValue: string;
        }>) {
      const { filterKeyword, filterValue } = action.payload;

      if (state.currentFilters[filterKeyword] !== filterValue) {
        state.currentFilters[filterKeyword] = filterValue;
      }
    },
    resetFilter(state, action: PayloadAction<{ filterKey: string }>) {
      delete state.currentFilters[action.payload.filterKey];
    },
    resetAllFilters(state) {
      state.currentFilters = {};
    },
    applyFilter(state) {
      state.currentJobs = [...initialJobs];
      
      if(state.app.searchKeyword !== ''){
        state.currentJobs = state.currentJobs.filter(
          (j) => j.title.toLowerCase().includes(state.app.searchKeyword.toLowerCase())
        )
      }

      if(state.app.searchLocation !== ''){
        state.currentJobs = state.currentJobs.filter(
          (j) => j.cities.map(c => c.toLowerCase()).includes(state.app.searchLocation.toLowerCase())
        )
      }

      if (state.currentFilters['Erscheinungsdatum'] === 'Neuer als 24h') {
        state.currentJobs = state.currentJobs.filter(j => j.date <= new Date(Date.now() + (24 * 60 * 60 * 1000)).toISOString())
      } else if (state.currentFilters['Erscheinungsdatum'] === 'Neuer als 7 Tage') {
        state.currentJobs = state.currentJobs.filter(j => j.date <= new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)).toISOString())
      } 
      
      if(state.currentFilters['Home-Office Optionen'] === 'Teilweise Home-Office'){
        state.currentJobs = state.currentJobs.filter(j => j.homeOffice === 'Teilweise Home-Office')
      } else if(state.currentFilters['Home-Office Optionen'] === 'Nur Home-Office'){
        state.currentJobs = state.currentJobs.filter(j => j.homeOffice === 'Nur Home-Office')
      }

      if(state.currentFilters['Bewerbungsart'] === 'Auf Unternehmenswebsite'){
        state.currentJobs = state.currentJobs.filter(j => j.fastApplication !== true)
      } else if (state.currentFilters['Bewerbungsart'] === 'Schnelle Bewerbung'){
        state.currentJobs = state.currentJobs.filter(j => j.fastApplication === true)
      }

      if (state.app.searchSort === 'Datum') {
        state.currentJobs.sort((a, b) => {
          // Compare job dates in descending order
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
      }
    },

    setSearch(state, action: PayloadAction<{
      searchKeyword: string;
      searchLocation: string;
      searchDistance: number;
      }>){
      state.app.searchKeyword = action.payload.searchKeyword;
      state.app.searchLocation = action.payload.searchLocation;
      state.app.searchDistance = action.payload.searchDistance;
    },

    setSort(state, action: PayloadAction<string>){
      state.app.searchSort = action.payload;
    },
  }
});
export const { addFilter, resetFilter, resetAllFilters, setSearch, applyFilter, setSort } = jobsSlice.actions;

export default jobsSlice.reducer;
