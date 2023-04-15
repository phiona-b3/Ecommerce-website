export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
            hotspot: true,
        }
    },
    {
        name: 'name',
        title: 'Name',
        type: 'string',
    },
    {
        // a schema type for slugs is used to create unique URLs
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 120,
        }
    },
    {
        name: 'price',
        title: 'Price',
        type: 'number',
    },
    {
        name: 'details',
        title: 'Details',
        type: 'string',
    }
  ]
}