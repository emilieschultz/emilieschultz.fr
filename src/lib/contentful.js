import { createClient } from 'contentful';

export const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'rnvnzobusat8',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'e3p8I2wLHpEpDgVyx3GD3MIOGMae_ziz9aKXPIAte6A'
});
