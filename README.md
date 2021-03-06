UPDATE: 02/15/20

I've found a workaround, add an `id` field into `CMS_DefaultImagesVolume`, so the query becomes:

```graphql
{
  cms {
    entries {
      ... on CMS_Projects {
        heroPicture {
          url
          ... on CMS_DefaultImagesVolume {
            id
            localImage
          }
        }
      }
    }
  }
}
```

The process I took to resolve this issue can be found here:

https://spectrum.chat/gatsby-js/general/customized-resolver-for-images-from-craftql-always-says-query-is-wrong~5506f399-b5f0-4d42-a40d-c8aaf772e929

## How to run this test

```bash
# Start all the services
docker-compose up -d
```

### Getting a Craft CMS graphql endpoint ready

With data.

```bash
# Navigate to localhost:9005/admin/install

# Navigate to /admin/settings/assets
# Add an image asset volume

# Navigate to /admin/settings/fields
# Add an image field

# Navigate to /admin/settings/sections
# Add a section

# Click "Edit Entry Types(1)" on that section in sections list
# Add above image field into a tab

# Navigate to /admin/entries/<section_name>
# Create a new <section_name> record

# Navigate to /admin/plugin-store
# Install CraftQL (or upgrade to pro then configure config/routes.php inside docker container)

# Navigate to /admin/settings/plugins/craftql
# Add token
# Open token settings, enable all
```

### Use that graphql endpoint

```bash
# Launch the gatsby dev server
yarn install && yarn start
```

Navigate to http://localhost:8000/__graphql, try some queries,

The one I wanted to get it work, but can't is:

> Please replace necessary fields.

```graphql
{
  cms {
    entries {
      ... on CMS_Projects {
        heroPicture {
          url
          ... on CMS_DefaultImagesVolume {
            localImage
          }
        }
      }
    }
  }
}
```
