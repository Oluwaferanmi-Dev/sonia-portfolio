export default {
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          "Instagram",
          "MessageSquare",
          "Users",
          "FileHeart",
          "Heart",
          "Palette",
          "Calendar",
          "Film",
          "TrendingUp",
          "MessageCircle",
          "BarChart",
        ],
      },
    },
  ],
}
