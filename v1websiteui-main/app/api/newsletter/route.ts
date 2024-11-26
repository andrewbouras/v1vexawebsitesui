import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGO_DB_NAME

if (!uri || !dbName) {
  throw new Error('Please add your Mongo URI and DB name to .env.local')
}

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body

    const client = new MongoClient(uri as string)
    await client.connect()

    const db = client.db(dbName)
    const collection = db.collection('newsletter')

    const result = await collection.insertOne({
      email,
      timestamp: new Date(),
    })

    await client.close()

    if (result.acknowledged) {
      return NextResponse.json({ message: 'Success' }, { status: 200 })
    } else {
      throw new Error('Failed to insert document')
    }
  } catch (error) {
    console.error('Error saving newsletter data:', error)
    return NextResponse.json({ message: 'Error saving data' }, { status: 500 })
  }
}
