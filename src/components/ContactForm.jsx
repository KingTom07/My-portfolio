import { useState, useEffect } from 'react'
import './ContactForm.css'

export default function ContactForm({ inComputerMode = false }) {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Skip visibility observer in computer mode
    if (inComputerMode) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.1 }
    )

    const contactSection = document.querySelector('.contact-section')
    if (contactSection) {
      observer.observe(contactSection)
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection)
      }
    }
  }, [inComputerMode])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        })
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isVisible) return null

  const formContent = (
    <>
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>
        {status.message && (
          <div className={`status-message ${status.type}`}>
            {status.message}
          </div>
        )}
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </>
  )

  // In computer mode, render without the positioning wrapper
  if (inComputerMode) {
    return <div className="terminal-output">{formContent}</div>
  }

  // Regular mode with fixed positioning
  return (
    <div className="contact-container">
      <div className="contact-box">
        {formContent}
      </div>
    </div>
  )
}
