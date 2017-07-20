var data = {
  about: {
    sectionTitle: 'About',
    main: 'I\'m a former student and currently a very very junior programmer from the Bay Area.',
    subsection1Title: 'Where I\'m From',
    subsection1Main: 'The San Francisco Bay Area, currently residing in London, but not for much longer...'
  },
  projects: {
    sectionTitle: 'Projects',
    main: 'These are various projects I am currently or have previously worked on. Mostly programming, some cooking and miscellaneous, starting with the most recent project.',
    subsection1List: {
      title: 'Progamming',
      main: 'GitHub Profile',
      link: 'https://github.com/bench4ng',
      item1: {
        url: 'http://safe-coast-55589.herokuapp.com',
        title: 'Snake',
        content: '<br>classic video game rewritten for the browser. (<a href="https://github.com/bench4ng/WDI-Project-1">Source</a>)'
      },
      item2: {
        url: 'https://github.com/bench4ng/c-lisp-interpreter',
        title: 'Lisp interpreter in C',
        content: ''
      },
      item3: {
        url: 'https://github.com/bench4ng/forestfire-ca-model',
        title: 'Forest Fire Cellular Automata Model and Statistical Analysis',
        content: '<br>done in collaboration with <a href="https://github.com/habospace">Matyas Boros</a> and <a href="https://github.com/atlw">Alasdair Lindsay-Walters</a>'
      },
      item4: {
        url: 'https://worldwind.arc.nasa.gov/quakehunter/',
        title: 'QuakeHunter',
        content: '<br>a 3D earthquake visualisation web app in collaboration with <a href="https://github.com/Gagaus">Gabriel Militão</a>'
      },
      item5: {
        url: 'https://github.com/NASAWorldWindResearch/EarthquakeApp',
        title: 'Earthquake Precursor Signal Analysis',
        content: '<br>for NASA Ames/Trillium Learning in collaboration with <a href="https://github.com/NASAWorldWindResearch">NASA World Wind Research</a>'
      }
    },
    subsection2List: {
      title: 'Food'
    }
  }
};


window.onload(
  init()
);

function init() {

}
