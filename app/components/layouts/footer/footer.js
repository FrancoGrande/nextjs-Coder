import React from 'react'

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Footer component that displays various sections with information and links.
 * Sections include "Our Mission", "Solutions", "Support", "Company", and "Legal".
 * Each section contains relevant links and information styled with Tailwind CSS classes.
 * The footer also includes social media icons and a copyright notice.
 */

/******  74fbce80-645e-4d48-9b86-b66303d0b498  *******/
const footer = () => {
    return (
        <>
        <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">

        <div>
            <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-4">Making the world a better place through constructing elegant hierarchies.</p>
            <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i>🌐</a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i>📷</a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-github"></i>💻</a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i>▶</a>
            </div>
        </div>


        <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul>
            <li><a href="#" className="text-gray-400 hover:text-white block mb-2">Marketing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white block mb-2">Analytics</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white block mb-2">Automation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white block mb-2">Commerce</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white block">Insights</a></li>
            </ul>
        </div>


        <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul>
            <li><a href="#" className="text-gray-400 hover:text-white block mb-2">Submit Ticket</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white block mb-2">Documentation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white block">Guides</a></li>
            </ul>
        </div>


        <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
            <li><a href="#" className="text-gray-400 hover:text-white block mb-2">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white block mb-2">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white block mb-2">Jobs</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white block">Press</a></li>
            </ul>
        </div>


        <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul>
            <li><a href="#" className="text-gray-400 hover:text-white block mb-2">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white block mb-2">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white block">License</a></li>
            </ul>
        </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
        © 2024 Your Company, Inc. All rights reserved.
        </div>
    </footer>
    </>
    )
}

export default footer
