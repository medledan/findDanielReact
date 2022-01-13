import bootstrapPortfolioSiteImg from '../img/bootstrap_portfolio_site.png';
import { nanoid } from 'nanoid';

const projectData = [
  {
    id: nanoid(),
    modalName: 'test1',
    targetId: 'HTML_CSS',
    image: bootstrapPortfolioSiteImg,
    alt: 'Bootstrap portfolio site render',
    title: 'Bootstrap portfolio',
    technology: 'HTML, CSS, Bootstrap 5',
    details: 'Website created using html and styled with Bootstrap 5',
    hosted: 'https://medledan.github.io/findDaniel/',
    github: 'https://github.com/medledan/findDaniel.git',
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
    collapsed: false,
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
    collapsed: false,
  },
];

export default projectData;
