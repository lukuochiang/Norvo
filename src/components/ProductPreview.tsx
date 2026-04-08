import { CheckCircle, Rss, FileText, Calendar, Settings } from 'lucide-react'

const captions = [
  'Browse neighborhood updates in a clean local feed',
  'Share posts, requests, and announcements with context',
  'Publish local listings and community events',
  'Support moderation and community management with admin tools',
]

export default function ProductPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Designed for everyday community life.
          </h2>
          <p className="text-lg text-gray-600">
            From neighborhood posts to local exchange and community events, Norvo helps people discover what matters nearby.
          </p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-4 lg:p-8 shadow-2xl">
            <div className="bg-gray-800 rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 bg-gray-600 rounded-md px-4 py-1.5 text-gray-400 text-sm">
                  app.norvo.community
                </div>
              </div>
              
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-3 p-6 lg:p-8">
                  <div className="bg-white rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3 pb-4 border-b">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Rss className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Maple Street Community</h4>
                        <p className="text-sm text-gray-500">248 neighbors</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full" />
                        <div>
                          <p className="font-medium text-sm text-gray-900">Sarah M.</p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Does anyone have a ladder I could borrow this weekend? Need to clean the gutters!
                      </p>
                      <div className="flex gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> 12 helpful</span>
                        <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> 3 replies</span>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full" />
                        <div>
                          <p className="font-medium text-sm text-gray-900">Mike T.</p>
                          <p className="text-xs text-gray-500">5 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full w-fit mb-2">
                        <Calendar className="w-3 h-3" />
                        Community Event
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Summer block party planning - join us Tuesday!
                      </p>
                      <div className="flex gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> 28 going</span>
                        <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> 8 comments</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 p-6 lg:p-8 lg:border-l border-gray-700">
                  <div className="space-y-4">
                    <div className="bg-gray-700 rounded-xl p-4">
                      <h4 className="text-white font-medium text-sm mb-3">Quick Actions</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-gray-300 text-sm">
                          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                            <FileText className="w-4 h-4 text-white" />
                          </div>
                          New Post
                        </div>
                        <div className="flex items-center gap-3 text-gray-300 text-sm">
                          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-white" />
                          </div>
                          Create Event
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-700 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-medium text-sm">Admin Tools</h4>
                        <Settings className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full w-3/4" />
                        </div>
                        <p className="text-xs text-gray-400">Moderation queue: 3 items</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {captions.map((caption, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-600 text-sm">{caption}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Use polished mockups or placeholder product screens if final UI is not ready yet.
        </p>
      </div>
    </section>
  )
}
