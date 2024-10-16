"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          duration: 5000,
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-poppins text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-poppins text-2xl font-semibold mb-4 text-purple-300">Contact Information</h3>
            <p className="mb-4 text-gray-300">
              Feel free to reach out for opportunities or just to say hello!
            </p>
            <p className="mb-2 text-gray-300">
              <strong>Email:</strong> devanand.1si18ei030@gmail.com
            </p>
            <p className="mb-2 text-gray-300">
              <strong>Phone:</strong> +1 (704) 236-4893
            </p>
            <p className="mb-2 text-gray-300">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/devanandn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                linkedin.com/in/devanandn
              </a>
            </p>
            <p className="text-gray-300">
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/devanandn54"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                github.com/devanandn54
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input 
              placeholder="Your Name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white/10 border-purple-500 text-white"
            />
            <Input 
              type="email" 
              placeholder="Your Email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white/10 border-purple-500 text-white"
            />
            <Textarea 
              placeholder="Your Message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-white/10 border-purple-500 text-white"
            />
            <Button 
              type="submit" 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}