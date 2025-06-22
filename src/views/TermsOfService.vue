<template>
  <div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
        
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            <strong>Effective Date:</strong> {{ effectiveDate }}<br>
            <strong>Last Updated:</strong> {{ lastUpdated }}
          </p>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Welcome to SiteWise ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website building and hosting platform. By accessing or using SiteWise, you agree to be bound by these Terms.
            </p>
            <p class="text-gray-700 dark:text-gray-300">
              SiteWise is available in two deployment options: as a cloud-hosted service and as a self-hosted solution. Different terms may apply based on your chosen deployment method.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. License and Open Source</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              SiteWise's core software is licensed under the MIT License, which grants you significant freedoms to use, modify, and distribute the software. The full MIT License terms are available in our source code repository.
            </p>
            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
              <p class="text-blue-800 dark:text-blue-200 text-sm">
                <strong>MIT License Summary:</strong> You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, subject to including the original copyright notice and license terms.
              </p>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Service Offerings</h2>
            
            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">3.1 Cloud-Hosted Service</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Our cloud-hosted service provides you with access to SiteWise through our managed infrastructure. This includes:
            </p>
            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Hosting and maintenance of the SiteWise platform</li>
              <li>Regular updates and security patches</li>
              <li>Technical support and customer service</li>
              <li>Data backup and recovery services</li>
            </ul>

            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">3.2 Self-Hosted Solution</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Our self-hosted solution allows you to deploy SiteWise on your own infrastructure:
            </p>
            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Source code access under MIT License</li>
              <li>Full control over your deployment environment</li>
              <li>Responsibility for maintenance, updates, and security</li>
              <li>Optional paid support and consulting services</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Terms for Cloud-Hosted Service</h2>
            
            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">4.1 Account Registration</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              To use our cloud service, you must create an account and provide accurate information. You are responsible for maintaining the security of your account credentials.
            </p>

            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">4.2 Service Availability</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              We strive to maintain high service availability but cannot guarantee uninterrupted access. Scheduled maintenance will be communicated in advance when possible.
            </p>

            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">4.3 Data and Content</h3>
            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>You retain ownership of all content you create and upload</li>
              <li>You grant us necessary rights to host and serve your content</li>
              <li>You are responsible for ensuring your content complies with applicable laws</li>
              <li>We may remove content that violates these Terms or applicable laws</li>
            </ul>

            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">4.4 Payment Terms and Plan Changes</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Paid plans are billed according to the pricing schedule displayed at the time of purchase. We reserve the right to modify our pricing, payment terms, and plan features at any time with appropriate notice as outlined in Section 11. Current subscribers will be notified of changes that affect their existing subscriptions.
            </p>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              We may, at our sole discretion:
            </p>
            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Modify pricing for new subscriptions immediately</li>
              <li>Change plan features, limitations, and inclusions</li>
              <li>Introduce new payment methods or billing cycles</li>
              <li>Adjust existing subscription terms with 30 days' notice</li>
              <li>Discontinue or consolidate plan offerings</li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Refunds are provided according to our refund policy. Continued use of the service after notification of changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Terms for Self-Hosted Solution</h2>
            
            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">5.1 MIT License Compliance</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Your use of the self-hosted solution is governed by the MIT License. You must include the original copyright notice and license terms in any copies or substantial portions of the software.
            </p>

            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">5.2 No Warranty</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              In accordance with the MIT License, the self-hosted software is provided "as is" without warranty of any kind. You assume all risks associated with its use.
            </p>

            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">5.3 Support Services</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              While the software is freely available, professional support, consulting, and premium features may be offered under separate commercial agreements.
            </p>

            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">5.4 Your Responsibilities</h3>
            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Maintaining your own hosting infrastructure and security</li>
              <li>Applying updates and security patches</li>
              <li>Complying with all applicable laws in your jurisdiction</li>
              <li>Ensuring proper licensing compliance when modifying or redistributing</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Acceptable Use Policy</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">You agree not to use SiteWise for:</p>
            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Illegal activities or content that violates applicable laws</li>
              <li>Harassment, abuse, or harmful content targeting individuals or groups</li>
              <li>Spam, malware, or other malicious software distribution</li>
              <li>Unauthorized access to systems or networks</li>
              <li>Activities that could harm our infrastructure or other users</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Intellectual Property</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              While SiteWise's core software is MIT licensed, our branding, documentation, and additional services may be subject to separate intellectual property rights. The SiteWise name and logo are trademarks and may not be used without permission.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Disclaimers and Limitation of Liability</h2>
            
            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">8.1 Service Disclaimers</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.</strong> We expressly disclaim all warranties, whether express, implied, or statutory, including but not limited to:
            </p>
            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
              <li>Warranties regarding accuracy, reliability, or completeness of the service</li>
              <li>Warranties that the service will be uninterrupted, timely, secure, or error-free</li>
              <li>Warranties regarding the results obtained from using the service</li>
            </ul>

            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">8.2 Data Loss and System Malfunctions</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              <strong>YOU ACKNOWLEDGE AND AGREE THAT:</strong>
            </p>
            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>We are not responsible for any loss, corruption, or deletion of your data, content, or information</li>
              <li>System malfunctions, software bugs, server failures, or service interruptions may occur</li>
              <li>You are solely responsible for backing up and protecting your data</li>
              <li>Technical issues, security breaches, or third-party service failures are not our responsibility</li>
              <li>Any reliance on the service is at your own risk and discretion</li>
            </ul>

            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">8.3 Limitation of Liability - Cloud Service</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATING TO THE CLOUD SERVICE SHALL NOT EXCEED THE LESSER OF:</strong>
            </p>
            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>The total fees paid by you for the service in the 12 months prior to the claim; or</li>
              <li>₹10,000 (Ten Thousand Indian Rupees)</li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              <strong>WE SHALL NOT BE LIABLE FOR ANY:</strong>
            </p>
            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, use, goodwill, or other intangible losses</li>
              <li>Damages resulting from unauthorized access to or alteration of your data</li>
              <li>Damages from service interruptions, delays, or failures</li>
              <li>Damages caused by third-party services, software, or hardware</li>
              <li>Damages from any content or conduct of third parties</li>
            </ul>

            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">8.4 Self-Hosted Software</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              <strong>In accordance with the MIT License, the self-hosted software is provided "AS IS" without warranty of any kind, express or implied.</strong> We shall not be liable for any claims, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the software or the use or other dealings in the software.
            </p>

            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">8.5 Indemnification</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              You agree to indemnify, defend, and hold harmless SiteWise, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from:
            </p>
            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Your use of the service or software</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content you submit, post, or transmit through the service</li>
              <li>Your negligent or wrongful conduct</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Termination</h2>
            
            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">9.1 Cloud Service</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Either party may terminate the cloud service agreement with appropriate notice. Upon termination, you may export your data, and we will delete your data according to our data retention policy.
            </p>

            <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3">9.2 Self-Hosted Software</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Your right to use the self-hosted software under the MIT License continues indefinitely, subject to license compliance. These Terms of Service may be terminated, but your software license remains valid.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Governing Law</h2>
            <p class="text-gray-700 dark:text-gray-300">
              These Terms are governed by Indian law. Any disputes will be resolved in the courts of India, except where the MIT License provides specific terms for the self-hosted software.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Changes to Terms</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              We reserve the right to modify these Terms at any time. We will provide notice of changes as follows:
            </p>
            <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Pricing and Plan Changes:</strong> 30 days' advance notice via email and service notifications</li>
              <li><strong>Feature Modifications:</strong> Notice through service announcements and updated documentation</li>
              <li><strong>Terms Updates:</strong> Posted on our website with updated effective date</li>
              <li><strong>Immediate Changes:</strong> For legal compliance, security, or abuse prevention</li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Your continued use of our services after any changes take effect constitutes acceptance of the revised Terms. If you do not agree to the changes, you may terminate your account before the changes take effect.
            </p>
            <p class="text-gray-700 dark:text-gray-300">
              Self-hosted software users are encouraged to check for updates to these Terms periodically, as changes may affect support services and commercial offerings.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4">12. Contact Information</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p class="text-gray-700 dark:text-gray-300">
                <strong>SiteWise</strong><br>
                Email: legal@sitewise.in<br>
                Website: www.sitewise.in
              </p>
            </div>
          </section>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <RouterLink 
            to="/" 
            class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            ← Back to Home
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const effectiveDate = 'June 22, 2025'
const lastUpdated = 'June 22, 2025'
</script>