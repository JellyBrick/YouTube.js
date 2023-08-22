import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Thumbnail from './misc/Thumbnail.ts';

export default class PlaylistCustomThumbnail extends YTNode {
  static type = 'PlaylistCustomThumbnail';

  thumbnail: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}