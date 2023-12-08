import RichTextWidget from './RichTextWidget.astro';
import ImageWidget from './ImageWidget.astro';
import HouseWidget from './HouseWidget.astro';
import TwoColumnWidget from './TwoColumnWidget.astro';

const widgetTypes = {
  '@apostrophecms/rich-text': RichTextWidget,
  '@apostrophecms/image': ImageWidget,
  'house': HouseWidget,
  'two-column': TwoColumnWidget
};

export default widgetTypes;

