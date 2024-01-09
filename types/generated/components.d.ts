import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'generic.link': GenericLink;
      'generic.list-key-value': GenericListKeyValue;
    }
  }
}
