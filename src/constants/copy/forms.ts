export const FORM_COPY = {
  fullName: "Full Name",
  fullNamePlaceholder: "Jane Sharma",
  email: "Email Address",
  emailPlaceholder: "you@example.com",
  phone: "Phone Number",
  phonePlaceholder: "9851007207",
  interest: "Facility Interest",
  interestAll: "All facilities (full tour)",
  message: "Message / Special Requests",
  messagePlaceholder: "Preferred visit date, goals, or questions…",
  submit: "Reservation Request",
  submitting: "Sending…",
  required: "Required",
  optional: "Optional",
  successTitle: "Request received",
  successBody:
    "Thank you — our team will confirm your reservation shortly during opening hours (6:00 AM – 10:00 PM).",
  sendAnother: "Send another request",
  errors: {
    name: "Please enter your full name.",
    email: "Please enter a valid email address.",
    phone: "Please enter a valid phone number (7+ digits).",
    message: "Please tell us a little about your visit (10+ characters).",
  },
} as const;

export const VALIDATION_COPY = FORM_COPY.errors;

export const EMPTY_STATE_COPY = {
  galleryNone: "No photos in this collection yet.",
  galleryNoneHint: "Try another category.",
  facilitiesNone: "No facilities found.",
} as const;

export const CONFIRM_COPY = {
  closeDialog: "Close dialog",
  prevImage: "Previous image",
  nextImage: "Next image",
} as const;
