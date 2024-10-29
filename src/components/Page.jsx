import React from "react";
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  Users,
  User,
  MoreHorizontal,
  Image,
  Film,
  ListOrdered,
  Smile,
  MapPin,
} from "lucide-react";

const TwitterClone = () => {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Sidebar */}
      <div className="w-64 p-4 border-r border-gray-800">
        <div className="space-y-4">
          <div className="p-2">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </div>

          <NavItem icon={<Home />} text="Home" />
          <NavItem icon={<Search />} text="Explore" />
          <NavItem icon={<Bell />} text="Notifications" />
          <NavItem icon={<Mail />} text="Messages" />
          <NavItem icon={<Bookmark />} text="Grok" />
          <NavItem icon={<Users />} text="Communities" />
          <NavItem
            icon={
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
            }
            text="Premium"
          />
          <NavItem icon={<User />} text="Profile" />
          <NavItem icon={<MoreHorizontal />} text="More" />

          <button className="w-full bg-blue-500 text-white rounded-full py-3 font-bold">
            Post
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 border-r border-gray-800">
        <div className="flex border-b border-gray-800">
          <div className="flex-1 p-4 font-bold">For you</div>
          <div className="flex-1 p-4 text-gray-500">Following</div>
        </div>

        {/* Post composer */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex">
            <div className="w-12 h-12 rounded-full bg-gray-800" />
            <div className="flex-1 ml-4">
              <input
                type="text"
                placeholder="What is happening?!"
                className="w-full bg-transparent text-xl outline-none"
              />
              <div className="flex items-center mt-4 gap-4">
                <button className="text-blue-500">
                  <Image className="w-5 h-5" />
                </button>
                <button className="text-blue-500">
                  <Film className="w-5 h-5" />
                </button>
                <button className="text-blue-500">
                  <ListOrdered className="w-5 h-5" />
                </button>
                <button className="text-blue-500">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="text-blue-500">
                  <MapPin className="w-5 h-5" />
                </button>
                <div className="ml-auto">
                  <button className="bg-blue-500 px-4 py-1.5 rounded-full font-bold">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sample post */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex">
            <div className="w-12 h-12 rounded-full bg-gray-800" />
            <div className="ml-4">
              <div className="flex items-center">
                <span className="font-bold">Foot Mercato</span>
                <span className="text-gray-500 ml-2">@footmercato · 1h</span>
              </div>
              <div className="mt-2">It's just a deployment test</div>
              <div className="text-gray-500">(Communiqué du club)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 p-4">
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Ending today!</h2>
          <p className="mb-4">Get up to 50% off X Premium</p>
          <button className="bg-white text-black rounded-full px-4 py-2 font-bold">
            Subscribe
          </button>
        </div>

        <div className="bg-gray-900 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Trends for you</h2>
          <TrendingItem topic="Sports" title="Real Madrid" posts="174K" />
          <TrendingItem
            topic="Trending in Senegal"
            title="WhatsApp"
            posts="137K"
          />
          <TrendingItem
            topic="Trending in Senegal"
            title="Supprime"
            posts="6,469"
          />
          <TrendingItem
            topic="Trending in Senegal"
            title="Pleure"
            posts="13.4K"
          />
          <TrendingItem
            topic="Trending in Senegal"
            title="Wesh"
            posts="5,996"
          />
        </div>
      </div>
    </div>
  );
};

// Helper Components
const NavItem = ({ icon, text }) => (
  <div className="flex items-center p-3 hover:bg-gray-900 rounded-full cursor-pointer">
    <div className="w-6 h-6">{icon}</div>
    <span className="ml-4 text-xl">{text}</span>
  </div>
);

const TrendingItem = ({ topic, title, posts }) => (
  <div className="py-2 hover:bg-gray-800 cursor-pointer">
    <div className="text-gray-500 text-sm">{topic}</div>
    <div className="font-bold">{title}</div>
    <div className="text-gray-500 text-sm">{posts} posts</div>
  </div>
);

export default TwitterClone;
