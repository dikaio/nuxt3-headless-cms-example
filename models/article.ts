import { IContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.3.0-0'
 */
export type Article = IContentItem<{
  slug: Elements.UrlSlugElement;
  date: Elements.DateTimeElement;
  tags: Elements.LinkedItemsElement<IContentItem>;
  content: Elements.RichTextElement;
  category: Elements.LinkedItemsElement<IContentItem>;
  description: Elements.TextElement;
  title: Elements.TextElement;
}>;

export const Article_CODENAME: string = "article";