export default {
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "registration",
      title: "Activate Registration",
      type: "boolean",
      description: "Check this option before adding registration options below",
    },
    {
      title: "Registration Options",
      name: "tags",
      type: "array",
      description:
        "Enter 1 or more of the following tags, 'Info', 'Video', 'Payment'",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "startDate",
      media: "mainImage",
    },
    prepare(selection) {
      const { date } = selection;
      return Object.assign({}, selection, {
        subtitle: date && `Start Date: ${date}`,
      });
    },
  },
};
