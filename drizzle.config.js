import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.tsx",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_29ixvtzOLysn@ep-aged-hall-a1vnqihx-pooler.ap-southeast-1.aws.neon.tech/ai-content-generator?sslmode=require',
  }
});
