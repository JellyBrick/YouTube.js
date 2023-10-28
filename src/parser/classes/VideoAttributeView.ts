import { YTNode } from '../helpers.js';
import { NavigationEndpoint } from '../nodes.js';

import ContentPreviewImageView from './ContentPreviewImageView.js';
import Parser from '../index.js';

import type { RawNode } from '../types/index.js';

export default class VideoAttributeView extends YTNode {
  static type = 'VideoAttributeView';

  image: ContentPreviewImageView | null;
  image_style: string;
  title: string;
  subtitle: string;
  secondary_subtitle: {
    content: string
  };
  orientation: string;
  sizing_rule: string;
  overflow_menu_on_tap: {
    innertube_command: NavigationEndpoint
  };
  overflow_menu_a11y_label: string;
  logging_directives: {
    tracking_params: string,
    visibility: {
      types: string
    },
    enable_displaylogger_experiment: boolean
  };

  constructor(data: RawNode) {
    super();
    this.image = Parser.parseItem(data.image, ContentPreviewImageView);
    this.image_style = data.imageStyle;
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.secondary_subtitle = {
      content: data.secondarySubtitle.content
    };
    this.orientation = data.orientation;
    this.sizing_rule = data.sizingRule;
    this.overflow_menu_on_tap = {
      innertube_command: new NavigationEndpoint(data.overflowMenuOnTap.innertubeCommand)
    };
    this.overflow_menu_a11y_label = data.overflowMenuA11yLabel;
    this.logging_directives = {
      tracking_params: data.loggingDirectives.trackingParams,
      visibility: {
        types: data.loggingDirectives.visibility.types
      },
      enable_displaylogger_experiment: data.loggingDirectives.enableDisplayloggerExperiment
    };
  }
}