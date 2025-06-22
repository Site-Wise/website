<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About SiteWise</h1>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Born from the intersection of engineering excellence and real-world problem solving, 
          SiteWise is more than just software—it's a mission to transform how industries manage their operations.
        </p>
      </div>
    </section>

    <!-- Founder Story Section -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-8">
              <div class="text-center">
                <div class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-4xl font-bold">S</span>
                </div>
                <h3 class="text-2xl font-bold">Saurabh</h3>
                <p class="text-blue-100">Founder & Engineer</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Journey</h2>
            <div class="space-y-6 text-gray-600 dark:text-gray-300">
              <p class="text-lg leading-relaxed">
                My journey began at <strong class="text-blue-600 dark:text-blue-400">IIT Bombay</strong>, where I learned that engineering isn't just about solving theoretical problems—it's about creating solutions that make a real difference in people's lives.
              </p>
              
              <p class="leading-relaxed">
                After graduation, I took my skills to the <strong>Oil and Gas industry abroad</strong>, where I witnessed firsthand how complex operations struggled with inefficient tracking and management systems. Working on massive projects with budgets in the millions, I saw how poor expense tracking could derail entire operations.
              </p>
              
              <p class="leading-relaxed">
                Today, I'm channeling my engineering expertise into <strong>solving problems in farming</strong>—an industry that feeds the world but often lacks the digital tools to operate efficiently. This experience across industries has given me unique insights into operational challenges that transcend sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Problem Section -->
    <section class="bg-white dark:bg-gray-800 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">The Problem I Witnessed</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">Across industries, the same patterns emerged</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lost Receipts</h3>
            <p class="text-gray-600 dark:text-gray-300">Paper-based tracking led to 20-30% of expense records going missing</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Delayed Reporting</h3>
            <p class="text-gray-600 dark:text-gray-300">Critical budget information available weeks too late to make corrections</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Budget Overruns</h3>
            <p class="text-gray-600 dark:text-gray-300">Projects consistently exceeding budgets by 15-25% due to poor tracking</p>
          </div>
        </div>
      </div>
    </section>

    <!-- The Solution Section -->
    <section class="py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">The SiteWise Solution</h2>
            <div class="space-y-6 text-gray-600 dark:text-gray-300">
              <p class="text-lg leading-relaxed">
                Drawing from my experience across <strong>Oil & Gas projects in international markets</strong> and current work in <strong>agricultural operations</strong>, I identified common pain points that needed solving.
              </p>
              
              <p class="leading-relaxed">
                SiteWise was born out of necessity—a tool that I wish I had during those complex offshore projects, and that I'm building for farmers who need to track every seed, fertilizer bag, and labor hour to stay profitable.
              </p>
              
              <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mt-8">
                <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Core Philosophy</h3>
                <p class="text-blue-800 dark:text-blue-200">
                  "Technology should solve real problems, not create new ones. Every feature in SiteWise exists because I've personally felt the pain of not having it."
                </p>
              </div>
            </div>
          </div>
          
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-time Tracking</h3>
                <p class="text-gray-600 dark:text-gray-300">Instant expense logging with photo receipts, eliminating the paper trail problem</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Instant Analytics</h3>
                <p class="text-gray-600 dark:text-gray-300">Live dashboards providing budget insights when you need them, not weeks later</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Flexible & Open</h3>
                <p class="text-gray-600 dark:text-gray-300">MIT licensed and self-hostable, because you should own your data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries Served -->
    <section class="bg-white dark:bg-gray-800 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Industries We Serve</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">From my experience across sectors, SiteWise adapts to various operational needs</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Construction</h3>
            <p class="text-gray-600 dark:text-gray-300">Track materials, labor, and equipment across multiple construction sites</p>
          </div>
          
          <div class="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Agriculture</h3>
            <p class="text-gray-600 dark:text-gray-300">Manage farming operations, from seeds to harvest, with precise cost tracking</p>
          </div>
          
          <div class="text-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Energy & Oil</h3>
            <p class="text-gray-600 dark:text-gray-300">Complex project expense management for energy sector operations</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <h2 class="text-3xl font-bold mb-6">Our Mission</h2>
          <p class="text-xl leading-relaxed mb-8">
            To democratize professional-grade expense tracking and project management tools, 
            making them accessible to businesses of all sizes—from individual farmers to multinational corporations.
          </p>
          <blockquote class="text-lg italic border-l-4 border-white/30 pl-6 text-left max-w-2xl mx-auto">
            "Every rupee tracked is a step towards better decision making. Every hour saved on paperwork is an hour that can be spent growing your business."
            <footer class="mt-4 text-blue-100">— Saurabh, Founder</footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Open Source Values -->
    <section class="bg-white dark:bg-gray-800 py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Open Source?</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300">Transparency, trust, and community-driven innovation</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Data Ownership</h3>
              <p class="text-gray-600 dark:text-gray-300">Your business data stays with you. Self-host and maintain complete control.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community Driven</h3>
              <p class="text-gray-600 dark:text-gray-300">Features built by and for real users solving real problems.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Transparency</h3>
              <p class="text-gray-600 dark:text-gray-300">No hidden algorithms or vendor lock-in. See exactly how your tools work.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p class="text-gray-600 dark:text-gray-300">Rapid iteration and improvements driven by actual user needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Transform Your Operations?</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Join the growing community of businesses that have eliminated expense tracking headaches with SiteWise.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://app.sitewise.in/login" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            Start Your Free Trial
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
          <a href="https://github.com/site-wise/app" target="_blank" rel="noopener" class="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'About - SiteWise'
})
</script>