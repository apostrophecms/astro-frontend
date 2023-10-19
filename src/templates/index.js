import HomePage from './HomePage.astro';
import DefaultPage from './DefaultPage.astro';

const docTypes = {
  '@apostrophecms/home-page': HomePage,
  'default-page': DefaultPage
};

export default docTypes;
