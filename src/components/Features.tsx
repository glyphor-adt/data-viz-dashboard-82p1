import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Real-Time Data Streaming',
    description: 'Get up-to-the-minute insights with our real-time data streaming capabilities. See changes as they happen and react accordingly.',
  },
  {
    icon: Shield,
    title: 'Secure and Compliant',
    description: 'Your data is safe with us. We adhere to the highest security standards and ensure full compliance with industry regulations.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Stay ahead of the curve with our predictive analytics tools. Forecast future trends and make proactive decisions.',
  },
]

function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background p-6 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
