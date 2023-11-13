import RichTextWidget from './RichTextWidget.astro';
import ImageWidget from './ImageWidget.astro';
import HouseWidget from './HouseWidget.astro';

const widgetTypes = {
  '@apostrophecms/rich-text': RichTextWidget,
  '@apostrophecms/image': ImageWidget,
  'house': HouseWidget
};

export default widgetTypes;

