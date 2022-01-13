import bootstrapPortfolioSiteImg from '../img/bootstrap_portfolio_site.png';
import tinDogSiteImg from '../img/tinDog_siteImg.png';
import { nanoid } from 'nanoid';

// nanoid(), --Random ID generated via lib
// modalName: 'test1', -- Needed to create a new modal instance
// targetId: 'HTML_CSS',  -- used collapse/show project via toggle buttons(use button name)
// image: bootstrapPortfolioSiteImg, -- location of project image
// alt: 'Bootstrap portfolio site render', --image alt tag
// title: 'Bootstrap portfolio',  -- Modal- project title
// technology: 'HTML, CSS, Bootstrap 5', --Modal- technology used in project
// details: 'Website created using html and styled with Bootstrap 5', --Modal- project details
// hosted: 'https://medledan.github.io/findDaniel/', --Modal - Project host location
// github: 'https://github.com/medledan/findDaniel.git', --Modal - Project github location
// collapsed: false, -- Default visibility

const projectData = [
  {
    id: nanoid(),
    modalName: 'originalPortfolio',
    targetId: 'HTML_CSS',
    image: bootstrapPortfolioSiteImg,
    alt: 'Bootstrap portfolio site render',
    title: 'Original site version',
    technology: 'HTML, CSS, Bootstrap 5',
    details:
      'Original version of this website created using html and styled with Bootstrap 5',
    hosted: 'https://medledan.github.io/findDaniel/',
    github: 'https://github.com/medledan/findDaniel.git',
    collapsed: false,
  },
  {
    id: nanoid(),
    modalName: 'TinDog',
    targetId: 'HTML_CSS',
    image: tinDogSiteImg,
    alt: 'Tindog site render',
    title: 'TinDog',
    technology: 'HTML, CSS, Bootstrap 5',
    details: 'Project website created using html and styled with Bootstrap 5',
    hosted: 'https://medledan.github.io/Tindog/',
    github: 'https://github.com/medledan/Tindog.git',
    collapsed: true,
  },
  {
    id: nanoid(),
    modalName: 'test2',
    targetId: 'React',
    image: 'https://picsum.photos/id/1004/500',
    alt: 'sample project',
    title: 'test',
    technology: '',
    details: '',
    hosted: '',
    github: '',
    collapsed: true,
  },
  {
    id: nanoid(),
    targetId: 'Node',
    modalName: 'test3',
    image: 'https://picsum.photos/id/1005/500',
    alt: 'sample project',
    title: 'test',
    technology: '',
    details: '',
    hosted: '',
    github: '',
    collapsed: true,
  },
];

export default projectData;
