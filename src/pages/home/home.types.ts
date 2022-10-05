// Generated by https://quicktype.io

enum AwardSubType {
  Appreciation = 'APPRECIATION',
  Global = 'GLOBAL',
  Premium = 'PREMIUM',
}

enum AwardType {
  Global = 'global',
}

enum IconFormat {
  Apng = 'APNG',
  PNG = 'PNG',
}

interface ResizedIcon {
  url: string;
  width: number;
  height: number;
}

enum FlairTextColor {
  Dark = 'dark',
}

enum FlairType {
  Text = 'text',
}

enum ContentCategory {
  Photography = 'photography',
}

enum Domain {
  IReddIt = 'i.redd.it',
  RedditCOM = 'reddit.com',
}

interface Item {
  media_id: string;
  id: number;
}

interface GalleryData {
  items: Item[];
}

interface Gildings {
  gid_1?: number;
  gid_2?: number;
  gid_3?: number;
}

interface MediaEmbed {}

interface S {
  y: number;
  x: number;
  u: string;
}

interface MediaMetadatum {
  status: string;
  e: string;
  m: string;
  p: S[];
  s: S;
  id: string;
}

enum WhitelistStatus {
  AllAds = 'all_ads',
  PromoAdultNsfw = 'promo_adult_nsfw',
}

enum PostHint {
  Image = 'image',
}

interface Nsfw {
  source: ResizedIcon;
  resolutions: ResizedIcon[];
}

interface Variants {
  obfuscated?: Nsfw;
  nsfw?: Nsfw;
}

interface Image {
  source: ResizedIcon;
  resolutions: ResizedIcon[];
  variants: Variants;
  id: string;
}

interface Preview {
  images: Image[];
  enabled: boolean;
}

enum Subreddit {
  Pics = 'pics',
}

enum SubredditID {
  T52Qh0U = 't5_2qh0u',
}

enum SubredditNamePrefixed {
  RPics = 'r/pics',
}

enum SubredditType {
  Public = 'public',
}

enum Kind {
  T3 = 't3',
}

interface AllAwarding {
  giver_coin_reward: null;
  subreddit_id: null;
  is_new: boolean;
  days_of_drip_extension: number | null;
  coin_price: number;
  id: string;
  penny_donate: null;
  award_sub_type: AwardSubType;
  coin_reward: number;
  icon_url: string;
  days_of_premium: number | null;
  tiers_by_required_awardings: null;
  resized_icons: ResizedIcon[];
  icon_width: number;
  static_icon_width: number;
  start_date: null;
  is_enabled: boolean;
  awardings_required_to_grant_benefits: null;
  description: string;
  end_date: null;
  sticky_duration_seconds: null;
  subreddit_coin_reward: number;
  count: number;
  static_icon_height: number;
  name: string;
  resized_static_icons: ResizedIcon[];
  icon_format: IconFormat | null;
  icon_height: number;
  penny_price: number | null;
  award_type: AwardType;
  static_icon_url: string;
}

interface ChildData {
  approved_at_utc: null;
  subreddit: Subreddit;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: any[];
  subreddit_name_prefixed: SubredditNamePrefixed;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: null | string;
  downs: number;
  thumbnail_height: number;
  top_awarded_type: null | string;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: FlairTextColor;
  upvote_ratio: number;
  author_flair_background_color: null | string;
  subreddit_type: SubredditType;
  ups: number;
  total_awards_received: number;
  media_embed: MediaEmbed;
  thumbnail_width: number;
  author_flair_template_id: null;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: null;
  secure_media_embed: MediaEmbed;
  link_flair_text: null | string;
  can_mod_post: boolean;
  score: number;
  approved_by: null;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class: null | string;
  author_flair_richtext: any[];
  gildings: Gildings;
  post_hint?: PostHint;
  content_categories: ContentCategory[];
  is_self: boolean;
  mod_note: null;
  created: number;
  link_flair_type: FlairType;
  wls: number;
  removed_by_category: null;
  banned_by: null;
  author_flair_type: FlairType;
  domain: Domain;
  allow_live_comments: boolean;
  selftext_html: null;
  likes: null;
  suggested_sort: null;
  banned_at_utc: null;
  url_overridden_by_dest: string;
  view_count: null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview?: Preview;
  all_awardings: AllAwarding[];
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: null;
  treatment_tags: any[];
  visited: boolean;
  removed_by: null;
  num_reports: null;
  distinguished: null;
  subreddit_id: SubredditID;
  author_is_blocked: boolean;
  mod_reason_by: null;
  removal_reason: null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: null;
  author: string;
  discussion_type: null;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: WhitelistStatus;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: FlairTextColor | null;
  permalink: string;
  parent_whitelist_status: WhitelistStatus;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: null;
  is_video: boolean;
  is_gallery?: boolean;
  media_metadata?: { [key: string]: MediaMetadatum };
  gallery_data?: GalleryData;
}

interface Child {
  kind: Kind;
  data: ChildData;
}

interface RawSubredditPayloadData {
  after: string;
  dist: number;
  modhash: string;
  geo_filter: string;
  children: Child[];
  before: null;
}

export interface RawSubredditPayload {
  kind: string;
  data: RawSubredditPayloadData;
}
