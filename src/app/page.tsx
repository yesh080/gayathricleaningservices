'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Phone, Mail, MapPin, Clock, Star, Award, Users } from 'lucide-react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Cleaning Service Inquiry from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Type: ${formData.serviceType}\n\nMessage:\n${formData.message}`
    window.location.href = `mailto:yeshyeswanth8@gmail.com?subject=${subject}&body=${body}`
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Gayatri Cleaning Services</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</button>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-cdc46900b518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-green-800/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Professional Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">Making your spaces sparkle with excellence</p>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-green-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              About Gayatri Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a trusted cleaning service provider committed to delivering exceptional cleaning solutions for homes, offices, and industries. With years of experience and a team of dedicated professionals, we ensure your spaces are spotless and hygienic.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Experienced Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Professional cleaners with extensive training and experience in all types of cleaning services.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white/80 backdrop-blur-sm border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-green-900">Quality Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We use high-quality cleaning products and equipment to ensure the best results every time.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white/80 backdrop-blur-sm border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Our priority is your satisfaction. We go above and beyond to meet your cleaning needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-40 h-40 bg-green-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">Comprehensive cleaning solutions for every need</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-blue-100">
              <div className="h-48 bg-cover bg-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" style={{backgroundImage: "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-blue-900">
                  <span className="mr-2 text-2xl">🏠</span>
                  Basic House Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Comprehensive home cleaning services including dusting, vacuuming, mopping, bathroom cleaning, and kitchen sanitation. Perfect for regular maintenance or deep cleaning sessions.
                </CardDescription>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-700">💰 Pricing depends on size</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-green-100">
              <div className="h-48 bg-cover bg-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" style={{backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-green-900">
                  <span className="mr-2 text-2xl">🏢</span>
                  Office Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Professional office cleaning services to maintain a clean and productive work environment. Includes desk cleaning, floor maintenance, waste disposal, and restroom sanitization.
                </CardDescription>
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm font-medium text-green-700">💰 Pricing depends on size</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-blue-100">
              <div className="h-48 bg-cover bg-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" style={{backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-blue-900">
                  <span className="mr-2 text-2xl">🏭</span>
                  Industry Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Specialized industrial cleaning services for factories, warehouses, and manufacturing facilities. Heavy-duty cleaning, equipment maintenance, and industrial sanitation solutions.
                </CardDescription>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-700">💰 Pricing depends on size</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-36 h-36 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-44 h-44 bg-green-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600">Get in touch for a free consultation</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/90 backdrop-blur-sm border-blue-100 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50 rounded-t-lg border-b border-blue-100">
                <CardTitle className="text-blue-900">Send us a message</CardTitle>
                <CardDescription className="text-gray-600">Fill out the form below and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="mt-1 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="mt-1 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="mt-1 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="serviceType" className="text-gray-700 font-medium">Service Type</Label>
                    <Select onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                      <SelectTrigger className="mt-1 border-blue-200 focus:border-blue-400 focus:ring-blue-400">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">Basic House Cleaning</SelectItem>
                        <SelectItem value="office">Office Cleaning</SelectItem>
                        <SelectItem value="industry">Industry Cleaning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      required
                      className="mt-1 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold py-3 shadow-lg transform hover:scale-105 transition-all duration-200">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-white/90 backdrop-blur-sm border-green-100 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 rounded-t-lg border-b border-green-100">
                  <CardTitle className="text-green-900">Get in touch</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <a href="tel:7893562452" className="text-blue-600 hover:underline font-medium">7893562452</a>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <Mail className="h-5 w-5 text-green-600" />
                    <a href="mailto:yeshyeswanth8@gmail.com" className="text-green-600 hover:underline font-medium">yeshyeswanth8@gmail.com</a>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="text-gray-700 font-medium">Service Area:</p>
                      <p className="text-gray-600 text-sm">Rani Gari Thota, Vijayawada, Andhra Pradesh</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700 font-medium">Mon-Sat: 8:00 AM - 8:00 PM</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button asChild className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 shadow-lg transform hover:scale-105 transition-all duration-200">
                  <a href="tel:7893562452">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 shadow-lg transform hover:scale-105 transition-all duration-200">
                  <a href="mailto:yeshyeswanth8@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Now
                  </a>
                </Button>
              </div>
              
              {/* Map Location */}
              <Card className="bg-white/90 backdrop-blur-sm border-blue-100 shadow-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50 rounded-t-lg border-b border-blue-100">
                  <CardTitle className="flex items-center text-blue-900">
                    <MapPin className="h-5 w-5 mr-2" />
                    Our Location - Rani Gari Thota
                  </CardTitle>
                  <CardDescription className="text-gray-600">Visit us at our service location in Vijayawada</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-64 rounded-b-lg overflow-hidden">
                    {/* Temporary placeholder for map */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                        <p className="text-gray-700 font-semibold">Rani Gari Thota, Vijayawada</p>
                        <p className="text-sm text-gray-500">Google Maps will be embedded here</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white py-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Gayatri Cleaning Services
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Professional cleaning solutions for homes, offices, and industries. Making your spaces sparkle with excellence since day one.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-300">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <a href="tel:7893562452" className="text-gray-300 hover:text-white transition-colors">7893562452</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-green-400" />
                  <a href="mailto:yeshyeswanth8@gmail.com" className="text-gray-300 hover:text-white transition-colors">yeshyeswanth8@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Gayatri Cleaning Services. All rights reserved. | 
              <span className="text-blue-400"> Professional Cleaning Excellence</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}