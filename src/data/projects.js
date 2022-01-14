import bootstrapPortfolioSiteImg from '../img/bootstrap_portfolio_site.png';
import bootstrapPortfolioSitePrev from '../img/bootstrap_preview.png';
import tinDogSiteImg from '../img/tinDog_siteImg.png';
import tinDogSitePreviewImg from '../img/tinDog_preview.png';
import orderSummaryComponent from '../img/orderSummaryComponent.png';

import { nanoid } from 'nanoid';

// nanoid(), --Random ID generated via lib
// modalName: 'test1', -- Needed to create a new modal instance
// targetId: 'HTML_CSS',  -- used collapse/show project via toggle buttons(use button name)
// sitePrevImage: bootstrapPortfolioSiteImg, -- location of project preview image
// modalImage: bootstrapPortfolioSiteImg, -- location of project snapshot image
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
    sitePrevImage: bootstrapPortfolioSitePrev,
    modalImage: bootstrapPortfolioSiteImg,
    alt: 'Bootstrap portfolio site render',
    title: 'Original site version',
    technology: 'HTML, CSS, Bootstrap 5',
    details:
      'Original version of this website created using HTML and styled with Bootstrap 5',
    hosted: 'https://medledan.github.io/findDaniel/',
    github: 'https://github.com/medledan/findDaniel.git',
    collapsed: false,
  },
  {
    id: nanoid(),
    modalName: 'TinDog',
    targetId: 'HTML_CSS',
    sitePrevImage: tinDogSitePreviewImg,
    modalImage: tinDogSiteImg,
    alt: 'Tindog site render',
    title: 'TinDog',
    technology: 'HTML, CSS, Bootstrap 5',
    details: 'Project website created using HTML and styled with Bootstrap',
    hosted: 'https://medledan.github.io/Tindog/',
    github: 'https://github.com/medledan/Tindog.git',
    collapsed: true,
  },
  {
    id: nanoid(),
    modalName: 'OrderSummaryCardComponent',
    targetId: 'HTML_CSS',
    sitePrevImage: orderSummaryComponent,
    modalImage: orderSummaryComponent,
    alt: 'Order Summary Card Component',
    title: 'Order Summary Card Component',
    technology: 'HTML5, Bootstrap 5',
    details: 'This is a component built with HTML, Bootstrap and custom CSS',
    hosted: 'https://medledan.github.io/Frontend_Mentor-Order-Summary-Card-/',
    github:
      'https://github.com/medledan/Frontend_Mentor-Order-Summary-Card-.git',
    collapsed: true,
  },
  {
    id: nanoid(),
    targetId: 'Node',
    modalName: 'test3',
    sitePrevImage: bootstrapPortfolioSiteImg,
    modalImage: bootstrapPortfolioSiteImg,
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
