import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { s3Storage } from '@payloadcms/storage-s3'

import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Users } from './collections/Users'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'
import { ProposalFiles } from './collections/ProposalFiles'
import { ProposalRequests } from './collections/ProposalRequest'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      // baseDir: path.resolve(dirname),
       baseDir: path.resolve(dirname), // или путь к вашей папке с админкой
      importMapFile: './app/(payload)/importMap.ts', // УКАЖИТЕ .ts ЗДЕСЬ
    //  baseDir: path.resolve(dirname, 'src/app/(payload)'),
    },
    livePreview: {
      url: process.env.APP_DOMAIN,
      collections: ['pages'],
      globals: ['header', 'footer'],
    }
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
  collections: [Users, Media, Pages, ProposalFiles, ProposalRequests],
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
  plugins: [
     s3Storage({
      collections: {
        'proposal-files': true,
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || '',
        endpoint: process.env.S3_ENDPOINT || '',
      },
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})

