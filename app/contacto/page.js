'use client'

import { useState } from 'react'
import { Mail, User, Edit } from 'lucide-react'

export default function ContactPage() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
})

const validateForm = () => {
    let valid = true
    const newErrors = { name: '', email: '', message: '' }

    if (!name.trim()) {
    newErrors.name = 'Name is required'
    valid = false
    }

    if (!email.trim()) {
    newErrors.email = 'Email is required'
    valid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = 'Email is invalid'
    valid = false
    }

    if (!message.trim()) {
    newErrors.message = 'Message is required'
    valid = false
    }

    setErrors(newErrors)
    return valid
}

const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
    alert('Form submitted successfully!')
    setName('')
    setEmail('')
    setMessage('')
    setErrors({ name: '', email: '', message: '' })
    }
}

return (
    <> 

    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
    <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center font-black">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label
            htmlFor="name"
            className="block text-sm font-medium "
            >
            Name
            </label>
            <div className="relative mt-1">
            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Your name"
            />
            </div>
            {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
        </div>
        <div>
            <label
            htmlFor="email"
            className="block text-sm font-medium "
            >
            Email
            </label>
            <div className="relative mt-1">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Your email"
            />
            </div>
            {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
        </div>
        <div>
            <label
            htmlFor="message"
            className="block text-sm font-medium "
            >
            Message
            </label>
            <div className="relative mt-1">
            <Edit className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full pl-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Your message"
            />
            </div>
            {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
        </div>
        <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            Submit
        </button>
        </form>
    </div>
    </div>

    </>
)
}