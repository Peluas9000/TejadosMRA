export interface Service {
  icon: string
  title: string
  desc: string
}

export interface ProcessStep {
  icon: string
  title: string
  desc: string
}

export interface Testimonial {
  name: string
  zone: string
  text: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface QuoteForm {
  name: string
  phone: string
  zone: string
  service: string
  message: string
}

export type ToastKind = 'success' | 'error'