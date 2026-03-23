import { useState } from 'react'
import type { FormEvent } from 'react'
import styles from './Contact.module.css'

type EnquiryFormData = {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  requirement: string
  website: string
}

const APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL as string | undefined

const INITIAL_FORM_DATA: EnquiryFormData = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  requirement: '',
  website: '',
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState<EnquiryFormData>(INITIAL_FORM_DATA)

  const handleInputChange = (field: keyof EnquiryFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setErrorMessage('')

    if (!APPS_SCRIPT_URL) {
      setErrorMessage('Missing Google Apps Script URL. Add VITE_GOOGLE_APPS_SCRIPT_URL in your .env file.')
      return
    }

    if (!formData.firstName || !formData.email || !formData.phone || !formData.requirement) {
      setErrorMessage('Please fill all required fields before submitting.')
      return
    }

    // Honeypot: if this hidden field is filled, treat as bot and silently stop.
    if (formData.website.trim()) {
      return
    }

    setIsSubmitting(true)

    try {
      const payload = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        requirement: formData.requirement.trim(),
        source: 'defence-mandate-site',
      }

      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          // text/plain avoids preflight issues common with Apps Script web apps.
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })

      const rawResponse = await response.text()
      let parsedResponse: { ok?: boolean; error?: string } = {}

      if (rawResponse) {
        try {
          parsedResponse = JSON.parse(rawResponse) as { ok?: boolean; error?: string }
        } catch {
          parsedResponse = {}
        }
      }

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('Google Apps Script denied access. Redeploy it as a Web App with access set to Anyone.')
        }

        throw new Error(parsedResponse.error || 'Submission failed with a non-success response.')
      }

      if (Object.keys(parsedResponse).length > 0 && parsedResponse.ok !== true) {
        throw new Error(parsedResponse.error || 'Submission failed. Please try again.')
      }

      setFormData(INITIAL_FORM_DATA)
      setIsSubmitted(true)
    } catch (error) {
      if (error instanceof Error && error.message) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage('Could not submit your enquiry right now. Please try again in a moment.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className="reveal">
        <p className={styles.sectionLabel}>// Start a conversation</p>
        <h2 className={styles.title}>
          Let's find<br />your next<br /><em>exceptional</em><br />hire.
        </h2>
      </div>

      {isSubmitted ? (
        <div className={styles.thankYouWrap}>
          <p className={styles.thankYouMessage}>
            Thank you!!<br />Your request is submitted, we will contact you shortly.
          </p>
        </div>
      ) : (
        <form className={`${styles.form} reveal`} onSubmit={handleSubmit}>
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(event) => handleInputChange('website', event.target.value)}
            className={styles.honeypot}
            aria-hidden="true"
          />
          <div className={styles.row}>
            <div className={styles.group}>
              <label className={styles.label}>First Name</label>
              <input
                className={styles.input}
                type="text"
                placeholder="James"
                value={formData.firstName}
                onChange={(event) => handleInputChange('firstName', event.target.value)}
                required
              />
            </div>
            <div className={styles.group}>
              <label className={styles.label}>Last Name</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Whitfield"
                value={formData.lastName}
                onChange={(event) => handleInputChange('lastName', event.target.value)}
              />
            </div>
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Company</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Meridian Capital Group"
              value={formData.company}
              onChange={(event) => handleInputChange('company', event.target.value)}
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              placeholder="james@meridian.com"
              value={formData.email}
              onChange={(event) => handleInputChange('email', event.target.value)}
              required
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Phone Number</label>
            <input
              className={styles.input}
              type="tel"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={(event) => handleInputChange('phone', event.target.value)}
              required
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label}>Tell us what you are looking for!</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Security guard, Housekeeper..."
              value={formData.requirement}
              onChange={(event) => handleInputChange('requirement', event.target.value)}
              required
            />
          </div>
          {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : null}
          <button className={styles.btn} type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Enquiry →'}
          </button>
        </form>
      )}
    </section>
  )
}
