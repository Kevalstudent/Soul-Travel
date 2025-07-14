import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Globe, Heart, MapPin, Camera, Send } from 'lucide-react';

const ConnectPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [newPost, setNewPost] = useState('');

  const posts = [
    {
      id: 1,
      author: 'Sarah Johnson',
      location: 'Tokyo, Japan',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      content: 'Just discovered the most amazing ramen shop in Shibuya! The broth is incredible and the atmosphere is so authentic. Would love to show fellow travelers around this area!',
      image: 'https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 24,
      comments: 8,
      time: '2 hours ago'
    },
    {
      id: 2,
      author: 'Marco Rodriguez',
      location: 'Barcelona, Spain',
      avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100',
      content: 'Sunset at Park Güell never gets old! Looking for travel buddies to explore more of Gaudí\'s masterpieces. I know all the best spots and hidden gems in the city.',
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 31,
      comments: 12,
      time: '5 hours ago'
    },
    {
      id: 3,
      author: 'Emma Chen',
      location: 'Bali, Indonesia',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
      content: 'Rice terraces in Tegallalang are absolutely breathtaking! Perfect for sunrise photography. Planning to visit the traditional markets tomorrow - anyone want to join?',
      image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 45,
      comments: 15,
      time: '1 day ago'
    }
  ];

  const travelBuddies = [
    {
      id: 1,
      name: 'Alex Thompson',
      location: 'New York, USA',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      interests: ['Photography', 'Hiking', 'Local Food'],
      nextDestination: 'Iceland',
      languages: ['English', 'Spanish']
    },
    {
      id: 2,
      name: 'Lisa Kumar',
      location: 'Mumbai, India',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      interests: ['Culture', 'Art', 'Museums'],
      nextDestination: 'Paris',
      languages: ['Hindi', 'English', 'French']
    },
    {
      id: 3,
      name: 'Tom Mueller',
      location: 'Berlin, Germany',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      interests: ['History', 'Architecture', 'Nightlife'],
      nextDestination: 'Prague',
      languages: ['German', 'English', 'Czech']
    }
  ];

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      console.log('New post:', newPost);
      setNewPost('');
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Connect with Travelers</h1>
          <p className="text-gray-400">Share experiences, find travel buddies, and discover local insights</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8">
          <button
            onClick={() => setActiveTab('feed')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'feed'
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Travel Feed
          </button>
          <button
            onClick={() => setActiveTab('buddies')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'buddies'
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Find Travel Buddies
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'messages'
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Messages
          </button>
        </div>

        {/* Travel Feed */}
        {activeTab === 'feed' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Create Post */}
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Your avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    placeholder="Share your travel experience..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                    rows={3}
                  />
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                        <Camera className="w-5 h-5" />
                        Photo
                      </button>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400">
                        <MapPin className="w-5 h-5" />
                        Location
                      </button>
                    </div>
                    <button
                      onClick={handlePostSubmit}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Feed */}
            {posts.map((post) => (
              <div key={post.id} className="bg-gray-900 rounded-xl p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-white font-semibold">{post.author}</h3>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {post.location}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{post.time}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{post.content}</p>
                
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post image"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                )}
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors">
                    <Heart className="w-5 h-5" />
                    {post.likes}
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    {post.comments}
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Travel Buddies */}
        {activeTab === 'buddies' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {travelBuddies.map((buddy) => (
              <div key={buddy.id} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={buddy.avatar}
                    alt={buddy.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-lg">{buddy.name}</h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {buddy.location}
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">Interests:</p>
                  <div className="flex flex-wrap gap-2">
                    {buddy.interests.map((interest, index) => (
                      <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-1">Next Destination:</p>
                  <p className="text-white font-semibold">{buddy.nextDestination}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-2">Languages:</p>
                  <div className="flex flex-wrap gap-2">
                    {buddy.languages.map((language, index) => (
                      <span key={index} className="bg-cyan-500 bg-opacity-20 text-cyan-300 px-2 py-1 rounded text-sm">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                    Connect
                  </button>
                  <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Messages */}
        {activeTab === 'messages' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 rounded-xl p-6"
          >
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">No messages yet</h3>
              <p className="text-gray-400">Start connecting with fellow travelers to see your conversations here.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ConnectPage;