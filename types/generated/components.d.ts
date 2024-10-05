import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksPositionDates extends Schema.Component {
  collectionName: 'components_blocks_position_dates';
  info: {
    displayName: 'Position Dates';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    start: Attribute.Date;
    end: Attribute.Date;
    until_now: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface BlocksProject extends Schema.Component {
  collectionName: 'components_blocks_projects';
  info: {
    displayName: 'Project';
    icon: 'archive';
    description: '';
  };
  attributes: {
    company: Attribute.String;
    positions: Attribute.Component<'blocks.position-dates', true>;
    location: Attribute.String;
  };
}

export interface GenericLink extends Schema.Component {
  collectionName: 'components_generic_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface GenericListKeyValue extends Schema.Component {
  collectionName: 'components_generic_list_key_values';
  info: {
    displayName: 'List Key Value';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface GenericText extends Schema.Component {
  collectionName: 'components_generic_texts';
  info: {
    displayName: 'Text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    value: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.position-dates': BlocksPositionDates;
      'blocks.project': BlocksProject;
      'generic.link': GenericLink;
      'generic.list-key-value': GenericListKeyValue;
      'generic.text': GenericText;
    }
  }
}
