import { useEffect, useState } from "react"
import { api } from "../utils/api"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import Navbar from "../components/Navbar"

const History = () => {
  const [checkins, setCheckins] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await api.get("/checkin")
        setCheckins(res.data)
      } catch (err) {
        console.error("Error fetching history:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchHistory()
  }, [])

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center h-[80vh]">
          <p className="text-gray-500 text-lg animate-pulse">Loading your history...</p>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700">
          Your Check-in History
        </h1>

        {checkins.length === 0 ? (
          <p className="text-gray-500 text-center mt-20">
            😔 No check-ins yet. Start by sharing how you feel on the Dashboard!
          </p>
        ) : (
          <div className="space-y-4">
            {checkins.map((c) => (
              <Card key={c._id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="capitalize">
                    {c.sentiment}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-2">{c.message}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(c.createdAt).toLocaleString()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default History
