'use client';

import React from 'react';
import { Phone, Mail, MapPin, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

export default function ContactForm({
  headline = 'Contact the Event Team',
  subheadline = 'Questions about tickets, partnerships, or accessibility?',
  contactInfo = [],
}: Partial<ContactFormProps>) {
  const iconMap: Record<string, React.ElementType> = { Phone, Mail, MapPin, Info };
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="border bg-background"><CardContent className="p-6">
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" placeholder="Your name" /></div>
                <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="your@email.com" /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="subject">Subject</Label><Input id="subject" placeholder="How can we help?" /></div>
              <div className="space-y-2"><Label htmlFor="message">Message</Label><Textarea id="message" placeholder="Tell us more..." rows={5} /></div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent></Card>
          {contactInfo && contactInfo.length > 0 && (
            <div className="flex flex-col justify-center space-y-8">
              {contactInfo.map(function(info, i) {
                const Icon = iconMap[info.icon] || Info;
                return (
                  <div key={i} className="flex items-start gap-4">
                    {React.createElement(Icon, { className: 'h-6 w-6 text-primary mt-1' })}
                    <div><p className="font-semibold text-foreground">{info.label}</p><p className="text-muted-foreground">{info.value}</p></div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
