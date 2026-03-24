import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

import { Media } from './collections/Media.ts'
import { Pages } from './collections/Pages.ts'
import { Users } from './collections/Users.ts'
import { Footer } from './globals/Footer.ts'
import { Header } from './globals/Header'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
    email: nodemailerAdapter({
    defaultFromAddress: 'razrab@bk.ru',
    defaultFromName: 'Atelier Meridian',
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  editor: lexicalEditor(),
  collections: [Users, Media, Pages],
  globals: [Header, Footer],
  localization: {
    locales: ['ru', 'en', 'ar'],
    defaultLocale: 'ru',
    fallback: false,
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
