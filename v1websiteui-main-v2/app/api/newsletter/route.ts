import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGO_DB_NAME

export const dynamic = 'force-dynamic'

// Helper function to get MongoDB client
async function getMongoClient() {
  if (!uri || !dbName) {
    throw new Error('Missing MongoDB configuration')
  }
  const client = new MongoClient(uri)
  await client.connect()
  return client
}

export async function POST(req: NextRequest) {
  let client: MongoClient | null = null
  
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      )
    }

    client = await getMongoClient()
    const db = client.db(dbName)
    const collection = db.collection('newsletter')

    // Check if email already exists
    const existing = await collection.findOne({ email })
    if (existing) {
      return NextResponse.json(
        { message: 'Email already registered' },
        { status: 409 }
      )
    }

    // Test the connection
    await db.command({ ping: 1 })
    console.log("Successfully connected to MongoDB")

    const result = await collection.insertOne({
      email,
      timestamp: new Date(),
    })

    return NextResponse.json(
      { message: 'Success' },
      { status: result.acknowledged ? 200 : 500 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Error saving data' },
      { status: 500 }
    )
  } finally {
    if (client) {
      await client.close()
    }
  }
}
