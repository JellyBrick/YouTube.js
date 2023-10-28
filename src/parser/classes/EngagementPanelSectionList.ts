import { YTNode } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';
import ContinuationItem from './ContinuationItem.js';
import EngagementPanelTitleHeader from './EngagementPanelTitleHeader.js';
import MacroMarkersList from './MacroMarkersList.js';
import ProductList from './ProductList.js';
import SectionList from './SectionList.js';
import StructuredDescriptionContent from './StructuredDescriptionContent.js';
import VideoAttributeView from './VideoAttributeView.js';

export default class EngagementPanelSectionList extends YTNode {
  static type = 'EngagementPanelSectionList';

  header: EngagementPanelTitleHeader | null;
  content: VideoAttributeView | ContinuationItem | StructuredDescriptionContent | MacroMarkersList | ProductList | null;
  target_id?: string;
  panel_identifier?: string;
  visibility?: string;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, EngagementPanelTitleHeader);
    this.content = Parser.parseItem(data.content, [ VideoAttributeView, SectionList, ContinuationItem, StructuredDescriptionContent, MacroMarkersList, ProductList ]);
    this.panel_identifier = data.panelIdentifier;
    this.target_id = data.targetId;
    this.visibility = data.visibility;
  }
}