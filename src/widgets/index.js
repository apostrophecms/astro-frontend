import RichTextWidget from './RichTextWidget.astro';
import ImageWidget from './ImageWidget.astro';

const widgetTypes = {
  '@apostrophecms/rich-text': RichTextWidget,
  '@apostrophecms/image': ImageWidget
};

export default widgetTypes;

