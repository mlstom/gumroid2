import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'yjjk5joq',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: "sk42T73s7YGcCpfCOnn96RawZuM9NNgdf4Th9TlgigB2l8WnqwXWQirQBxIcq2wjnD7fRW99LK7BoT9ycXvit0G93aeIRneteoM5OCu1ww2ONhJo1A6P1mTLejSveF0IXflvHMZMGSv1SRHIo1dUTWdr4QYKvWCq8JOOwCFvep3xJrevMdlH",
  ignoreBrowserTokenWarning: true
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);