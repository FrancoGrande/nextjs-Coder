import React from 'react'
import Link from 'next/link'

const footer = () => {
    return (
        <>
        <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">

        <div>
            <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-400 mb-4">Making the world a better place through constructing elegant hierarchies.</p>
            <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i>🌐</Link>
            <Link href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i>📷</Link>
            <Link href="#" className="text-gray-400 hover:text-white"><i className="fab fa-github"></i>💻</Link>
            <Link href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i>▶</Link>
            </div>
        </div>


        <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul>
            <li><Link href="#" className="text-gray-400 hover:text-white block mb-2">Marketing</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white block mb-2">Analytics</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white block mb-2">Automation</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white block mb-2">Commerce</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white block">Insights</Link></li>
            </ul>
        </div>


        <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul>
            <li><Link href="#" className="text-gray-400 hover:text-white block mb-2">Submit Ticket</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white block mb-2">Documentation</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white block">Guides</Link></li>
            </ul>
        </div>


        <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
            <li><Link href="#" className="text-gray-400 hover:text-white block mb-2">About</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white block mb-2">Blog</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white block mb-2">Jobs</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white block">Press</Link></li>
            </ul>
        </div>


        <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul>
            <li><Link href="#" className="text-gray-400 hover:text-white block mb-2">Terms of Service</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white block mb-2">Privacy Policy</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white block">License</Link></li>
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
