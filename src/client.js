import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

export const client= createClient({
 projectId:'ighdkx0j',
 dataset:'production',
 apiVersion:'2023-08-17',
 useCdn:true,
 token:'skK5GQi15ELk35GtQoOufp6zzAyuCwtASBo3PLAq7CYxLg9GQfct3wgTwVmRfZN0nBzMlxXA30rJv2oIeGYv7x0Gi3FLVyyauDDXjIx7mNOonIteA2w83sA8ZhQy4zScCppyI7wXHNt0YVd2vjvbcKLCkYdybViRu2i5I9hGZGoIATc7EhAa'
})


const builder = imageUrlBuilder(client);

export const urlFor =(source)=> builder.image(source)