import { nanoid } from 'nanoid';

// id: nanoid(), -- Randomly generated ID
// styles: 'btn btn-lg btn-primary', -- Bootstrap styles
// href: 'https://www.linkedin.com/in/danielmedleyprofile', --src tag link
// fontAwesome: 'fa-linkedin-in', --font Awesome icon

const socialLinks = [
  {
    id: nanoid(),
    styles: 'btn btn-lg btn-primary',
    href: 'https://www.linkedin.com/in/danielmedleyprofile',
    fontAwesome: 'fa-linkedin-in',
  },
  {
    id: nanoid(),
    styles: 'btn btn-lg btn-primary githubIcon',
    href: 'https://github.com/medledan',
    fontAwesome: 'fa-github',
  },
];

export default socialLinks;
