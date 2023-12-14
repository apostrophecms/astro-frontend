import HomePage from './HomePage.astro';
import DefaultPage from './DefaultPage.astro';
import BlogIndexPage from './BlogIndexPage.astro';
import BlogShowPage from './BlogShowPage.astro';
import NotFoundPage from './NotFoundPage.astro';

const docTypes = {
  '@apostrophecms/home-page': HomePage,
  'default-page': DefaultPage,
  '@apostrophecms/blog-page:index': BlogIndexPage,
  '@apostrophecms/blog-page:show': BlogShowPage,
  '@apostrophecms/page:notFound': NotFoundPage
};

export default docTypes;
