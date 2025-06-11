import { text, sqliteTable,integer} from "drizzle-orm/sqlite-core";
export const post = sqliteTable("post", {
  id: text("id").primaryKey(),
  userId: text("user_id_post").notNull(),
  tableOfContents: text('table_of_contents').references(() => tableofcontents.id),
  title: text("title").notNull(),
  description: text("description").notNull(),
  post: text('post_json').notNull(),
  imageThumbnail: text("image_thumbnail").notNull(),
  summary: text('summary').notNull(),
  updatedAt: text("updated_at").notNull(),
  createAt: text("create_at").notNull(),
  publishedDate: text('publish_date').notNull(),
  tags: text('tags').notNull(),
  creator: text('creator').notNull()
});

export const webdata = sqliteTable("webdata", {
  id: text("id").primaryKey(),
  title: text("title"),
  jsondata: text("jsondata"),     
  website: text("website"),   
  updatedAt: text("updated_at"),
  createdAt: text("created_at"),
  description: text("description"),
  userId: text("user_id"),
});


export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  user_name: text("user_name"),
  email: text("email"),
  post: text("post_id").references(() => post.id),
  password: text("password"),
  webdata_id: text("webdata_id").references(() => webdata.id),
  updatedAt: text("updated_at"),
  createdAt: text("created_at"),
  comments:text('commenrs').references(() =>comments.id)
});


export const comments = sqliteTable('comments' ,{
  id:text('id').primaryKey(),
  userId: text("user_id"),
  comments:text('comments').notNull(),
})

export const tableofcontents = sqliteTable("table_of_content", {
  id: text("id").primaryKey(),
  title: text("title"),
  description: text("description"),
  imageSource: text("imageSource"),      // note camelCase
  subcontent: text("subcontent"),
  datepublish: text("datepublish"),
  post: text("post"),
  updatedAt: integer("updatedAt"),       // note camelCase
  createdAt: text("createdAt")           // note camelCase
});

export const navbar = sqliteTable('navbar',{
  id: text("id").primaryKey(),
  name:text('name'),
  url:text('url')
})
export const herosection = sqliteTable('herosection',{
  id: text("id").primaryKey(),
  herotitle:text('herotitle'),
  herodescription:text('herodescription'),
  heroimage:text('heroimage')
})
export const cta = sqliteTable('cta', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  desription: text('description').notNull(),
  planName: text('plan_name').notNull(),
  benefits: text('benefits').notNull(),
  tiers: text('tiers', { mode: 'json' }).notNull(), // ✅ Add this line
});
