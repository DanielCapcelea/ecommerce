import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'x7zg4rft',
    dataset: 'production',
    apiVersion: '2022-05-02',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);